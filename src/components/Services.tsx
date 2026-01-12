import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Target, BarChart3, Users } from 'lucide-react';

type Service = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  icon: React.ElementType;
};

// Baseado na seção "4. Estrutura de Serviços" do seu texto
const services: Service[] = [
  {
    id: 1,
    title: 'DIAGNÓSTICO',
    subtitle: 'ESTRATÉGICO',
    description: 'A porta de entrada ideal. Em 3 a 4 semanas, mapeamos problemas prioritários e definimos hipóteses de crescimento baseadas em dados.',
    details: ['Mapa de problemas', 'Jornada do cliente', 'Recomendações estratégicas'],
    icon: BarChart3
  },
  {
    id: 2,
    title: 'SPRINT',
    subtitle: 'DE PRODUTO & GROWTH',
    description: 'O principal produto. Ciclo de 6 a 8 semanas para redefinição de posicionamento, proposta de valor e plano de experimentação.',
    details: ['Estratégia de Growth', 'MVPs conceituais', 'Plano de experimentação'],
    icon: Target
  },
  {
    id: 3,
    title: 'MENTORIA',
    subtitle: 'ESTRATÉGICA',
    description: 'Para fundadores e líderes. Atuo como conselheiro de produto e growth, servindo como sparring para decisões difíceis.',
    details: ['Filtro estratégico', 'Acompanhamento mensal', 'Redução de risco'],
    icon: Users
  }
];

export function Services() {
  return (
    <section className="min-h-screen w-full bg-[#0a0a0a] text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-[#333] pb-8 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">
              COMO ATUAMOS
            </h2>
            <p className="text-gray-400 max-w-md">
              Modelos de engajamento desenhados para gerar impacto sem criar dependência operacional.
            </p>
          </div>
          <span className="text-[#0066ff] font-mono hidden md:block">
            SOLUÇÕES DE ALTO NÍVEL
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative border border-[#222] bg-[#111]/50 p-8 hover:border-[#0066ff] transition-colors duration-500 overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-[#1a1a1a] rounded-lg group-hover:bg-[#0066ff] transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-gray-600 font-mono text-sm">0{service.id}</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-[#0066ff] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <h4 className="text-lg font-mono text-gray-500 mb-4">{service.subtitle}</h4>
                  
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>

                  <div className="flex flex-col gap-2 mt-4 border-t border-[#333] pt-4">
                    {service.details.map((detail) => (
                      <span key={detail} className="text-xs font-mono text-gray-500 flex items-center gap-2">
                         <div className="w-1 h-1 bg-[#0066ff] rounded-full" /> {detail}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 mt-4">
                  <span>SAIBA MAIS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
