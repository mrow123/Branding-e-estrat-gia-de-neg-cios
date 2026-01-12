import React from 'react';
import { motion } from 'framer-motion';
export function About() {
  return <section className="min-h-screen w-full bg-[#0a0a0a] text-white py-24 px-6 md:px-12 flex items-center border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        {/* Left Column: Large Statement */}
        <div className="lg:col-span-7">
          <motion.h2 initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: '-100px'
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Dados sem design é ruído. Design sem dados é{' '}
            <span className="text-gray-600 line-through decoration-[#0066ff]">
              arte
            </span>
            .
          </motion.h2>
        </div>

        {/* Right Column: Detail Text */}
        <div className="lg:col-span-5 flex flex-col gap-8 pt-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: '-100px'
        }} transition={{
          duration: 0.8,
          delay: 0.2,
          ease: 'easeOut'
        }}>
            <h3 className="text-[#0066ff] font-bold mb-4 tracking-widest text-sm uppercase">
              Nossa Abordagem
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Acreditamos que o crescimento real acontece na interseção entre
              criatividade e análise. Utilizamos metodologias de{' '}
              <strong className="text-white">Design Thinking</strong> para
              identificar oportunidades e estratégias de{' '}
              <strong className="text-white">Growth</strong> para escalá-las.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: '-100px'
        }} transition={{
          duration: 0.8,
          delay: 0.4,
          ease: 'easeOut'
        }}>
            <p className="text-xl text-gray-400 leading-relaxed">
              Não entregamos apenas relatórios. Entregamos planos de ação
              testáveis, mensuráveis e focados em ROI. Do discovery ao delivery,
              cada etapa é desenhada para gerar impacto no seu negócio.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          scaleX: 0
        }} whileInView={{
          opacity: 1,
          scaleX: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.6,
          ease: 'circOut'
        }} className="h-px w-full bg-[#333] mt-8 origin-left" />

          <div className="grid grid-cols-2 gap-4 mt-4">
            {['Product Design', 'Growth Hacking', 'Data Analytics', 'UX Strategy'].map((item, i) => <motion.span key={item} initial={{
            opacity: 0,
            x: -10
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.8 + i * 0.1
          }} className="text-sm font-mono text-gray-500">
                • {item}
              </motion.span>)}
          </div>
        </div>
      </div>
    </section>;
}