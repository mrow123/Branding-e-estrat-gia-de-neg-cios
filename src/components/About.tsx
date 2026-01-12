import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section className="min-h-screen w-full bg-[#0a0a0a] text-white py-24 px-6 md:px-12 flex items-center border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        {/* Left Column: Manifesto */}
        <div className="lg:col-span-7">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
          >
            Não vendo horas técnicas. <br/> Vendo <span className="text-[#0066ff]">clareza</span> e <span className="text-[#0066ff]">redução de risco</span>.
          </motion.h2>
          
          <div className="mt-12 space-y-6">
             <h3 className="text-xl font-bold text-white">O QUE NÃO FAÇO:</h3>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
                <li className="flex items-center gap-2"><span className="text-red-500">✕</span> Design gráfico operacional</li>
                <li className="flex items-center gap-2"><span className="text-red-500">✕</span> Gestão de tráfego diária</li>
                <li className="flex items-center gap-2"><span className="text-red-500">✕</span> Desenvolvimento de código</li>
                <li className="flex items-center gap-2"><span className="text-red-500">✕</span> "Posts" e campanhas soltas</li>
             </ul>
          </div>
        </div>

        {/* Right Column: Approach */}
        <div className="lg:col-span-5 flex flex-col gap-8 pt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <h3 className="text-[#0066ff] font-bold mb-4 tracking-widest text-sm uppercase">
              Minha Abordagem
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Consultoria estratégica orientada a produto e crescimento, baseada em <strong className="text-white">Design Thinking</strong> e dados.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <p className="text-xl text-gray-400 leading-relaxed">
              Foco em trabalhar com um número limitado de parceiros (Startups e Scale-ups) onde posso ter contato direto com os fundadores e decisores.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'circOut' }}
            className="h-px w-full bg-[#333] mt-8 origin-left"
          />

          <div className="grid grid-cols-2 gap-4 mt-4">
            {['Diagnóstico', 'Estratégia', 'Experimentação', 'Mentoria'].map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="text-sm font-mono text-gray-500"
              >
                • {item}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
