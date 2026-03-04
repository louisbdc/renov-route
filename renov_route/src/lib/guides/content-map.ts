import type { ComponentType } from 'react'
import RenovationParkingCopropriete from './renovation-parking-copropriete'
import PrixMarquageSolParking from './prix-marquage-sol-parking'
import NormesPmrParking from './normes-pmr-parking'
import EnrobeFroidVsResine from './enrobe-froid-vs-resine-nids-de-poule'
import NidDePouleResponsabilite from './nid-de-poule-responsabilite-parking'
import EntretienParkingSignes from './entretien-parking-signes-renovation'
import DimensionsPlacesPmr from './dimensions-nombre-places-pmr-parking'
import RenovationParkingEntreprise from './renovation-parking-entreprise'
import MiseEnConformitePmr from './mise-en-conformite-parking-pmr'
import CoutRenovationParking from './cout-renovation-parking'
import SignalisationPmrParking from './signalisation-pmr-parking'
import PeintureMarquageSolParking from './peinture-marquage-sol-parking'
import CommentTracerParking from './comment-tracer-parking'
import CouleurMarquageSolParking from './couleur-marquage-sol-parking'
import RalentisseurParkingNorme from './ralentisseur-parking-norme'
import PassagePietonParkingNorme from './passage-pieton-parking-norme'
import SignalisationParkingReglementation from './signalisation-parking-reglementation'
import ReglementationMarquageSolParking from './reglementation-marquage-sol-parking'
import ResineSolParkingPrixTypes from './resine-sol-parking-prix-types'
import BarriereParkingTypesPrix from './barriere-parking-types-prix'
import PeintureSolGarageTypesApplication from './peinture-sol-garage-types-application'
import ButeeParkingTypesPosePrix from './butee-parking-types-pose-prix'
import DosDaneParkingReglementationPose from './dos-dane-parking-reglementation-pose'
import RevetementSolIndustrielTypesPrix from './revetement-sol-industriel-types-prix'
import PanneauPmrParkingTypesObligations from './panneau-pmr-parking-types-obligations'
import PanneauLimitationVitesseParking from './panneau-limitation-vitesse-parking'
import OmbrierePvParking2026 from './ombriere-photovoltaique-parking-2026'
import NouvellesNormesSignaletique2026 from './nouvelles-normes-signaletique-parking-2026'
import NidsDePoulesHiver2026 from './nids-de-poule-hiver-2026-solutions'
import SolEpoxyEntrepotAvantagesPose from './sol-epoxy-entrepot-avantages-pose'
import SignalisationParkingCopropriete from './signalisation-parking-copropriete'
import ReparationChausseeParking from './reparation-chaussee-parking-methodes-prix'
import NormeNfEn1436 from './norme-nf-en-1436-marquage-routier'
import CalendrierEntretienParking from './calendrier-entretien-parking'
import BumperSupermarcheProtectionFrigo from './bumper-supermarche-protection-frigo'
import SignalisationHorizontaleLyonMarquage from './signalisation-horizontale-lyon-marquage'
import MarquageSolSupermarcheGrandeSurface from './marquage-sol-supermarche-grande-surface'
import ReparerNidDePouleSoiMeme from './reparer-nid-de-poule-soi-meme'
import DureeVieMarquageSolParking from './duree-vie-marquage-sol-parking'
import ResineSolParkingSouterrain from './resine-sol-parking-souterrain'
import AccessibiliteParkingErpNormes from './accessibilite-parking-erp-normes'
import PreparationSolAvantResineEpoxy from './preparation-sol-avant-resine-epoxy'
import ResineEpoxyOuPeintureSolComparatif from './resine-epoxy-ou-peinture-sol-comparatif'

const CONTENT_MAP: Record<string, ComponentType> = {
  'renovation-parking-copropriete': RenovationParkingCopropriete,
  'prix-marquage-sol-parking': PrixMarquageSolParking,
  'normes-pmr-parking': NormesPmrParking,
  'enrobe-froid-vs-resine-nids-de-poule': EnrobeFroidVsResine,
  'nid-de-poule-responsabilite-parking': NidDePouleResponsabilite,
  'entretien-parking-signes-renovation': EntretienParkingSignes,
  'dimensions-nombre-places-pmr-parking': DimensionsPlacesPmr,
  'renovation-parking-entreprise': RenovationParkingEntreprise,
  'mise-en-conformite-parking-pmr': MiseEnConformitePmr,
  'cout-renovation-parking': CoutRenovationParking,
  'signalisation-pmr-parking': SignalisationPmrParking,
  'peinture-marquage-sol-parking': PeintureMarquageSolParking,
  'comment-tracer-parking': CommentTracerParking,
  'couleur-marquage-sol-parking': CouleurMarquageSolParking,
  'ralentisseur-parking-norme': RalentisseurParkingNorme,
  'passage-pieton-parking-norme': PassagePietonParkingNorme,
  'signalisation-parking-reglementation': SignalisationParkingReglementation,
  'reglementation-marquage-sol-parking': ReglementationMarquageSolParking,
  'resine-sol-parking-prix-types': ResineSolParkingPrixTypes,
  'barriere-parking-types-prix': BarriereParkingTypesPrix,
  'peinture-sol-garage-types-application': PeintureSolGarageTypesApplication,
  'butee-parking-types-pose-prix': ButeeParkingTypesPosePrix,
  'dos-dane-parking-reglementation-pose': DosDaneParkingReglementationPose,
  'revetement-sol-industriel-types-prix': RevetementSolIndustrielTypesPrix,
  'panneau-pmr-parking-types-obligations': PanneauPmrParkingTypesObligations,
  'panneau-limitation-vitesse-parking': PanneauLimitationVitesseParking,
  'ombriere-photovoltaique-parking-2026': OmbrierePvParking2026,
  'nouvelles-normes-signaletique-parking-2026': NouvellesNormesSignaletique2026,
  'nids-de-poule-hiver-2026-solutions': NidsDePoulesHiver2026,
  'sol-epoxy-entrepot-avantages-pose': SolEpoxyEntrepotAvantagesPose,
  'signalisation-parking-copropriete': SignalisationParkingCopropriete,
  'reparation-chaussee-parking-methodes-prix': ReparationChausseeParking,
  'norme-nf-en-1436-marquage-routier': NormeNfEn1436,
  'calendrier-entretien-parking': CalendrierEntretienParking,
  'bumper-supermarche-protection-frigo': BumperSupermarcheProtectionFrigo,
  'signalisation-horizontale-lyon-marquage': SignalisationHorizontaleLyonMarquage,
  'marquage-sol-supermarche-grande-surface': MarquageSolSupermarcheGrandeSurface,
  'reparer-nid-de-poule-soi-meme': ReparerNidDePouleSoiMeme,
  'duree-vie-marquage-sol-parking': DureeVieMarquageSolParking,
  'resine-sol-parking-souterrain': ResineSolParkingSouterrain,
  'accessibilite-parking-erp-normes': AccessibiliteParkingErpNormes,
  'preparation-sol-avant-resine-epoxy': PreparationSolAvantResineEpoxy,
  'resine-epoxy-ou-peinture-sol-comparatif': ResineEpoxyOuPeintureSolComparatif,
}

export default CONTENT_MAP
