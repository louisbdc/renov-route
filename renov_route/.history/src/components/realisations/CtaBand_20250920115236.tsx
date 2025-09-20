'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface CtaBandProps {
  className?: string;
}

export default function CtaBand({ className = '' }: CtaBandProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className={`py-16 lg:py-24 ${className}`}
    >
      <div className="container-custom">
        <div className="glass-panel p-8 lg:p-12 text-center backdrop-blur-md bg-white/10 border border-white/20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-display text-h1 font-bold mb-6 text-white">
              Vous avez un projet en tête ?
            </h2>
            
            <p className="text-body-lg leading-relaxed mb-8 text-white/90">
              Contactez-nous pour discuter de votre projet de marquage routier ou de rénovation de parking. 
              Nous vous accompagnons de l&apos;étude à la réalisation avec expertise et professionnalisme.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/qui-sommes-nous"
                className="group relative px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold text-body-lg rounded-lg transition-all duration-300 hover:scale-105 focus-ring hover:bg-white/30"
              >
                <span className="relative z-10">Commencer une conversation</span>
              </Link>

              <Link
                href="/devis"
                className="px-8 py-4 border-2 border-white/50 text-white font-bold text-body-lg rounded-lg transition-all duration-300 hover:bg-white/20 hover:border-white/70 focus-ring"
              >
                Demander un devis
              </Link>
            </div>

            {/* Contact info */}
            <motion.div
              className="mt-8 pt-8 border-t border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-caption">
                <div>
                  <div className="font-semibold mb-1 text-white">Téléphone</div>
                  <div className="text-white/80">07 86 81 96 92</div>
                </div>
                <div>
                  <div className="font-semibold mb-1 text-white">Email</div>
                  <div className="text-white/80">contact@renov-route.fr</div>
                </div>
                <div>
                  <div className="font-semibold mb-1 text-white">Zone d&apos;intervention</div>
                  <div className="text-white/80">Toute la France</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="absolute top-4 right-4 w-8 h-8 bg-neon-accent rounded-full opacity-60"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-4 left-4 w-6 h-6 bg-accent rounded-full opacity-40"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </div>
    </motion.section>
  );
}
