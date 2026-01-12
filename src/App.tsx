import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
export function App() {
  return <main className="w-full bg-[#0a0a0a] min-h-screen text-white selection:bg-[#0066ff] selection:text-white overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>;
}