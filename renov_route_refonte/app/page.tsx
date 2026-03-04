import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import BeforeAfter from '@/components/BeforeAfter'
import ServiceArea from '@/components/ServiceArea'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import { faqItems } from '@/lib/faq-data'
import StructuredData from '@/components/StructuredData'

const BASE_URL = 'https://www.renov-route.com'

export default function Home() {
  return (
    <>
      <StructuredData
        type="home"
        breadcrumbs={[
          { name: 'Accueil', url: `${BASE_URL}/` }
        ]}
        faqItems={faqItems}
      />
      <main className="bg-asphalt text-white w-full overflow-hidden">
        <Navigation />
        <Hero />
        <Services />
        <BeforeAfter />
        <FAQ />
        <ServiceArea />
        <Contact />
      </main>
    </>
  )
}
