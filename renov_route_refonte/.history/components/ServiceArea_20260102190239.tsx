'use client'

export default function ServiceArea() {
  const areas = [
    {
      title: 'Métropole de Lyon',
      description: 'Présence quotidienne et réactivité maximale.',
      isPrimary: true
    },
    {
      title: 'Région AURA',
      description: 'Déplacement sur devis pour tous les projets.',
      isPrimary: false
    },
    {
      title: 'Toute la France',
      description: 'Intervention sur devis dans toute la France.',
      isPrimary: false
    }
  ]

  return (
    <section className="py-24 bg-asphalt relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute inset-0 bg-brand/20 blur-[100px] rounded-full"></div>
          <div 
            className="relative z-10 w-full rounded-[24px] border border-gray-700 shadow-2xl glass-panel aspect-[4/3]"
            style={{
              backgroundImage: 'url(/map.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          <div className="absolute bottom-8 right-8 z-20 bg-asphalt/90 backdrop-blur-xl p-4 rounded-xl border border-brand/30 shadow-neon flex items-center gap-4 max-w-xs">
            <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white shrink-0">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <p className="font-bold text-white">Auvergne-Rhône-Alpes</p>
              <p className="text-xs text-gray-400">Intervention rapide sous 48h</p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="font-display text-4xl mb-6">
            ZONE D&apos;INTERVENTION <span className="text-brand">ÉTENDUE</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-light">
            Je suis équipé pour intervenir sur tout type de chantier, du marquage urbain aux grands parkings privés. 
            Basé à Lyon, j'interviens dans toute la France.
          </p>
          
          <div className="space-y-6">
            {areas.map((area, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`w-1 h-full min-h-[50px] rounded-full bg-gradient-to-b ${area.isPrimary ? 'from-brand' : 'from-gray-700'} to-transparent`}></div>
                <div>
                  <h3 className="font-bold text-xl text-white">{area.title}</h3>
                  <p className="text-gray-500">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

