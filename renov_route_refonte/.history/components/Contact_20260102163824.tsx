'use client'

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Merci ! Votre demande a été simulée.')
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-asphalt-light">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)'
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="glass-panel rounded-[32px] p-8 md:p-12 border border-brand/20 shadow-neon text-center">
          <span className="material-symbols-outlined text-6xl text-brand mb-6">history_edu</span>
          <h2 className="font-display text-4xl md:text-5xl mb-6">PRÊT À DÉMARRER ?</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Obtenez une estimation précise pour vos travaux de marquage au sol ou de réparation. 
            Réponse garantie sous 24h ouvrées.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Email Professionnel
              </label>
              <input 
                type="email" 
                placeholder="contact@entreprise.com" 
                className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Type de projet
              </label>
              <select className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-safety outline-none appearance-none">
                <option>Marquage de Parking</option>
                <option>Mise aux normes PMR</option>
                <option>Réparation Voirie</option>
                <option>Autre</option>
              </select>
            </div>
            <button 
              type="submit" 
              className="w-full py-4 bg-safety text-asphalt font-display font-bold text-xl rounded-lg hover:bg-white hover:shadow-neon transition-all duration-300 mt-4"
            >
              ENVOYER MA DEMANDE
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2026 Rénov Route. Tous droits réservés.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Mentions Légales</a>
              <a href="#" className="hover:text-white">Confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

