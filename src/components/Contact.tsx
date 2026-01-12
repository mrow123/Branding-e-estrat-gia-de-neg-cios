import React from 'react';
import { motion } from 'framer-motion';
export function Contact() {
  return <section className="min-h-[80vh] w-full bg-[#0a0a0a] text-white py-24 px-6 md:px-12 flex flex-col justify-center items-center text-center border-t border-[#1a1a1a]">
      <motion.div initial={{
      opacity: 0,
      scale: 0.9
    }} whileInView={{
      opacity: 1,
      scale: 1
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.8
    }} className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8">
          PRONTO PARA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] to-white">
            ESCALAR?
          </span>
        </h2>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Trabalhamos com um número limitado de parceiros estratégicos por ano.
          Vamos conversar sobre o futuro do seu negócio.
        </p>

        <motion.a href="mailto:contato@consultoria.com" whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} className="inline-block px-8 py-4 bg-[#0066ff] text-white text-xl font-bold tracking-wide hover:bg-[#0052cc] transition-colors duration-300 rounded-sm">
          AGENDAR DIAGNÓSTICO
        </motion.a>

        <div className="mt-12 flex gap-8 justify-center text-gray-500 font-mono text-sm">
          <a href="#" className="hover:text-white transition-colors">
            LINKEDIN
          </a>
          <a href="#" className="hover:text-white transition-colors">
            INSTAGRAM
          </a>
          <a href="#" className="hover:text-white transition-colors">
            WHATSAPP
          </a>
        </div>
      </motion.div>

      <footer className="absolute bottom-8 w-full text-center text-gray-800 text-xs font-mono uppercase tracking-widest">
        <p>
          © {new Date().getFullYear()} CONSULTORIA ESTRATÉGICA. TODOS OS
          DIREITOS RESERVADOS.
        </p>
      </footer>
    </section>;
}