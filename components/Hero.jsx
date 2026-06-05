"use client";

import { useState, useEffect } from "react";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const roles = ["Developer", "Problem Solver"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen lg:min-h-[90vh] flex items-center px-6 md:px-14 pt-[100px] lg:pt-0 pb-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-accent2/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="w-full max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-8">
        <div className="flex-1 z-10 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/5 text-[0.65rem] font-medium text-white/30 tracking-[0.2em] uppercase mb-8"
          >
            <span className="w-1 h-1 rounded-full bg-accent2 shadow-[0_0_8px_#5de0c8]" /> 
            Available for new projects
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,10vw,5rem)] font-light leading-[0.9] tracking-tight mb-8 text-white"
          >
            SAYEM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 via-white to-white/40 font-semibold tracking-tighter">IMRAN KHAN.</span>
          </motion.h1>

          <div className="h-[40px] mb-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p 
                key={roles[roleIndex]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="text-[clamp(1rem,2vw,1.3rem)] font-light text-white/60 tracking-wide"
              >
                 <span className="text-accent2 font-medium">{roles[roleIndex]}</span>
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4"
          >
            <a href="#works" className="px-8 py-3.5 rounded-xl bg-white text-black font-semibold text-[0.8rem] no-underline hover:bg-white/90 transition-all shadow-xl">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-white font-semibold text-[0.8rem] no-underline hover:bg-white/[0.05] transition-all backdrop-blur-md">
              Contact
            </a>
            <a href="https://drive.google.com/file/d/1WdQnmZWKEDcajgNr5cBkYS2UQxSv7qRg/view?usp=sharing" className="px-8 py-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-white font-semibold text-[0.8rem] no-underline hover:bg-white/[0.05] transition-all backdrop-blur-md">
              Resume
            </a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-3 gap-px mt-12 lg:mt-16 max-w-sm mx-auto lg:mx-0 bg-white/5 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-3xl group/stats"
          >
            {[
              { label: 'Experience', value: '2+ Yrs' },
              { label: 'Projects', value: '15+' },
              { label: 'Tools', value: '10+' }
            ].map((stat, i) => (
              <div key={i} className="bg-bg/40 p-5 text-center transition-colors hover:bg-white/[0.03]">
                <div className="text-xl font-semibold text-white mb-0.5 tracking-tight">{stat.value}</div>
                <div className="text-[0.6rem] text-white/20 font-bold uppercase tracking-widest leading-none">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -15, 0]
          }}
          transition={{ 
            opacity: { duration: 1, delay: 0.2 },
            scale: { duration: 1, delay: 0.2 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="relative w-full max-w-[320px] md:max-w-[400px] aspect-square mx-auto lg:mx-0"
        >
          <div className="absolute -inset-[1px] rounded-[3rem] bg-gradient-to-r from-accent/40 via-accent2/40 to-accent3/40 bg-[length:200%_auto] animate-border-flow opacity-30 blur-[1px]" />
          
          <div className="relative w-full h-full rounded-[2.9rem] bg-[#05050a] p-2 overflow-hidden shadow-2xl">
            <div className="w-full h-full rounded-[2.4rem] overflow-hidden relative group">
              <Image 
                src="/portfolio.jpg" 
                alt="Sayem Imran Khan" 
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                priority
              />
            </div>
            
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between px-5 py-3 rounded-2xl bg-black/40 backdrop-blur-3xl border border-white/5 shadow-2xl">
              <div className="flex flex-col">
                <span className="text-[0.5rem] text-white/20 font-bold uppercase tracking-widest">Status</span>
                <span className="text-[0.7rem] font-medium text-white flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent2" />
                  Active
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
