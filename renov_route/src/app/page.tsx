import Layout from '@/components/Layout';
import PartnersBanner from '@/components/PartnersBanner';
import SEOLinks from '@/components/SEOLinks';
import StructuredData from '@/components/StructuredData';
import SafariAnimationFix from '@/components/SafariAnimationFix';
import { MotionDiv } from '@/components/MotionWrapper';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import HomePageSchemas from '@/components/HomePageSchemas';
import {
  TbTarget,
  TbParking,
  TbArrowRight,
  TbFileDescription,
  TbSearch,
  TbTool,
  TbShieldCheck,
  TbRoad,
  TbAccessible,
  TbSignRight,
  TbPaint,
} from 'react-icons/tb';
import { QuoteTracker, CtaTracker } from '@/components/AnalyticsTracker';

const services = [
  {
    icon: <TbRoad size={22} />,
    title: 'Marquage au sol & tra\u00E7age de parking',
    description: 'Marquage de parking professionnel : places, fl\u00E8ches, passages pi\u00E9tons et signalisation horizontale. Peintures certifi\u00E9es NF EN 1436, dur\u00E9e de vie 3 \u00E0 5 ans.',
    href: '/competences/tracage-retracage-parking',
  },
  {
    icon: <TbTarget size={22} />,
    title: 'R\u00E9paration de nids de poule',
    description: 'R\u00E9paration durable par r\u00E9sine polyur\u00E9thane (5 \u00E0 10 ans) au lieu de l\u2019enrob\u00E9 \u00E0 froid (quelques mois). Intervention possible jusqu\u2019\u00E0 -5\u00B0C.',
    href: '/competences/reparation-nids-de-poule',
  },
  {
    icon: <TbAccessible size={22} />,
    title: 'Mise aux normes PMR',
    description: 'Places handicap\u00E9es, pictogrammes, bandes de guidage et panneaux B6d. Conformit\u00E9 r\u00E9glementaire pour \u00E9viter les sanctions jusqu\u2019\u00E0 45 000 \u20AC.',
    href: '/guides/normes-pmr-parking',
  },
  {
    icon: <TbSignRight size={22} />,
    title: 'Signalisation verticale',
    description: 'Panneaux directionnels, limitation de vitesse, signalisation PMR et bornes. Installation et remplacement conformes aux normes 2026.',
    href: '/competences/signalisation-verticale',
  },
  {
    icon: <TbPaint size={22} />,
    title: 'R\u00E9sine de sol int\u00E9rieur',
    description: 'Rev\u00EAtement \u00E9poxy et polyur\u00E9thane pour entrep\u00F4ts, ateliers et parkings couverts. Surface lisse, r\u00E9sistante et facile d\u2019entretien.',
    href: '/competences/resine-sol-marquage-interieur',
  },
  {
    icon: <TbParking size={22} />,
    title: 'Accessoires de parking',
    description: 'But\u00E9es de parking, dos d\u2019\u00E2ne, poteaux, barri\u00E8res et \u00E9quipements de s\u00E9curit\u00E9. Fourniture et pose incluses.',
    href: '/competences/accessoires-parking',
  },
]

const faqItems = [
  {
    question: "Combien co\u00FBte le marquage au sol d'un parking ?",
    answer: "Le prix varie selon la surface et le type de marquage : comptez 8 \u00E0 15 \u20AC/m\u00B2 pour un tra\u00E7age complet de parking. Un parking de 100 places revient en moyenne entre 8 000 et 15 000 \u20AC, marquage + signalisation inclus. Nos devis sont gratuits, sans engagement, et envoy\u00E9s sous 24h.",
  },
  {
    question: "Combien de temps durent les travaux de marquage ?",
    answer: "Un parking de 100 \u00E0 200 places se retrace en 2 \u00E0 4 jours. La peinture s\u00E8che en 1 \u00E0 3 heures par zone, ce qui permet de garder le parking partiellement ouvert pendant le chantier. En urgence (nids de poule, s\u00E9curit\u00E9), nous intervenons sous 48h.",
  },
  {
    question: "Comment r\u00E9parer durablement les nids de poule ?",
    answer: "Nous utilisons la r\u00E9sine polyur\u00E9thane, qui dure 5 \u00E0 10 ans (contre quelques mois pour l'enrob\u00E9 \u00E0 froid). La r\u00E9sine cr\u00E9e une liaison chimique avec le support et r\u00E9siste au gel jusqu'\u00E0 -5\u00B0C. La circulation est r\u00E9tablie en moins de 2 heures.",
  },
  {
    question: "Mon parking doit-il \u00EAtre aux normes PMR ?",
    answer: "Oui, tout parking ouvert au public doit disposer de 2% de places PMR (3,30 m x 5 m minimum). La non-conformit\u00E9 expose \u00E0 des sanctions jusqu'\u00E0 45 000 \u20AC. Nous assurons la mise aux normes compl\u00E8te : tra\u00E7age, pictogrammes, panneaux et bandes de guidage.",
  },
  {
    question: "Dans quelles r\u00E9gions intervenez-vous ?",
    answer: "Nous sommes bas\u00E9s \u00E0 Lyon et intervenons dans toute la France. Notre zone principale couvre l'Auvergne-Rh\u00F4ne-Alpes (Lyon, Saint-\u00C9tienne, Grenoble, Annecy). Nous r\u00E9alisons \u00E9galement des projets \u00E0 Paris, Marseille, Toulouse et dans toutes les grandes villes.",
  },
  {
    question: "Quels mat\u00E9riaux utilisez-vous ?",
    answer: "Nos peintures de marquage sont certifi\u00E9es NF EN 1436 (norme europ\u00E9enne de signalisation horizontale). Pour les nids de poule, nous utilisons de la r\u00E9sine polyur\u00E9thane de qualit\u00E9 professionnelle. Tous nos mat\u00E9riaux sont s\u00E9lectionn\u00E9s pour leur dur\u00E9e de vie et leur r\u00E9sistance aux intemp\u00E9ries.",
  },
]

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection>
        <div className="hidden md:block absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-gray-800/80 to-gray-900/70" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/3" />

        <div className="relative z-10 w-full h-full">
          <div className="flex items-center min-h-screen">
            <div className="text-white px-2 sm:px-4 lg:px-6 flex items-center justify-center min-h-screen w-full md:w-1/2 pt-16 md:pt-0">
              <div className="border border-white/10 bg-[#1c2130] rounded-2xl p-5 sm:p-7 md:p-9 text-center w-full max-w-md backdrop-blur-sm">
                <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white">
                    <span className="font-bold">Marquage au sol</span>
                    <span className="block font-normal">& rénovation de parking</span>
                    <span className="block font-normal">à Lyon</span>
                  </h1>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed font-light">
                    Intervention sous 48h &middot; Devis gratuit en 24h &middot; Plus de 1 000 parkings depuis 2014
                  </p>
                </div>

                <div className="flex flex-col items-center gap-3 sm:gap-4 pt-4 sm:pt-6">
                  <CtaTracker
                    location="home_hero"
                    href="/devis"
                    className="group w-full inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold rounded-xl transition-colors duration-200 text-sm sm:text-base"
                  >
                    Obtenir mon devis gratuit
                  </CtaTracker>
                  <CtaTracker
                    location="home_hero"
                    href="/realisations"
                    className="group w-full inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 border border-white/20 text-white font-semibold rounded-xl hover:border-white/40 hover:bg-white/5 transition-colors duration-200 text-xs sm:text-sm"
                  >
                    Voir nos réalisations
                    <TbArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </CtaTracker>

                  <div className="flex items-center gap-3 pt-2 text-xs text-gray-300">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      5/5 Google
                    </span>
                    <span className="w-px h-3 bg-white/20" />
                    <span>1 000+ projets</span>
                    <span className="w-px h-3 bg-white/20" />
                    <span>Devis 24h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeroSection>

      <SafariAnimationFix>
        {/* Chiffres clés + Introduction */}
        <section className="py-16 sm:py-20 px-4 bg-[#0C0F14]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { value: '10+', label: "ans d'expérience" },
                { value: '1 000+', label: 'projets réalisés' },
                { value: '20+', label: 'enseignes partenaires' },
                { value: '24h', label: 'pour un devis' },
              ].map((stat, index) => (
                <MotionDiv
                  key={index}
                  className="text-center p-5 rounded-xl border border-white/10 bg-[#141922]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <p className="text-2xl sm:text-3xl font-bold text-amber-400 mb-1">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </MotionDiv>
              ))}
            </div>
            <MotionDiv
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Spécialiste du <strong className="text-white">marquage au sol</strong> et de la <strong className="text-white">rénovation de parking</strong> à Lyon et en Rhône-Alpes, Rénov&apos;Route intervient sur tous types de surfaces : parkings, entrepôts, voiries et zones commerciales. De la <strong className="text-white">réparation de nids de poule</strong> au traçage de lignes de circulation, nous assurons des prestations durables et conformes aux normes en vigueur. Demandez votre devis gratuit et obtenez une réponse sous 24 heures.
              </p>
            </MotionDiv>
          </div>
        </section>

        {/* Comment ça marche */}
        <section className="py-16 sm:py-20 px-4 bg-[#141922]">
          <div className="max-w-6xl mx-auto">
            <MotionDiv
              className="mb-10 sm:mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">Comment ça marche ?</h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                De la demande de devis à la réception des travaux, un processus simple et rapide.
              </p>
            </MotionDiv>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  step: '1',
                  icon: <TbFileDescription size={24} />,
                  title: 'Demande de devis',
                  description: 'Remplissez notre formulaire ou appelez-nous. Devis gratuit et sans engagement sous 24h.',
                },
                {
                  step: '2',
                  icon: <TbSearch size={24} />,
                  title: 'Diagnostic sur site',
                  description: 'Un expert se d\u00E9place pour \u00E9valuer votre parking et d\u00E9finir le plan d\u2019intervention.',
                },
                {
                  step: '3',
                  icon: <TbTool size={24} />,
                  title: 'Travaux rapides',
                  description: 'Intervention en 2 \u00E0 5 jours. Votre parking reste accessible pendant le chantier.',
                },
                {
                  step: '4',
                  icon: <TbShieldCheck size={24} />,
                  title: 'R\u00E9ception et garantie',
                  description: 'V\u00E9rification de conformit\u00E9, remise du dossier technique et suivi post-chantier.',
                },
              ].map((item, index) => (
                <MotionDiv
                  key={index}
                  className="relative p-6 rounded-xl border border-white/10 bg-[#141922] text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/15 text-amber-400 mb-4">
                    {item.icon}
                  </div>
                  <div className="absolute top-3 right-4 text-xs font-bold text-amber-500/40">{item.step}</div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </MotionDiv>
              ))}
            </div>

            <div className="text-center mt-8">
              <QuoteTracker serviceType="home_process">
                <Link
                  href="/devis"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold py-3 px-7 rounded-lg transition-colors duration-200 text-sm sm:text-base"
                >
                  Commencer mon projet
                  <TbArrowRight size={18} />
                </Link>
              </QuoteTracker>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 sm:py-20 px-4 bg-[#0C0F14] border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">Nos compétences en traçage marquage routier</h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
                Spécialiste de traçage marquage routier, retraçage, réparation de nid de poule interieur et exterieur
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {services.map((service, index) => (
                <Link key={index} href={service.href}>
                  <MotionDiv
                    className="h-full p-6 rounded-xl border border-white/10 bg-[#141922] hover:border-white/20 hover:bg-[#1d222d] transition-colors group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <div className="text-amber-400 mb-4">{service.icon}</div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight group-hover:text-amber-400 transition-colors">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  </MotionDiv>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link href="/competences" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold py-3 px-7 rounded-lg transition-colors duration-200 hover:bg-white/5 text-sm sm:text-base">
                Toutes nos compétences
                <TbArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section id="references" className="py-16 sm:py-20 px-4 bg-[#141922]">
          <div className="max-w-6xl mx-auto">
            <MotionDiv
              className="mb-10 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">Nos références en traçage marquage routier</h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
                Nous sommes fiers de travailler avec des entreprises de renom dans toute la France pour leurs projets de marquage routier.
              </p>
            </MotionDiv>
          </div>

          <MotionDiv
            className="w-full relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-2 sm:mx-4 rounded-2xl border border-white/10 overflow-hidden">
              <PartnersBanner />
            </div>
          </MotionDiv>

          <MotionDiv
            className="max-w-6xl mx-auto text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-sm sm:text-base mb-4">
              Carrefour, Lidl, McDonald&apos;s, l&apos;Armée de Terre et 20+ enseignes nous font confiance.
            </p>
            <QuoteTracker serviceType="home_references">
              <Link
                href="/devis"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold py-3 px-7 rounded-lg transition-colors duration-200 text-sm sm:text-base"
              >
                Estimer mon projet
                <TbArrowRight size={18} />
              </Link>
            </QuoteTracker>
          </MotionDiv>
        </section>

        {/* Testimonials Section */}
        <section id="temoignages" className="py-16 sm:py-20 px-4 bg-[#0C0F14]">
          <div className="max-w-6xl mx-auto">
            <MotionDiv
              className="mb-10 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">Témoignages clients</h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
                Ce que nos clients disent de nos prestations de marquage routier et rénovation de parking.
              </p>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  name: 'Bertrand de LONGEVIALLE',
                  text: 'Compétence et réactivité ! je recommande !',
                  rating: 5,
                },
                {
                  name: 'Estelle Pons',
                  text: 'Une solution simple, rapide et peu onéreuse pour reboucher des trous en formation sur les routes et parking. Un bon plan pour les copropriétés',
                  rating: 5,
                },
              ].map((review, index) => (
                <MotionDiv
                  key={index}
                  className="p-6 rounded-xl border border-white/10 bg-[#141922]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                  <div className="flex items-center justify-between">
                    <p className="text-white font-semibold text-sm">{review.name}</p>
                    <span className="text-xs text-gray-500 border border-white/10 rounded-full px-3 py-1">Avis Google</span>
                  </div>
                </MotionDiv>
              ))}
            </div>

            <MotionDiv
              className="text-center mt-10 p-6 sm:p-8 rounded-xl border border-white/10 bg-[#141922]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-white text-base sm:text-lg font-semibold mb-2">
                Note de 5/5 sur Google &middot; Plus de 1 000 projets réalisés depuis 2014
              </p>
              <p className="text-gray-400 text-sm mb-5">
                Devis gratuit et sans engagement. Réponse sous 24h.
              </p>
              <QuoteTracker serviceType="home_testimonials">
                <Link
                  href="/devis"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold py-3.5 px-8 rounded-lg transition-colors duration-200 text-sm sm:text-base"
                >
                  Demander un devis gratuit
                  <TbArrowRight size={18} />
                </Link>
              </QuoteTracker>
            </MotionDiv>
          </div>
        </section>

        {/* Guides Section */}
        <section id="guides" className="py-16 sm:py-20 px-4 bg-[#141922]">
          <div className="max-w-6xl mx-auto">
            <MotionDiv
              className="mb-10 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">Guides pratiques parking</h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
                Conseils d&apos;experts, réglementations et bonnes pratiques pour vos projets de marquage et rénovation.
              </p>
            </MotionDiv>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {[
                { title: 'Prix marquage au sol parking', href: '/guides/prix-marquage-sol-parking/', desc: 'Tarifs 2026, facteurs de prix et conseils pour optimiser votre budget marquage.' },
                { title: 'Normes PMR parking', href: '/guides/normes-pmr-parking/', desc: 'Dimensions, signalétique et mise en conformité des places handicapées.' },
                { title: 'Nids de poule : solutions durables', href: '/guides/nids-de-poule-hiver-2026-solutions/', desc: 'Résine vs enrobé à froid : comparatif des méthodes de réparation.' },
                { title: 'Signalisation parking : réglementation', href: '/guides/signalisation-parking-reglementation/', desc: 'Panneaux obligatoires, normes IISR et mise en conformité de votre parking.' },
                { title: 'Résine époxy ou peinture sol ?', href: '/guides/resine-epoxy-ou-peinture-sol-comparatif/', desc: 'Guide comparatif pour choisir le bon revêtement selon votre usage.' },
                { title: 'Rénovation parking copropriété', href: '/guides/renovation-parking-copropriete/', desc: 'Étapes, obligations légales et financement pour rénover le parking de votre copropriété.' },
              ].map((guide, index) => (
                <Link key={guide.href} href={guide.href}>
                  <MotionDiv
                    className="h-full p-6 rounded-xl border border-white/10 bg-[#141922] hover:border-white/20 hover:bg-[#1d222d] transition-colors group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight group-hover:text-amber-400 transition-colors">{guide.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{guide.desc}</p>
                  </MotionDiv>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link href="/guides/" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold py-3 px-7 rounded-lg transition-colors duration-200 hover:bg-white/5 text-sm sm:text-base">
                Tous nos guides
                <TbArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-20 px-4 bg-[#0C0F14]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">Contactez-nous pour vos projets de marquage routier</h2>
            </div>

            <MotionDiv
              className="max-w-2xl p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#141922]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Informations de contact</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/20 p-2.5 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium mb-0.5">Téléphone</p>
                    <a href="tel:0786819692" className="text-white text-base sm:text-lg hover:text-amber-400 transition-colors">07 86 81 96 92</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/20 p-2.5 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium mb-0.5">Email</p>
                    <a href="mailto:contact@renov-route.com" className="text-white text-base sm:text-lg hover:text-amber-400 transition-colors break-all">contact@renov-route.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/20 p-2.5 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium mb-0.5">Adresse</p>
                    <p className="text-white text-base sm:text-lg">
                      6, allée du ruisseau de Ribbes<br />
                      69160 Tassin la demi-lune<br />
                      France
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <QuoteTracker serviceType="home_contact">
                  <Link
                    href="/devis"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold rounded-lg transition-colors duration-200 text-sm sm:text-base"
                  >
                    Demander un devis
                  </Link>
                </QuoteTracker>
              </div>
            </MotionDiv>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 sm:py-20 px-4 bg-[#0C0F14]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-10">Questions Fréquentes</h2>
            <div className="space-y-7">
              {faqItems.map((item, index) => (
                <div key={index} className="border-l-2 border-amber-500/40 pl-5">
                  <h3 className="font-semibold text-white mb-2">{item.question}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SEOLinks />
        <StructuredData type="homepage" />
        <HomePageSchemas faqItems={faqItems} />
      </SafariAnimationFix>
    </Layout>
  )
}
