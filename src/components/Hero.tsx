import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center px-6 md:px-12 bg-[#0a0a0a] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8"
          >
            ESTRATÉGIA <br />
            ORIENTADA A <span className="text-[#0066ff]">IMPACTO</span>
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row gap-8 md:items-start max-w-4xl"
          >
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed flex-1">
              Para startups e scale-ups que precisam de{' '}
              <span className="text-white font-medium">clareza estratégica</span>,{' '}
              <span className="text-white font-medium">decisões melhores</span> e{' '}
              <span className="text-white font-medium">aprendizado acelerado</span>.
              Fugimos do "hype" para focar em redução de risco e crescimento real.
            </p>

            <div className="flex flex-col gap-2 text-sm font-mono text-[#0066ff] md:text-right">
              <span>PRODUCT</span>
              <span>GROWTH</span>
              <span>STRATEGY</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 text-sm text-gray-500 uppercase tracking-widest"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
        <span>Conheça os modelos de atuação</span>
      </motion.div>

      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-b from-[#0066ff]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-[#0066ff]/5 to-transparent blur-3xl pointer-events-none" />
    </section>
  );
}
