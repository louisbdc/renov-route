'use client'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video 
          src="/background_video.mp4" 
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-asphalt via-transparent to-asphalt"></div>
        <div 
          className="absolute inset-0 opacity-20 brightness-100 contrast-150"
          style={{
            backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        <h1 className="flex flex-col items-center mb-6">
          {/* La partie Marque (Visuellement imposante) */}
          <span className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-4 drop-shadow-lg">
            RÉNOV ROUTE
          </span>
          
          {/* La partie Mots-clés (Visuellement plus discrète, style sous-titre) */}
          <span className="font-sans text-lg md:text-2xl text-blue-400 font-medium tracking-wide max-w-2xl mx-auto">
            Spécialiste Marquage Routier & Signalisation dans toute la France, privilégiant Lyon et la région Rhône-Alpes
          </span>
        </h1>
        
       

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-brand text-white font-display font-bold text-lg rounded-full overflow-hidden hover:shadow-neon transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              DEMANDER UN DEVIS
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>
          
          <button 
            onClick={scrollToServices}
            className="px-8 py-4 border border-gray-600 hover:border-brand-neon text-gray-300 hover:text-white font-bold rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            Découvrir nos services
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-asphalt to-transparent"></div>
    </header>
  )
}

