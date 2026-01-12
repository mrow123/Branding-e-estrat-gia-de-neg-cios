import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Lightbulb, Target, BarChart3 } from 'lucide-react';
type Service = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icon: React.ElementType;
};
const services: Service[] = [{
  id: 1,
  title: 'PRODUCT DESIGN',
  description: 'Transformamos ideias complexas em produtos digitais intuitivos e escaláveis. Foco total na experiência do usuário e viabilidade técnica.',
  tags: ['UX/UI', 'Prototipagem', 'Design System'],
  icon: Lightbulb
}, {
  id: 2,
  title: 'GROWTH MARKETING',
  description: 'Estratégias de aquisição e retenção baseadas em dados. Experimentação rápida para encontrar os canais de crescimento mais eficientes.',
  tags: ['Performance', 'CRO', 'Analytics'],
  icon: TrendingUp
}, {
  id: 3,
  title: 'DESIGN THINKING',
  description: 'Workshops e processos de inovação para resolver problemas complexos de negócio. Colocamos o cliente no centro da estratégia.',
  tags: ['Workshops', 'Discovery', 'Inovação'],
  icon: Target
}, {
  id: 4,
  title: 'DATA STRATEGY',
  description: 'Decisões baseadas em fatos, não em achismos. Implementação de cultura de dados para guiar o crescimento sustentável.',
  tags: ['BI', 'Métricas', 'KPIs'],
  icon: BarChart3
}];
export function Services() {
  return <section className="min-h-screen w-full bg-[#0a0a0a] text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-[#333] pb-8 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">
              NOSSAS SOLUÇÕES
            </h2>
            <p className="text-gray-400 max-w-md">
              Metodologias ágeis e design estratégico para alavancar resultados.
            </p>
          </div>
          <span className="text-[#0066ff] font-mono hidden md:block">
            ESTRATÉGIA & EXECUÇÃO
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {services.map((service, index) => <motion.div key={service.id} initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: '-50px'
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} className="group relative border border-[#222] bg-[#111]/50 p-8 md:p-12 hover:border-[#0066ff] transition-colors duration-500 overflow-hidden">
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-[#1a1a1a] rounded-lg group-hover:bg-[#0066ff] transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-gray-600 font-mono text-sm">
                    0{service.id}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#0066ff] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => <span key={tag} className="text-xs font-mono px-2 py-1 border border-[#333] text-gray-500 rounded group-hover:border-[#0066ff]/30 group-hover:text-[#0066ff] transition-colors duration-300">
                        {tag}
                      </span>)}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span>SAIBA MAIS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}