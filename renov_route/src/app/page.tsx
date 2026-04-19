import Layout from '@/components/Layout';
import PartnersBanner from '@/components/PartnersBanner';
import SEOLinks from '@/components/SEOLinks';
import StructuredData from '@/components/StructuredData';
import SafariAnimationFix from '@/components/SafariAnimationFix';
import { MotionDiv } from '@/components/MotionWrapper';
import HeroSection from '@/components/HeroSection';
import HomeHeroHeadline from '@/components/effects/HomeHeroHeadline';
import MarqueeEditorial from '@/components/effects/MarqueeEditorial';
import CountUp from '@/components/effects/CountUp';
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
  TbHelmet,
} from 'react-icons/tb';
import { QuoteTracker, CtaTracker } from '@/components/AnalyticsTracker';

const services = [
  {
    icon: <TbRoad size={28} />,
    title: 'Marquage au sol & tra\u00E7age de parking',
    description: 'Marquage de parking professionnel : places, fl\u00E8ches, passages pi\u00E9tons et signalisation horizontale. Peintures certifi\u00E9es NF EN 1436, dur\u00E9e de vie 3 \u00E0 5 ans.',
    href: '/competences/tracage-retracage-parking',
  },
  {
    icon: <TbTarget size={28} />,
    title: 'R\u00E9paration de nids de poule',
    description: 'R\u00E9paration durable par r\u00E9sine polyur\u00E9thane (5 \u00E0 10 ans) au lieu de l\u2019enrob\u00E9 \u00E0 froid (quelques mois). Intervention possible jusqu\u2019\u00E0 -5\u00B0C.',
    href: '/competences/reparation-nids-de-poule',
  },
  {
    icon: <TbAccessible size={28} />,
    title: 'Mise aux normes PMR',
    description: 'Places handicap\u00E9es, pictogrammes, bandes de guidage et panneaux B6d. Conformit\u00E9 r\u00E9glementaire pour \u00E9viter les sanctions jusqu\u2019\u00E0 45 000 \u20AC.',
    href: '/guides/normes-pmr-parking',
  },
  {
    icon: <TbSignRight size={28} />,
    title: 'Signalisation verticale',
    description: 'Panneaux directionnels, limitation de vitesse, signalisation PMR et bornes. Installation et remplacement conformes aux normes 2026.',
    href: '/competences/signalisation-verticale',
  },
  {
    icon: <TbPaint size={28} />,
    title: 'R\u00E9sine de sol int\u00E9rieur',
    description: 'Rev\u00EAtement \u00E9poxy et polyur\u00E9thane pour entrep\u00F4ts, ateliers et parkings couverts. Surface lisse, r\u00E9sistante et facile d\u2019entretien.',
    href: '/competences/resine-sol-marquage-interieur',
  },
  {
    icon: <TbParking size={28} />,
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
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl pt-24 md:pt-32 pb-16">
            <div className="flex items-center gap-3 text-[#FACC15] mb-6">
              <TbHelmet size={20} />
              <span className="font-black uppercase tracking-[0.25em] text-[10px] sm:text-[11px]">
                Expert marquage & signalisation Lyon
              </span>
            </div>

            <HomeHeroHeadline />

            <p className="text-base sm:text-lg text-slate-300 mb-10 max-w-xl font-medium leading-relaxed">
              Spécialiste du <strong className="text-white font-bold">marquage au sol</strong> et de la <strong className="text-white font-bold">rénovation de parking</strong> à Lyon. Intervention sous 48h · Devis gratuit en 24h · 1&nbsp;000+ parkings depuis 2014.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <CtaTracker
                location="home_hero"
                href="/devis"
                className="inline-flex items-center justify-center bg-[#FACC15] text-[#0F172A] px-10 py-5 font-black uppercase text-xs tracking-[0.2em] hover:bg-white transition-all shadow-[8px_8px_0_rgba(250,204,21,0.25)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none rounded-sm"
              >
                Obtenir mon devis gratuit
              </CtaTracker>
              <CtaTracker
                location="home_hero"
                href="/realisations"
                className="group inline-flex items-center justify-center gap-3 border-2 border-white/20 text-white px-10 py-5 font-black uppercase text-xs tracking-[0.2em] hover:bg-white/10 hover:border-white/40 transition-all rounded-sm"
              >
                Voir nos réalisations
                <TbArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </CtaTracker>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#FACC15]" fill="currentColor" viewBox="0 0 20 20">
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
      </HeroSection>

      <SafariAnimationFix>
        {/* Stats Section */}
        <section className="bg-[#F0F4F8] border-b border-slate-100 py-16 sm:py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {[
                { to: 10, suffix: '+', label: "ans d'expérience" },
                { to: 1000, suffix: '+', label: 'projets réalisés' },
                { to: 20, suffix: '+', label: 'enseignes partenaires' },
                { to: 24, suffix: 'h', label: 'pour un devis' },
              ].map((stat, index) => (
                <MotionDiv
                  key={index}
                  className="border-l-2 border-slate-100 pl-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <p className="text-4xl sm:text-5xl font-black tracking-tighter text-[#0F172A] leading-none">
                    <CountUp to={stat.to} suffix={stat.suffix} />
                  </p>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mt-3">{stat.label}</p>
                </MotionDiv>
              ))}
            </div>
            <MotionDiv
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                Spécialiste du <strong className="text-[#0F172A] font-bold">marquage au sol</strong> et de la <strong className="text-[#0F172A] font-bold">rénovation de parking</strong> à Lyon et en Rhône-Alpes, Rénov&apos;Route intervient sur tous types de surfaces : parkings, entrepôts, voiries et zones commerciales. De la <strong className="text-[#0F172A] font-bold">réparation de nids de poule</strong> au traçage de lignes de circulation, nous assurons des prestations durables et conformes aux normes en vigueur. Demandez votre devis gratuit et obtenez une réponse sous 24 heures.
              </p>
            </MotionDiv>
          </div>
        </section>

        {/* Comment ça marche */}
        <section className="py-20 sm:py-28 px-6 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
              <div className="max-w-2xl">
                <span className="inline-block text-[11px] font-black uppercase tracking-[0.25em] text-[#FACC15] mb-6">
                  Processus
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter leading-[0.95] text-[#0F172A] mb-6">
                  Comment ça <span className="text-slate-300 whitespace-nowrap">marche{'\u202F'}?</span>
                </h2>
                <p className="text-slate-500 font-medium">
                  De la demande de devis à la réception des travaux, un processus simple et rapide.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
              {[
                { step: '01', icon: <TbFileDescription size={28} />, title: 'Demande de devis', description: 'Remplissez notre formulaire ou appelez-nous. Devis gratuit et sans engagement sous 24h.' },
                { step: '02', icon: <TbSearch size={28} />, title: 'Diagnostic sur site', description: 'Un expert se déplace pour évaluer votre parking et définir le plan d\u2019intervention.' },
                { step: '03', icon: <TbTool size={28} />, title: 'Travaux rapides', description: 'Intervention en 2 à 5 jours. Votre parking reste accessible pendant le chantier.' },
                { step: '04', icon: <TbShieldCheck size={28} />, title: 'Réception et garantie', description: 'Vérification de conformité, remise du dossier technique et suivi post-chantier.' },
              ].map((item, index) => (
                <MotionDiv
                  key={index}
                  className="relative bg-white p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="absolute top-4 right-5 text-2xl font-black italic text-slate-200">
                    {item.step}
                  </div>
                  <div className="text-[#FACC15] mb-6">{item.icon}</div>
                  <h3 className="text-lg font-black italic uppercase tracking-tight text-[#0F172A] mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </MotionDiv>
              ))}
            </div>

            <div className="text-center mt-12">
              <QuoteTracker serviceType="home_process">
                <Link
                  href="/devis"
                  className="inline-flex items-center gap-3 bg-[#FACC15] hover:bg-[#0F172A] hover:text-white text-[#0F172A] font-black uppercase text-xs tracking-[0.2em] py-4 px-10 rounded-sm transition-all shadow-[4px_4px_0_rgba(250,204,21,0.3)]"
                >
                  Commencer mon projet
                  <TbArrowRight size={16} />
                </Link>
              </QuoteTracker>
            </div>
          </div>
        </section>

        {/* Marquee editorial — transition visuelle */}
        <MarqueeEditorial
          items={['SÉCURITÉ', 'RIGUEUR', 'DURABILITÉ', 'NORME NF EN 1436', 'ACCESSIBILITÉ PMR', 'LYON · RHÔNE-ALPES']}
          duration={45}
          tone="light"
        />

        {/* Services Section */}
        <section id="services" className="py-20 sm:py-28 px-6 bg-[#F0F4F8]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
              <div className="max-w-2xl">
                <span className="inline-block text-[11px] font-black uppercase tracking-[0.25em] text-[#FACC15] mb-6">
                  Compétences
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter leading-[0.95] text-[#0F172A] mb-6">
                  Une expertise <br className="hidden sm:block" />
                  <span className="text-slate-300">sans compromis.</span>
                </h2>
                <p className="text-slate-500 font-medium">
                  Spécialiste de traçage marquage routier, retraçage, réparation de nid de poule intérieur et extérieur.
                </p>
              </div>
              <Link
                href="/competences"
                className="hidden md:inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.25em] text-[#0F172A] border-b-2 border-[#0F172A] pb-1 hover:text-[#FACC15] hover:border-[#FACC15] transition-all"
              >
                Toutes nos compétences
                <TbArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 mb-12">
              {services.map((service, index) => (
                <Link key={index} href={service.href} className="bg-white group">
                  <MotionDiv
                    className="h-full p-8 flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <div className="text-[#FACC15] mb-6">{service.icon}</div>
                    <h3 className="text-xl font-black italic uppercase tracking-tight text-[#0F172A] mb-4 group-hover:text-[#FACC15] transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{service.description}</p>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#0F172A]">
                      En savoir plus
                      <TbArrowRight size={14} className="text-[#FACC15] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </MotionDiv>
                </Link>
              ))}
            </div>

            <div className="text-center md:hidden">
              <Link
                href="/competences"
                className="inline-flex items-center gap-3 border-2 border-[#0F172A] text-[#0F172A] font-black uppercase text-xs tracking-[0.2em] py-4 px-10 rounded-sm hover:bg-[#0F172A] hover:text-white transition-all"
              >
                Toutes nos compétences
                <TbArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section id="references" className="py-20 sm:py-28 px-6 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto mb-12">
            <MotionDiv
              className="max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.25em] text-[#FACC15] mb-6">
                Références
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter leading-[0.95] text-[#0F172A] mb-6">
                Ils nous font <br className="hidden sm:block" />
                <span className="text-slate-300">confiance.</span>
              </h2>
              <p className="text-slate-500 font-medium">
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
            <PartnersBanner />
          </MotionDiv>

          <MotionDiv
            className="max-w-7xl mx-auto text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-slate-600 text-base font-medium mb-8 max-w-2xl mx-auto">
              Carrefour, Lidl, McDonald&apos;s, l&apos;Armée de Terre et 20+ enseignes nous font confiance.
            </p>
            <QuoteTracker serviceType="home_references">
              <Link
                href="/devis"
                className="inline-flex items-center gap-3 bg-[#0F172A] hover:bg-[#FACC15] text-white hover:text-[#0F172A] font-black uppercase text-xs tracking-[0.2em] py-4 px-10 rounded-sm transition-all"
              >
                Estimer mon projet
                <TbArrowRight size={16} />
              </Link>
            </QuoteTracker>
          </MotionDiv>
        </section>

        {/* Testimonials Section */}
        <section id="temoignages" className="py-20 sm:py-28 px-6 bg-[#F0F4F8] cv-auto">
          <div className="max-w-7xl mx-auto">
            <MotionDiv
              className="max-w-2xl mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.25em] text-[#FACC15] mb-6">
                Témoignages
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter leading-[0.95] text-[#0F172A] mb-6">
                Ce qu&apos;ils <br className="hidden sm:block" />
                <span className="text-slate-300">disent de nous.</span>
              </h2>
              <p className="text-slate-500 font-medium">
                Ce que nos clients disent de nos prestations de marquage routier et rénovation de parking.
              </p>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[
                { name: 'Bertrand de LONGEVIALLE', text: 'Compétence et réactivité ! je recommande !', rating: 5 },
                { name: 'Estelle Pons', text: 'Une solution simple, rapide et peu onéreuse pour reboucher des trous en formation sur les routes et parking. Un bon plan pour les copropriétés', rating: 5 },
              ].map((review, index) => (
                <MotionDiv
                  key={index}
                  className="p-8 border-l-4 border-[#0F172A] bg-[#F8FAFC]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#FACC15]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#0F172A] text-base leading-relaxed mb-6 italic font-medium">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-[#0F172A] font-black uppercase tracking-widest text-xs">{review.name}</p>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 border border-slate-200 rounded-sm px-3 py-1">
                      Avis Google
                    </span>
                  </div>
                </MotionDiv>
              ))}
            </div>

            <MotionDiv
              className="text-center p-10 sm:p-12 border border-slate-200 bg-[#F8FAFC]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[#0F172A] text-xl sm:text-2xl font-black italic uppercase tracking-tighter mb-3">
                Note 5/5 Google · 1&nbsp;000+ projets depuis 2014
              </p>
              <p className="text-slate-500 text-sm font-medium mb-8">
                Devis gratuit et sans engagement. Réponse sous 24h.
              </p>
              <QuoteTracker serviceType="home_testimonials">
                <Link
                  href="/devis"
                  className="inline-flex items-center gap-3 bg-[#FACC15] hover:bg-[#0F172A] hover:text-white text-[#0F172A] font-black uppercase text-xs tracking-[0.2em] py-4 px-10 rounded-sm transition-all shadow-[4px_4px_0_rgba(250,204,21,0.3)]"
                >
                  Demander un devis gratuit
                  <TbArrowRight size={16} />
                </Link>
              </QuoteTracker>
            </MotionDiv>
          </div>
        </section>

        {/* Guides Section */}
        <section id="guides" className="py-20 sm:py-28 px-6 bg-[#F8FAFC] border-t border-slate-200 cv-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="inline-block text-[11px] font-black uppercase tracking-[0.25em] text-[#FACC15] mb-6">
                  Documentation
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter leading-[0.95] text-[#0F172A] mb-4">
                  Guides pratiques.
                </h2>
                <p className="text-slate-500 font-medium">
                  Conseils d&apos;experts, réglementations et bonnes pratiques pour vos projets.
                </p>
              </div>
              <Link
                href="/guides/"
                className="inline-flex items-center gap-3 bg-white border-2 border-[#0F172A] px-6 py-3 font-black uppercase text-[10px] tracking-[0.2em] text-[#0F172A] hover:bg-[#FACC15] hover:border-[#FACC15] transition-all rounded-sm"
              >
                Tous les dossiers
                <TbArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { tag: 'Budget', title: 'Prix marquage au sol parking', href: '/guides/prix-marquage-sol-parking/', desc: 'Tarifs 2026, facteurs de prix et conseils pour optimiser votre budget marquage.' },
                { tag: 'Norme', title: 'Normes PMR parking', href: '/guides/normes-pmr-parking/', desc: 'Dimensions, signalétique et mise en conformité des places handicapées.' },
                { tag: 'Technique', title: 'Nids de poule : solutions durables', href: '/guides/nids-de-poule-hiver-2026-solutions/', desc: 'Résine vs enrobé à froid : comparatif des méthodes de réparation.' },
                { tag: 'Norme', title: 'Signalisation parking : réglementation', href: '/guides/signalisation-parking-reglementation/', desc: 'Panneaux obligatoires, normes IISR et mise en conformité de votre parking.' },
                { tag: 'Comparatif', title: 'Résine époxy ou peinture sol ?', href: '/guides/resine-epoxy-ou-peinture-sol-comparatif/', desc: 'Guide comparatif pour choisir le bon revêtement selon votre usage.' },
                { tag: 'Gestion', title: 'Rénovation parking copropriété', href: '/guides/renovation-parking-copropriete/', desc: 'Étapes, obligations légales et financement pour rénover le parking de votre copropriété.' },
              ].map((guide, index) => (
                <Link key={guide.href} href={guide.href}>
                  <MotionDiv
                    className="h-full bg-white p-8 border border-slate-200 card-editorial-hover group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FACC15] mb-4">{guide.tag}</div>
                    <h3 className="text-xl font-black italic uppercase tracking-tight leading-tight text-[#0F172A] mb-4 group-hover:text-[#FACC15] transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{guide.desc}</p>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#0F172A]">
                      Lire la suite
                      <TbArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </MotionDiv>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 sm:py-28 px-6 bg-[#F0F4F8] cv-auto">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="inline-block text-[11px] font-black uppercase tracking-[0.25em] text-[#FACC15] mb-6">
                  Contact
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter leading-[0.95] text-[#0F172A] mb-8">
                  Parlons de votre <span className="text-[#FACC15]">projet.</span>
                </h2>
                <p className="text-slate-500 font-medium mb-8">
                  Nos experts se déplacent sur votre site pour une analyse précise et un devis personnalisé sous 24h.
                </p>
              </div>

              <MotionDiv
                className="border border-slate-200 p-8 sm:p-10 bg-[#F8FAFC]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-black italic uppercase tracking-tight text-[#0F172A] mb-8">
                  Informations de contact
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 pb-6 border-b border-slate-200">
                    <div className="bg-[#FACC15] p-3 rounded-sm flex-shrink-0">
                      <svg className="w-5 h-5 text-[#0F172A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-1">Téléphone</p>
                      <a href="tel:0786819692" className="text-[#0F172A] text-lg font-bold hover:text-[#FACC15] transition-colors">
                        07 86 81 96 92
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pb-6 border-b border-slate-200">
                    <div className="bg-[#FACC15] p-3 rounded-sm flex-shrink-0">
                      <svg className="w-5 h-5 text-[#0F172A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-1">Email</p>
                      <a href="mailto:contact@renov-route.com" className="text-[#0F172A] text-base font-bold hover:text-[#FACC15] transition-colors break-all">
                        contact@renov-route.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#FACC15] p-3 rounded-sm flex-shrink-0">
                      <svg className="w-5 h-5 text-[#0F172A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-1">Adresse</p>
                      <p className="text-[#0F172A] text-base font-medium leading-relaxed">
                        6, allée du ruisseau de Ribbes<br />
                        69160 Tassin la demi-lune<br />
                        France
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-slate-200">
                  <QuoteTracker serviceType="home_contact">
                    <Link
                      href="/devis"
                      className="inline-flex items-center gap-3 bg-[#FACC15] hover:bg-[#0F172A] hover:text-white text-[#0F172A] font-black uppercase text-xs tracking-[0.2em] py-4 px-8 rounded-sm transition-all shadow-[4px_4px_0_rgba(250,204,21,0.3)]"
                    >
                      Demander un devis
                      <TbArrowRight size={16} />
                    </Link>
                  </QuoteTracker>
                </div>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 sm:py-28 px-6 bg-[#F8FAFC] cv-auto">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block text-[11px] font-black uppercase tracking-[0.25em] text-[#FACC15] mb-6">
              FAQ
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter leading-[0.95] text-[#0F172A] mb-16">
              Questions fréquentes.
            </h2>
            <div className="space-y-10">
              {faqItems.map((item, index) => (
                <div key={index} className="border-l-4 border-[#0F172A] pl-6 bg-white py-6 pr-6">
                  <h3 className="font-black italic uppercase tracking-tight text-[#0F172A] text-lg mb-3">{item.question}</h3>
                  <p className="text-slate-600 text-base leading-relaxed font-medium">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative bg-[#0F172A] py-24 sm:py-32 px-6 overflow-hidden cv-auto">
          <div className="absolute inset-0 z-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FACC15 0px, #FACC15 2px, transparent 2px, transparent 10px)', opacity: 0.08 }} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.95] text-white mb-8">
              Prêt à sécuriser <br />
              <span className="text-[#FACC15]">vos espaces ?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto font-medium">
              Contactez nos experts pour une analyse de site gratuite et un devis personnalisé sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0786819692"
                className="inline-flex items-center justify-center bg-[#FACC15] hover:bg-white text-[#0F172A] px-12 py-5 font-black uppercase text-sm tracking-[0.2em] rounded-sm transition-all shadow-[8px_8px_0_rgba(250,204,21,0.25)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
              >
                07 86 81 96 92
              </a>
              <Link
                href="/devis"
                className="inline-flex items-center justify-center bg-white hover:bg-[#FACC15] text-[#0F172A] px-12 py-5 font-black uppercase text-sm tracking-[0.2em] rounded-sm transition-all"
              >
                Devis par Email
              </Link>
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
