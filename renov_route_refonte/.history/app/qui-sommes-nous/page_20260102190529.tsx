'use client'

import Navigation from '@/components/Navigation'
import Image from 'next/image'

export default function QuiSommesNous() {
  return (
    <main className="bg-asphalt text-white w-full overflow-hidden min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)'
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-6">
              QUI <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-light to-brand-dark">SOMMES-NOUS</span> ?
            </h1>
            
            <p className="font-sans text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Découvrez notre entreprise et notre expertise en marquage routier
            </p>
          </div>

          {/* Grid: Coordonnées (gauche) et Photo (droite) */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Coordonnées */}
            <div className="glass-panel rounded-[24px] p-8 md:p-10 border border-brand/20">
              <h3 className="font-display text-3xl md:text-4xl mb-8 text-white">
                NOS <span className="text-brand">COORDONNÉES</span>
              </h3>
              
              <div className="space-y-8">
                {/* Téléphone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center shrink-0 shadow-neon">
                    <span className="material-symbols-outlined text-white text-2xl">phone</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1">Téléphone</p>
                    <a 
                      href="tel:0786819692" 
                      className="text-white text-xl font-bold hover:text-brand-neon transition-colors"
                    >
                      07 86 81 96 92
                    </a>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center shrink-0 shadow-neon">
                    <span className="material-symbols-outlined text-white text-2xl">mail</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1">Email</p>
                    <a 
                      href="mailto:contact@renov-route.com" 
                      className="text-white text-xl font-bold hover:text-brand-neon transition-colors break-all"
                    >
                      contact@renov-route.com
                    </a>
                  </div>
                </div>
                
                {/* Adresse */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center shrink-0 shadow-neon">
                    <span className="material-symbols-outlined text-white text-2xl">location_on</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1">Adresse</p>
                    <p className="text-white text-lg leading-relaxed">
                      6, allée du ruisseau de Ribbes<br />
                      69160 Tassin la demi-lune, Rhône Alpes<br />
                      <span className="text-gray-400 text-base">Siret : 818 745 515 00010</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo de Xavier */}
            <div className="glass-panel rounded-[24px] overflow-hidden border border-brand/20 relative h-[500px]">
              <div className="relative w-full h-full">
                <Image
                  src="/XAVIER DE CAUMONT 2.jpg"
                  alt="Xavier de Caumont - Fondateur de Rénov Route"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 25%' }}
                  priority
                />
                
                {/* Overlay avec nom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-asphalt via-asphalt/90 to-transparent">
                  <p className="text-white text-2xl font-bold font-display">Xavier de Caumont</p>
                  <p className="text-gray-400 text-lg">Fondateur de Rénov Route</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section À Propos */}
          <div className="max-w-5xl mx-auto">
            <div className="glass-panel rounded-[24px] p-8 md:p-12 border border-brand/20">
              <h2 className="font-display text-4xl md:text-5xl mb-10 text-white">
                À PROPOS DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-light">RÉNOV ROUTE</span>
              </h2>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  La sécurité routière est un véritable enjeu pour les gouvernements successifs depuis plus de 10 ans. 
                  La mortalité routière a chuté de moitié, mais reste supérieure à 3000 morts par an.
                </p>
                
                <p>
                  La signalétique et l'état des routes sont mis en cause dans <span className="text-brand font-semibold">47% des accidents</span>. 
                  (source 40 millions d'automobilistes)
                </p>
                
                <p>
                  Les communes et les entreprises ont la responsabilité de l'entretien de leur réseau/parkings, 
                  mais les budgets tendent à se resserrer.
                </p>
                
                <div className="my-8 p-6 bg-brand/5 border-l-4 border-brand rounded-r-lg">
                  <p className="text-white text-xl font-semibold mb-2">Notre histoire</p>
                  <p className="text-gray-300">
                    L'histoire de Rénov Route commence par une rencontre fortuite : un client nous a approché 
                    pour retracer 40 parkings. Cette demande, qui semblait ambitieuse à l'époque, a marqué un tournant 
                    décisif dans notre parcours. Nous avons relevé le défi avec détermination, et cette première 
                    mission a révélé notre passion pour l'excellence du marquage routier.
                  </p>
                </div>
                
                <p>
                  Depuis cette expérience fondatrice, le marquage routier est devenu notre métier. Nous avons 
                  développé une <span className="text-brand font-semibold">expertise technique pointue</span> et une approche innovante qui nous permettent 
                  aujourd'hui de répondre aux défis les plus complexes du secteur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

