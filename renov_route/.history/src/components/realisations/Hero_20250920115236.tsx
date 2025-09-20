'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroProps {
  isSafari?: boolean;
}

export default function Hero({ isSafari = false }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with scanlines */}
      <div className="absolute inset-0 scanlines">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/images/realisations/background_competence_page.avif')",
            filter: 'brightness(0.3)'
          }}
        />
        {/* Geometric grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 209, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 209, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container-custom text-center">
        {isSafari ? (
          <div className="glass-panel p-12 max-w-4xl mx-auto">
            <h1 className="text-display text-h1 text-primary mb-6">
              Excellence qui{' '}
              <span className="relative inline-block">
                <span className="relative z-10">se voit</span>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-accent to-primary" />
              </span>
              .{' '}
              <br />
              <span className="text-text-primary">Expertise qui dure.</span>
            </h1>

            <p className="text-body text-body-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Découvrez nos réalisations qui redéfinissent l'excellence du marquage routier. 
              De la rénovation de parkings d'entreprise aux infrastructures industrielles, 
              chaque projet illustre notre savoir-faire technique et notre engagement qualité depuis plus de 10 ans.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#projects-grid"
                className="group relative bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-[1rem] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 backdrop-blur-sm border border-white/20 focus-ring"
              >
                <span className="relative z-10">Voir tous les projets</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                href="/qui-sommes-nous"
                className="px-8 py-4 border-2 border-glass-border text-text-primary font-semibold rounded-lg transition-all duration-300 hover:border-primary hover:text-primary focus-ring"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="glass-panel p-12 max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-display text-h1 text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Excellence qui{' '}
              <span className="relative inline-block">
                <span className="relative z-10">se voit</span>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-accent to-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                  style={{ originX: 0 }}
                />
              </span>
              .{' '}
              <br />
              <span className="text-text-primary">Expertise qui dure.</span>
            </motion.h1>

            <motion.p 
              className="text-body text-body-lg text-text-secondary mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Découvrez nos réalisations qui redéfinissent l'excellence du marquage routier. 
              De la rénovation de parkings d'entreprise aux infrastructures industrielles, 
              chaque projet illustre notre savoir-faire technique et notre engagement qualité depuis plus de 10 ans.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="#projects-grid"
                className="group relative bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-[1rem] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 backdrop-blur-sm border border-white/20 focus-ring"
              >
                <span className="relative z-10">Voir tous les projets</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                href="/qui-sommes-nous"
                className="px-8 py-4 border-2 border-glass-border text-text-primary font-semibold rounded-lg transition-all duration-300 hover:border-primary hover:text-primary focus-ring"
              >
                Nous contacter
              </Link>
            </motion.div>
          </motion.div>
        )}

        {/* Floating elements */}
        {isSafari ? (
          <>
            <div className="absolute top-20 left-10 w-4 h-4 bg-neon-accent rounded-full opacity-60" />
            <div className="absolute bottom-20 right-10 w-6 h-6 bg-accent rounded-full opacity-40" />
          </>
        ) : (
          <>
            <motion.div
              className="absolute top-20 left-10 w-4 h-4 bg-neon-accent rounded-full opacity-60"
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-6 h-6 bg-accent rounded-full opacity-40"
              animate={{ 
                y: [0, 15, 0],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </>
        )}
      </div>

      {/* Scroll indicator */}
      {isSafari ? (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2" />
          </div>
        </div>
      ) : (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
