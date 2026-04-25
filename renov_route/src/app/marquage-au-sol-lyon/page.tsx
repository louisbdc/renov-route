'use client'

import StructuredData from '@/components/StructuredData'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import FAQSchema from '@/components/FAQSchema'
import ServicePageLayout, {
  ServiceItemsGrid,
  ServiceFAQ,
} from '@/components/ServicePageLayout'
import ServiceProcessTimeline from '@/components/ServiceProcessTimeline'
import Link from 'next/link'
import { CITIES } from '@/lib/data/cities'
import {
  TbMapPin,
  TbParking,
  TbRoad,
  TbBuildingFactory2,
  TbBallFootball,
  TbWheelchair,
  TbPalette,
  TbCertificate,
  TbClock,
  TbShield,
} from 'react-icons/tb'

const BREADCRUMB = [
  { name: 'Accueil', url: 'https://renov-route.com/' },
  { name: 'Marquage au sol Lyon', url: 'https://renov-route.com/marquage-au-sol-lyon/' },
]

const FEATURES = [
  { icon: <TbCertificate size={20} />, title: 'Depuis 2014 à Lyon', description: "Plus de 1 000 chantiers réalisés en Rhône-Alpes. Nous connaissons le terrain, les contraintes locales et les réglementations en vigueur." },
  { icon: <TbShield size={20} />, title: 'Peintures certifiées NF EN 1436', description: 'Produits routiers haute résistance aux UV, intempéries et trafic intense. Résultat durable, même sur les parkings à fort passage.' },
  { icon: <TbClock size={20} />, title: 'Devis sous 24h, intervention rapide', description: 'Visite sur site gratuite, devis détaillé en 24h. Intervention planifiée selon vos contraintes (horaires, activité).' },
  { icon: <TbPalette size={20} />, title: 'Marquage sur mesure', description: 'Couleurs personnalisées, logos, numérotation, signalétique adaptée à votre identité visuelle et vos besoins spécifiques.' },
]

const SERVICES = [
  { icon: <TbParking size={22} />, title: 'Marquage de parking', description: "Places, flèches, passages piétons, zones PMR, numérotation. Parkings de centres commerciaux, entreprises, hôtels, copropriétés.", link: '/competences/tracage-retracage-parking/' },
  { icon: <TbRoad size={22} />, title: 'Marquage routier & voirie', description: "Signalisation horizontale : lignes, bandes, flèches directionnelles, zébras, îlots. Voirie publique et privée.", link: '/competences/tracage-retracage-parking/' },
  { icon: <TbBuildingFactory2 size={22} />, title: 'Marquage industriel', description: "Marquage au sol d'entrepôts, ateliers et zones logistiques : allées de circulation, zones de stockage, cheminements piétons.", link: '/competences/resine-sol-marquage-interieur/' },
  { icon: <TbBallFootball size={22} />, title: 'Traçage sportif', description: 'Terrains de basket, tennis, handball, badminton. Peintures conformes aux normes sportives, intérieures et extérieures.', link: '/competences/tracage-retracage-parking/' },
  { icon: <TbWheelchair size={22} />, title: 'Mise en conformité PMR', description: "Places handicapées, bandes de guidage, signalétique au sol conforme aux normes d'accessibilité. Mise aux normes de parkings existants.", link: '/guides/mise-en-conformite-parking-pmr/' },
  { icon: <TbPalette size={22} />, title: 'Résine de sol & revêtement', description: 'Résine epoxy, polyuréthane, revêtements antidérapants pour sols industriels, garages, ateliers. Protection et marquage intérieur.', link: '/competences/resine-sol-marquage-interieur/' },
]

const STEPS = [
  { step: '01', title: 'Contact & visite sur site', description: "Prise de contact, visite gratuite pour analyser votre besoin, mesurer les surfaces et identifier les contraintes (trafic, accès, état du sol)." },
  { step: '02', title: 'Devis détaillé sous 24h', description: "Plan de marquage sur mesure avec estimation précise. Choix des produits adaptés à votre usage (parking, voirie, industriel)." },
  { step: '03', title: 'Préparation du chantier', description: "Balayage mécanique, effacement de l'ancien marquage si nécessaire, réparation des zones dégradées (nids de poule, fissures)." },
  { step: '04', title: 'Réalisation & contrôle qualité', description: "Application du marquage par nos équipes. Contrôle qualité en fin de chantier. Remise en circulation selon le temps de séchage (1 à 3h)." },
]

const FAQ = [
  {
    question: 'Quels types de marquage au sol réalisez-vous à Lyon ?',
    answer: "Nous couvrons tous les types de marquage : parking (places, flèches, PMR), voirie (lignes, passages piétons, zébras), industriel (entrepôts, zones logistiques), sportif (terrains intérieurs et extérieurs) et résine de sol (epoxy, polyuréthane). Nous intervenons sur toute la région lyonnaise et Rhône-Alpes.",
  },
  {
    question: 'Quelle est votre zone d\'intervention autour de Lyon ?',
    answer: "Basés à Tassin-la-Demi-Lune (69160), nous intervenons dans toute l'agglomération lyonnaise (Villeurbanne, Vénissieux, Vaulx-en-Velin, Bron, Écully...) ainsi que dans tout le département du Rhône et la région Auvergne-Rhône-Alpes.",
  },
  {
    question: 'Combien coûte un marquage au sol à Lyon ?',
    answer: "Le prix dépend du type de marquage, de la surface et du produit utilisé. À titre indicatif : le marquage de parking démarre à environ 2,50€/ml pour les lignes simples. Nous établissons un devis gratuit et personnalisé après visite sur site. Consultez notre guide des prix pour plus de détails.",
  },
  {
    question: 'Combien de temps dure un marquage au sol ?',
    answer: "Avec nos peintures routières certifiées NF EN 1436, un marquage au sol dure en moyenne 2 à 5 ans selon le trafic et l'exposition. Les résines epoxy offrent une durabilité encore supérieure (5 à 10 ans) pour les sols industriels intérieurs.",
  },
  {
    question: 'Intervenez-vous en dehors des heures ouvrées ?',
    answer: "Oui, nous planifions les interventions selon vos contraintes : nuit, week-end, jours fériés. C'est particulièrement utile pour les parkings de centres commerciaux ou les voiries publiques où le trafic doit être maintenu.",
  },
  {
    question: 'Faut-il préparer le sol avant le marquage ?',
    answer: "Nous prenons en charge la préparation complète : balayage mécanique, effacement de l'ancien marquage, réparation des nids de poule et fissures. Un sol bien préparé garantit un marquage durable et net.",
  },
]

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Marquage au sol Lyon",
  "description": "Entreprise de marquage au sol à Lyon et Rhône-Alpes depuis 2014. Traçage parking, marquage routier, marquage industriel, traçage sportif, mise en conformité PMR. 1 000+ chantiers réalisés pour Carrefour, Lidl, McDonald's, Armée de Terre.",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://renov-route.com/#business",
    "name": "Rénov Route",
    "image": "https://renov-route.com/assets/logos/logo.avif",
    "url": "https://renov-route.com/",
    "telephone": "+33786819692",
    "priceRange": "€€",
    "foundingDate": "2014",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6, allée du ruisseau de Ribbes",
      "addressLocality": "Tassin-la-Demi-Lune",
      "postalCode": "69160",
      "addressRegion": "Auvergne-Rhône-Alpes",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "45.7640",
      "longitude": "4.8357"
    },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }]
  },
  "areaServed": [
    { "@type": "City", "name": "Lyon" },
    { "@type": "City", "name": "Villeurbanne" },
    { "@type": "City", "name": "Vénissieux" },
    { "@type": "City", "name": "Vaulx-en-Velin" },
    { "@type": "City", "name": "Bron" },
    { "@type": "City", "name": "Saint-Priest" },
    { "@type": "City", "name": "Tassin-la-Demi-Lune" },
    { "@type": "City", "name": "Écully" },
    { "@type": "City", "name": "Caluire-et-Cuire" },
    { "@type": "City", "name": "Rillieux-la-Pape" },
    { "@type": "AdministrativeArea", "name": "Rhône" },
    { "@type": "AdministrativeArea", "name": "Auvergne-Rhône-Alpes" }
  ],
  "serviceType": [
    "Marquage au sol",
    "Marquage de parking",
    "Marquage routier",
    "Signalisation horizontale",
    "Marquage industriel",
    "Traçage sportif",
    "Mise en conformité PMR",
    "Résine de sol",
    "Réparation de nids de poule",
    "Retraçage parking"
  ],
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR",
    "description": "Devis gratuit sous 24h, sans engagement"
  }
}

export default function MarquageAuSolLyonPage() {
  return (
    <>
      <StructuredData type="homepage" />
      <BreadcrumbSchema items={BREADCRUMB} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <FAQSchema items={FAQ} />

      <ServicePageLayout
        breadcrumb={BREADCRUMB}
        heroIcon={<TbMapPin size={28} />}
        heroTitle={<>Marquage au sol à <strong className="text-[#FACC15]">Lyon</strong></>}
        heroSubtitle="Entreprise spécialisée en marquage au sol depuis 2014. Parking, voirie, industriel, sport, PMR : nous intervenons sur tous types de surfaces à Lyon et en Rhône-Alpes."
        heroBackgroundImage="/assets/images/realisations/lidl-verpiliere-parking_1.avif"
        heroImageAlt="Marquage au sol parking à Lyon par Rénov Route"
        accentColor="amber"
        descriptionHeading="Votre entreprise de marquage au sol à Lyon"
        descriptionParagraphs={[
          "Depuis 2014, Rénov Route est spécialisée dans le marquage au sol à Lyon et dans toute la région Rhône-Alpes. Avec plus de 1 000 chantiers réalisés, nous accompagnons les entreprises, collectivités, copropriétés et gestionnaires de sites dans tous leurs projets de signalisation horizontale.",
          <>Nos équipes interviennent sur tous types de surfaces et de marquages : <Link href="/competences/tracage-retracage-parking/" className="text-[#FACC15] hover:text-[#0F172A] underline">traçage de parking</Link>, marquage de voirie, <Link href="/competences/resine-sol-marquage-interieur/" className="text-[#FACC15] hover:text-[#0F172A] underline">résine de sol industriel</Link>, traçage sportif et <Link href="/guides/mise-en-conformite-parking-pmr/" className="text-[#FACC15] hover:text-[#0F172A] underline">mise en conformité PMR</Link>.</>,
          <>Nous utilisons exclusivement des peintures routières certifiées NF EN 1436 et des résines haute performance pour garantir un résultat durable. Si votre sol nécessite une remise en état avant le marquage, nous assurons également la <Link href="/competences/reparation-nids-de-poule/" className="text-[#FACC15] hover:text-[#0F172A] underline">réparation de nids de poule</Link> et la préparation de surface.</>,
        ]}
        features={FEATURES}
        ctaTitle="Un projet de marquage au sol à Lyon ?"
        ctaSubtitle="Visite sur site gratuite, devis détaillé sous 24h. Nous intervenons dans toute l'agglomération lyonnaise et en Rhône-Alpes."
      >
        <ServiceItemsGrid
          title="Tous nos services de marquage au sol"
          subtitle="Parking, voirie, industriel, sport, PMR : une expertise complète."
          items={SERVICES.map(({ link: _link, ...item }) => item)}
          cols={3}
          alt
        />

        {/* Links to detailed service pages */}
        <section className="py-16 sm:py-20 px-4 bg-[#F0F4F8]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4 font-display">
              En savoir plus sur nos prestations
            </h2>
            <p className="text-slate-500 mb-8">
              Chaque type de marquage a ses spécificités. Consultez nos pages dédiées pour plus de détails.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map((service, i) => (
                <Link
                  key={i}
                  href={service.link}
                  className="flex items-start gap-3 p-5 rounded-xl border border-slate-200 bg-white hover:border-[#FACC15] hover:bg-[#F8FAFC] transition-colors group"
                >
                  <div className="text-[#FACC15] mt-0.5 flex-shrink-0">{service.icon}</div>
                  <div>
                    <h3 className="font-semibold text-[#0F172A] group-group-hover:text-[#FACC15] transition-colors">{service.title}</h3>
                    <p className="text-slate-400 text-sm mt-1">Voir le détail</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Carte + ancienneté visible */}
        <section className="py-16 sm:py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="inline-block text-[11px] font-black uppercase tracking-[0.25em] text-[#FACC15] mb-4">
                  Implantation locale
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-[#0F172A] mb-6 leading-[0.95]">
                  12 ans d'expertise, 1 000+ chantiers
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed font-medium text-base sm:text-lg">
                  Implantés à <strong className="text-[#0F172A]">Tassin-la-Demi-Lune depuis 2014</strong>, nous connaissons le terrain lyonnais comme personne. Notre équipe intervient dans la journée sur l'agglomération et dans la semaine partout en Auvergne-Rhône-Alpes.
                </p>
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
                  <div>
                    <div className="text-4xl font-black italic text-[#FACC15] tabular-nums mb-1">12</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Années d'expérience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black italic text-[#FACC15] tabular-nums mb-1">1 000+</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Chantiers réalisés</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black italic text-[#FACC15] tabular-nums mb-1">24h</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Devis garanti</div>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] w-full overflow-hidden border border-slate-200">
                <iframe
                  src="https://www.google.com/maps?q=Renov+Route+Tassin-la-Demi-Lune&z=11&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Renov Route - Tassin-la-Demi-Lune"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Zone d'intervention — pages locales par commune */}
        <section className="py-20 sm:py-24 px-6 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.25em] text-[#FACC15] mb-4">
              Couverture géographique
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-[#0F172A] mb-6 leading-[0.95]">
              Marquage au sol par commune
            </h2>
            <p className="text-slate-600 mb-12 max-w-3xl leading-relaxed font-medium">
              Basés à <strong className="text-[#0F172A]">Tassin-la-Demi-Lune (69160)</strong>, nos équipes interviennent dans <strong className="text-[#0F172A]">tous les arrondissements de Lyon</strong>, dans toutes les communes de la Métropole et plus largement en Auvergne-Rhône-Alpes. Délai moyen d&apos;intervention sur Lyon : <strong className="text-[#0F172A]">48 à 72h</strong>.
            </p>

            {/* Lyon arrondissements */}
            <div className="mb-12">
              <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400 mb-5 pb-3 border-b border-slate-200">Arrondissements de Lyon</h3>
              <div className="grid gap-2 grid-cols-3 sm:grid-cols-5 lg:grid-cols-9">
                {CITIES.filter(c => c.isArrondissement).map(c => (
                  <Link key={c.slug} href={`/marquage-au-sol-${c.slug}/`} className="text-center px-3 py-3 bg-white border border-slate-200 hover:border-[#FACC15] hover:bg-[#FACC15]/5 transition-colors group">
                    <div className="text-sm font-black uppercase italic text-[#0F172A] group-hover:text-[#FACC15] tracking-tight">{c.name.replace('Lyon ', '')}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Métropole */}
            <div className="mb-12">
              <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400 mb-5 pb-3 border-b border-slate-200">Métropole de Lyon</h3>
              <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {CITIES.filter(c => !c.isArrondissement && !c.isRhoneAlpes).map(c => (
                  <Link key={c.slug} href={`/marquage-au-sol-${c.slug}/`} className="flex items-center justify-between px-4 py-3 bg-white border border-slate-200 hover:border-[#FACC15] hover:bg-[#FACC15]/5 transition-colors group">
                    <span className="text-sm font-bold text-[#0F172A] group-hover:text-[#FACC15] truncate">{c.name}</span>
                    <span className="text-[9px] font-bold text-slate-400 ml-2 shrink-0">{c.postalCode}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Rhône-Alpes */}
            <div>
              <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400 mb-5 pb-3 border-b border-slate-200">Auvergne-Rhône-Alpes étendu</h3>
              <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                {CITIES.filter(c => c.isRhoneAlpes).map(c => (
                  <Link key={c.slug} href={`/marquage-au-sol-${c.slug}/`} className="flex items-center justify-between px-4 py-3 bg-white border border-slate-200 hover:border-[#FACC15] hover:bg-[#FACC15]/5 transition-colors group">
                    <span className="text-sm font-bold text-[#0F172A] group-hover:text-[#FACC15] truncate">{c.name}</span>
                    <span className="text-[9px] font-bold text-slate-400 ml-2 shrink-0">{c.department.code}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi nous choisir — Trust Signals */}
        <section className="py-20 sm:py-24 px-6 bg-[#0F172A] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, #FACC15 0px, #FACC15 2px, transparent 2px, transparent 10px)',
            }}
          />
          <div className="relative max-w-6xl mx-auto">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.25em] text-[#FACC15] mb-4">
              Pourquoi nous choisir
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-6 leading-[0.95]">
              Pourquoi choisir <span className="text-[#FACC15]">Rénov Route</span> pour votre marquage au sol à Lyon ?
            </h2>
            <p className="text-slate-300 mb-12 max-w-3xl leading-relaxed font-medium">
              Nous ne sommes pas la plus grosse entreprise de marquage routier de Lyon, mais nous sommes celle que choisissent les plus grandes enseignes nationales pour leurs sites en Rhône-Alpes.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
              {[
                { number: '10+', label: "années d'expérience", detail: 'Fondée en 2014 à Lyon' },
                { number: '1 000+', label: 'chantiers réalisés', detail: 'Parkings, voiries, industriels' },
                { number: '19', label: 'enseignes nationales', detail: "Carrefour, Lidl, McDonald's, Armée de Terre, Suez…" },
                { number: '24h', label: 'pour votre devis', detail: 'Visite sur site gratuite, sans engagement' },
              ].map((stat, i) => (
                <div key={i} className="bg-[#0F172A] p-8">
                  <div className="text-5xl sm:text-6xl font-black italic tracking-tighter text-[#FACC15] mb-3 leading-none">
                    {stat.number}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.25em] text-white mb-3">
                    {stat.label}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceProcessTimeline
          title="Comment se déroule un chantier de marquage ?"
          subtitle="Un processus éprouvé, de la prise de contact à la réception du chantier."
          steps={STEPS}
          alt
        />

        {/* Guides & resources */}
        <section className="py-16 sm:py-20 px-4 bg-[#F0F4F8]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4 font-display">
              Guides pratiques
            </h2>
            <p className="text-slate-500 mb-8">Prix, normes, réglementation : nos guides pour préparer votre projet.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Prix marquage au sol parking', href: '/guides/prix-marquage-sol-parking/', desc: 'Tarifs au mètre linéaire, par place, devis type.' },
                { title: 'Mise en conformité PMR', href: '/guides/mise-en-conformite-parking-pmr/', desc: 'Obligations légales, normes, sanctions.' },
                { title: 'Comment tracer un parking', href: '/guides/comment-tracer-parking/', desc: 'Étapes, dimensions, réglementation.' },
                { title: 'Résine epoxy ou peinture de sol', href: '/guides/resine-epoxy-ou-peinture-sol-comparatif/', desc: 'Comparatif, avantages, cas d\'usage.' },
                { title: 'Panneau limitation vitesse parking', href: '/guides/panneau-limitation-vitesse-parking/', desc: 'Obligations, types de panneaux, prix.' },
                { title: 'Tous nos guides', href: '/guides/', desc: '40+ articles sur le marquage au sol.' },
              ].map((guide, i) => (
                <Link
                  key={i}
                  href={guide.href}
                  className="p-5 rounded-xl border border-slate-200 bg-white hover:border-[#FACC15] hover:bg-[#F8FAFC] transition-colors group"
                >
                  <h3 className="font-semibold text-[#0F172A] group-hover:text-[#FACC15] transition-colors mb-1">{guide.title}</h3>
                  <p className="text-slate-500 text-sm">{guide.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ServiceFAQ items={FAQ} alt />
      </ServicePageLayout>
    </>
  )
}
