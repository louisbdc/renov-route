#!/usr/bin/env node
import { readFileSync, existsSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { copyFile, readFile } from 'node:fs/promises'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createHash } from 'node:crypto'
import { spawnSync } from 'node:child_process'
import JSZip from 'jszip'
import { z } from 'zod'
import pc from 'picocolors'
import { confirm } from '@inquirer/prompts'
import { Project, SyntaxKind, QuoteKind, NewLineKind, IndentationText } from 'ts-morph'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')
const caseStudiesDataPath = resolve(repoRoot, 'src/lib/data/case-studies-data.ts')
const partnerMappingPath = resolve(repoRoot, 'src/lib/data/partner-mapping.ts')
const imagesDir = resolve(repoRoot, 'public/assets/images/realisations')
const stagingDir = resolve(repoRoot, '.tmp/import-staging')

const CategorySchema = z.enum([
  'parking',
  'industrial',
  'commercial',
  'municipal',
  'residential'
])

const KpiSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1)
})

const ManifestCaseStudySchema = z.object({
  id: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().min(5),
  client: z.string().min(1),
  industry: z.string().min(1),
  year: z.number().int(),
  stack: z.array(z.string()).min(1),
  summary: z.string().min(20),
  thumbnail: z.string().min(1),
  heroMedia: z.string().min(1),
  images: z.array(z.string()).min(1),
  kpis: z.array(KpiSchema),
  body: z.string().min(40),
  category: CategorySchema,
  imageFiles: z.array(z.string().regex(/^[a-z0-9-]+_[0-9]+\.avif$/i)).min(1)
})

const ManifestSchema = z.object({
  version: z.literal(1),
  generatedAt: z.string(),
  generatedBy: z.string(),
  snapshotHash: z.string(),
  caseStudies: z.array(ManifestCaseStudySchema).min(1),
  partnerPatches: z
    .array(
      z.object({
        partnerName: z.string(),
        op: z.literal('appendRelatedProject'),
        projectId: z.string()
      })
    )
    .default([])
})

type Manifest = z.infer<typeof ManifestSchema>

const log = {
  info: (msg: string) => console.log(pc.cyan('→'), msg),
  ok: (msg: string) => console.log(pc.green('✓'), msg),
  warn: (msg: string) => console.log(pc.yellow('⚠'), msg),
  err: (msg: string) => console.log(pc.red('✗'), msg)
}

const die = (msg: string): never => {
  log.err(msg)
  process.exit(1)
}

const parseArgs = (): { zipPath: string; skipBuild: boolean } => {
  const args = process.argv.slice(2)
  const zipPath = args.find((a) => !a.startsWith('--'))
  if (!zipPath) die('Usage: tsx scripts/import-realisation.ts <chemin-du-zip> [--skip-build]')
  if (!existsSync(zipPath)) die(`ZIP introuvable: ${zipPath}`)
  return {
    zipPath: resolve(zipPath),
    skipBuild: args.includes('--skip-build')
  }
}

const readManifestAndImages = async (
  zipPath: string
): Promise<{ manifest: Manifest; imageEntries: Map<string, Buffer> }> => {
  const zipBuffer = await readFile(zipPath)
  const zip = await JSZip.loadAsync(zipBuffer)

  const manifestFile = zip.file('manifest.json')
  if (!manifestFile) die('manifest.json introuvable dans le ZIP')

  let parsedJson: unknown
  try {
    parsedJson = JSON.parse(await manifestFile!.async('string'))
  } catch (error) {
    die(`manifest.json invalide (JSON): ${(error as Error).message}`)
  }

  const result = ManifestSchema.safeParse(parsedJson)
  if (!result.success) {
    die(
      'manifest.json invalide (schéma):\n' +
        result.error.issues
          .map((i) => `  - ${i.path.join('.') || 'racine'}: ${i.message}`)
          .join('\n')
    )
  }

  const imageEntries = new Map<string, Buffer>()
  for (const caseStudy of result.data!.caseStudies) {
    for (const fileName of caseStudy.imageFiles) {
      const entry = zip.file(`images/${fileName}`)
      if (!entry) die(`Image manquante dans le ZIP: images/${fileName}`)
      imageEntries.set(fileName, Buffer.from(await entry!.async('arraybuffer')))
    }
  }

  return { manifest: result.data!, imageEntries }
}

const currentSnapshotHash = (): string => {
  const content =
    readFileSync(caseStudiesDataPath, 'utf8') +
    readFileSync(partnerMappingPath, 'utf8')
  return createHash('sha256').update(content).digest('hex')
}

const existingSlugs = (): Set<string> => {
  const src = readFileSync(caseStudiesDataPath, 'utf8')
  const slugs = new Set<string>()
  for (const match of src.matchAll(/\bslug:\s*"([a-z0-9-]+)"/g)) {
    slugs.add(match[1])
  }
  return slugs
}

const preflightChecks = (manifest: Manifest): void => {
  const slugs = existingSlugs()
  const collisions: string[] = []
  const imageConflicts: string[] = []

  for (const caseStudy of manifest.caseStudies) {
    if (slugs.has(caseStudy.slug)) collisions.push(caseStudy.slug)
    for (const fileName of caseStudy.imageFiles) {
      if (existsSync(join(imagesDir, fileName))) imageConflicts.push(fileName)
    }
  }

  if (collisions.length > 0) {
    die(
      `Collisions de slugs avec le site actuel:\n${collisions.map((s) => `  - ${s}`).join('\n')}`
    )
  }

  if (imageConflicts.length > 0) {
    die(
      `Images déjà présentes dans public/assets/images/realisations/:\n${imageConflicts.map((f) => `  - ${f}`).join('\n')}\nRefus d'écrasement silencieux.`
    )
  }

  const internalSlugs = new Set<string>()
  for (const caseStudy of manifest.caseStudies) {
    if (internalSlugs.has(caseStudy.slug)) {
      die(`Slug dupliqué à l'intérieur du ZIP: ${caseStudy.slug}`)
    }
    internalSlugs.add(caseStudy.slug)
  }
}

const patchCaseStudiesData = (manifest: Manifest): string[] => {
  const project = new Project({
    tsConfigFilePath: resolve(repoRoot, 'tsconfig.json'),
    skipAddingFilesFromTsConfig: true,
    manipulationSettings: {
      quoteKind: QuoteKind.Double,
      newLineKind: NewLineKind.LineFeed,
      useTrailingCommas: true,
      indentationText: IndentationText.TwoSpaces
    }
  })

  const sourceFile = project.addSourceFileAtPath(caseStudiesDataPath)

  const arrayDecl = sourceFile
    .getVariableDeclarationOrThrow('caseStudiesData')
    .getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression)

  const addedSlugs: string[] = []

  for (const caseStudy of manifest.caseStudies) {
    const entry = {
      id: caseStudy.slug,
      slug: caseStudy.slug,
      title: caseStudy.title,
      client: caseStudy.client,
      industry: caseStudy.industry,
      year: caseStudy.year,
      stack: caseStudy.stack,
      summary: caseStudy.summary,
      thumbnail: caseStudy.thumbnail,
      heroMedia: caseStudy.heroMedia,
      images: caseStudy.images,
      kpis: caseStudy.kpis,
      body: caseStudy.body,
      category: caseStudy.category
    }
    arrayDecl.addElement(JSON.stringify(entry, null, 2))
    addedSlugs.push(caseStudy.slug)
  }

  sourceFile.saveSync()
  return addedSlugs
}

const patchPartnerMapping = (manifest: Manifest): string[] => {
  if (manifest.partnerPatches.length === 0) return []

  const project = new Project({
    tsConfigFilePath: resolve(repoRoot, 'tsconfig.json'),
    skipAddingFilesFromTsConfig: true,
    manipulationSettings: {
      quoteKind: QuoteKind.Single,
      newLineKind: NewLineKind.LineFeed,
      useTrailingCommas: true,
      indentationText: IndentationText.TwoSpaces
    }
  })

  const sourceFile = project.addSourceFileAtPath(partnerMappingPath)
  const arrayDecl = sourceFile
    .getVariableDeclarationOrThrow('partnerMappings')
    .getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression)

  const patchedPartners: string[] = []

  for (const patch of manifest.partnerPatches) {
    let matched = false
    for (const element of arrayDecl.getElements()) {
      if (!element.isKind(SyntaxKind.ObjectLiteralExpression)) continue
      const obj = element.asKindOrThrow(SyntaxKind.ObjectLiteralExpression)
      const nameProp = obj.getProperty('name')
      if (!nameProp || !nameProp.isKind(SyntaxKind.PropertyAssignment)) continue
      const nameInit = nameProp
        .asKindOrThrow(SyntaxKind.PropertyAssignment)
        .getInitializerIfKindOrThrow(SyntaxKind.StringLiteral)
      if (nameInit.getLiteralValue() !== patch.partnerName) continue

      const relatedProp = obj.getProperty('relatedProjects')
      if (!relatedProp || !relatedProp.isKind(SyntaxKind.PropertyAssignment)) {
        log.warn(
          `Partner "${patch.partnerName}" n'a pas de relatedProjects — ignore le patch.`
        )
        matched = true
        break
      }
      const arr = relatedProp
        .asKindOrThrow(SyntaxKind.PropertyAssignment)
        .getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression)
      const alreadyThere = arr.getElements().some((el) => {
        if (!el.isKind(SyntaxKind.StringLiteral)) return false
        return el.asKindOrThrow(SyntaxKind.StringLiteral).getLiteralValue() === patch.projectId
      })
      if (!alreadyThere) {
        arr.addElement(`'${patch.projectId}'`)
        patchedPartners.push(`${patch.partnerName}+=${patch.projectId}`)
      }
      matched = true
      break
    }
    if (!matched) {
      log.warn(`Partner "${patch.partnerName}" non trouvé — patch ignoré.`)
    }
  }

  sourceFile.saveSync()
  return patchedPartners
}

const runPrettier = (files: string[]): void => {
  const result = spawnSync(
    'npx',
    ['--no-install', 'prettier', '--write', '--log-level', 'warn', ...files],
    { cwd: repoRoot, stdio: 'inherit' }
  )
  if (result.status !== 0) {
    log.warn('prettier a échoué ou n\'est pas installé. Fichiers non reformatés.')
  }
}

const stageImages = async (imageEntries: Map<string, Buffer>): Promise<void> => {
  if (existsSync(stagingDir)) rmSync(stagingDir, { recursive: true, force: true })
  mkdirSync(stagingDir, { recursive: true })
  for (const [fileName, buffer] of imageEntries) {
    writeFileSync(join(stagingDir, fileName), buffer)
  }
}

const moveImagesToPublic = async (
  imageEntries: Map<string, Buffer>
): Promise<void> => {
  mkdirSync(imagesDir, { recursive: true })
  for (const fileName of imageEntries.keys()) {
    await copyFile(join(stagingDir, fileName), join(imagesDir, fileName))
  }
}

const runBuild = (): boolean => {
  log.info('Lancement de npm run build (validation)…')
  const result = spawnSync('npm', ['run', 'build'], {
    cwd: repoRoot,
    stdio: 'inherit'
  })
  return result.status === 0
}

const main = async (): Promise<void> => {
  const { zipPath, skipBuild } = parseArgs()
  log.info(`Lecture du ZIP: ${zipPath}`)

  const { manifest, imageEntries } = await readManifestAndImages(zipPath)
  log.ok(
    `Manifest valide: ${manifest.caseStudies.length} réalisation(s), ${manifest.partnerPatches.length} patch(s) partner, ${imageEntries.size} image(s).`
  )

  const localHash = currentSnapshotHash()
  if (localHash !== manifest.snapshotHash) {
    log.warn(
      `snapshotHash du ZIP (${manifest.snapshotHash.slice(0, 12)}…) diffère du repo actuel (${localHash.slice(0, 12)}…). Le site a changé depuis la génération du ZIP.`
    )
  }

  preflightChecks(manifest)
  log.ok('Préflight OK (pas de collision de slugs ni d\'images).')

  const shouldProceed = await confirm({
    message: `Appliquer l'import de ${manifest.caseStudies.length} réalisation(s) ?`,
    default: true
  })
  if (!shouldProceed) {
    log.info('Abandonné.')
    return
  }

  await stageImages(imageEntries)
  log.ok('Images stagées.')

  const addedSlugs = patchCaseStudiesData(manifest)
  log.ok(`case-studies-data.ts patché (${addedSlugs.length} entrée(s)).`)

  const partnerChanges = patchPartnerMapping(manifest)
  if (partnerChanges.length > 0) {
    log.ok(`partner-mapping.ts patché: ${partnerChanges.join(', ')}.`)
  } else {
    log.info('Aucun patch partner à appliquer.')
  }

  runPrettier([caseStudiesDataPath, partnerMappingPath])

  await moveImagesToPublic(imageEntries)
  log.ok(`${imageEntries.size} image(s) copiées dans public/assets/images/realisations/`)

  rmSync(stagingDir, { recursive: true, force: true })

  if (skipBuild) {
    log.info('--skip-build actif. Pensez à lancer npm run build manuellement.')
    return
  }

  const buildOk = runBuild()
  if (!buildOk) {
    log.err(
      "npm run build a échoué. Inspectez les erreurs, puis soit corrigez, soit rollback avec 'git checkout src/lib/data/ public/assets/images/realisations/'."
    )
    process.exit(1)
  }
  log.ok('Build OK. Réalisations ajoutées avec succès.')
}

main().catch((error) => {
  log.err((error as Error).message)
  process.exit(1)
})
