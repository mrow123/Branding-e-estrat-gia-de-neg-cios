import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
};
const projects: Project[] = [{
  id: 1,
  title: 'NEON HORIZON',
  category: 'Immersive Web Experience',
  image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop'
}, {
  id: 2,
  title: 'VOID WALKER',
  category: 'Brand Identity',
  image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop'
}, {
  id: 3,
  title: 'SYNTHETIC SOUL',
  category: 'Art Direction',
  image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070&auto=format&fit=crop'
}, {
  id: 4,
  title: 'DATA MUSHROOM',
  category: 'Data Visualization',
  image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop'
}];
export function Projects() {
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
      }} className="mb-16 flex items-end justify-between border-b border-[#333] pb-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            SELECTED WORKS
          </h2>
          <span className="text-gray-500 hidden md:block">2023 — 2024</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => <motion.div key={project.id} initial={{
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
        }} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#111] mb-6">
                <motion.img src={project.image} alt={project.title} className="w-full h-full object-cover" whileHover={{
              scale: 1.05
            }} transition={{
              duration: 0.4,
              ease: 'easeOut'
            }} />
                <div className="absolute inset-0 bg-[#0066ff] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-1 group-hover:text-[#0066ff] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base">
                    {project.category}
                  </p>
                </div>
                <span className="text-gray-600 text-sm">0{project.id}</span>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}