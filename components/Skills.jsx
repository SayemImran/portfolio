"use client";

import React from 'react';
import { motion } from 'framer-motion';

const TechItem = ({ name, icon, color }) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.02 }}
    className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl transition-all hover:bg-white/[0.05] hover:border-white/10 group cursor-none interactive"
  >
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white/[0.03] border border-white/5 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all ${color}`}>
      {icon}
    </div>
    <span className="text-sm font-medium text-white/50 group-hover:text-white/90 transition-colors">{name}</span>
  </motion.div>
);

export default function Skills() {
  const frontend = [
    { name: 'HTML5', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="#E34F26"><path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm17.031 5.378H5.469l.47 5.288h10.09l-.5 5.614L12 17.203l-3.528-.923-.227-2.541H5.742l.39 5.09L12 20.415l5.869-1.789.662-13.248z"/></svg> },
    { name: 'CSS3', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="#1572B6"><path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm17.031 5.378H5.469l.47 5.288h10.09l-.5 5.614L12 17.203l-3.528-.923-.227-2.541H5.742l.39 5.09L12 20.415l5.869-1.789.662-13.248z"/></svg> },
    { name: 'JavaScript', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="#F7DF1E"><path d="M0 0h24v24H0V0zm22.034 18.27c0-2.037-1.135-3.15-3.94-4.365-1.136-.45-2.227-.81-2.227-1.575 0-.54.364-.9.91-.9.636 0 .91.315.91 1.125h2.136c-.045-1.935-1.136-2.925-3.045-2.925-1.955 0-3.045 1.125-3.045 2.565 0 1.935 1.136 2.745 3.364 3.69 1.182.495 1.91.945 1.91 1.755 0 .63-.5.99-1.227.99-.864 0-1.273-.45-1.318-1.485H13.5c.045 2.34 1.273 3.33 3.455 3.33 2.136 0 3.181-1.035 3.181-2.925zM10.227 12H8.41v6.3c0 .99-.318 1.35-1.273 1.35-.455 0-.818-.045-1.136-.18v1.755c.318.09.818.18 1.455.18 2.136 0 3.091-1.125 3.091-3.06V12z"/></svg> },
    { name: 'ReactJS', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="2"><circle cx="12" cy="12" r="2"/><path d="M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5Z"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg> },
    { name: 'NextJS', icon: <svg width="24" height="24" viewBox="0 0 180 180" fill="white"><path d="M150.15 150.15L85.6499 66.8999V150.15H72.1499V29.8499H85.6499L136.65 95.8499V29.8499H150.15V150.15Z"/><rect x="162.15" y="29.8499" width="13.5" height="120.3"/></svg> },
  ];

  const backend = [
    { name: 'Django', icon: <div className="text-white font-black text-xl tracking-tighter">dj</div> },
    { name: 'Python', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="#3776AB"><path d="M11.923 1.002c-1.397.01-2.731.144-3.784.401-2.484.606-2.392 1.832-2.392 3.256v2.302h6.395v.853h-8.91c-1.424 0-2.678 1.01-3.235 3.49-.606 2.484-.575 4.542.031 7.026.471 1.936 1.637 3.315 3.061 3.315h2.15v-3.003c0-1.815 1.545-3.36 3.36-3.36h6.395c1.815 0 3.36-1.545 3.36-3.36V6.023c0-1.815-1.545-3.36-3.36-3.36h-2.15v1.201c0 1.258-.87 2.15-2.15 2.15s-2.15-.892-2.15-2.15V1.002h-.572zm-2.76 1.48c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zM14.9 8.016c-1.815 0-3.36 1.545-3.36 3.36v3.003c0 1.815-1.545 3.36-3.36 3.36H6.035c-1.815 0-3.36 1.545-3.36 3.36v2.303c0 1.424 1.24 2.65 3.633 3.255 2.392.606 4.451.637 6.935.031 1.936-.47 3.315-1.637 3.315-3.061v-2.303H10.16v-.853h8.91c1.424 0 2.678-1.01 3.235-3.49.606-2.484.575-4.542-.031-7.026-.471-1.936-1.637-3.315-3.061-3.315h-4.314zm2.15 12.012c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"/></svg> },
    { name: 'NodeJS', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="#339933"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm7.5 14.25l-7.5 4.16-7.5-4.16V8.75l7.5-4.16 7.5 4.16v7.5z"/></svg> },
    { name: 'PostgreSQL', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="#336791"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg> },
    { name: 'MongoDB', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="#47A248"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 21.6c-5.3 0-9.6-4.3-9.6-9.6S6.7 2.4 12 2.4s9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6zm-1.2-14.4h2.4v4.8h-2.4z"/></svg> },
  ];

  return (
    <section id="skills" className="px-6 md:px-14 py-24 max-w-6xl mx-auto relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="mb-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/5 text-[0.65rem] font-medium text-white/30 tracking-[0.2em] uppercase mb-6"
        >
          Expertise
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[clamp(2rem,5vw,3rem)] font-light tracking-tight text-white/90"
        >
          Tech <span className="text-white/30 font-medium italic">Stack</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Frontend Column */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-3xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          
          <h3 className="text-xl font-light text-white/80 mb-8 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-accent/50" />
            Frontend <span className="text-white/20 text-sm font-medium">Tools</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {frontend.map((item, idx) => (
              <TechItem key={idx} {...item} />
            ))}
          </div>
        </motion.div>

        {/* Backend Column */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-3xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </div>

          <h3 className="text-xl font-light text-white/80 mb-8 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-accent2/50" />
            Backend <span className="text-white/20 text-sm font-medium">Tools</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {backend.map((item, idx) => (
              <TechItem key={idx} {...item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
