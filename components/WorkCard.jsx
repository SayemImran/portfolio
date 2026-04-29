"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WorkCard({ project, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group rounded-[2rem] bg-white/[0.01] border border-white/5 overflow-hidden backdrop-blur-xl transition-all duration-500 hover:border-white/10 hover:shadow-2xl hover:shadow-accent/5 cursor-none interactive"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-[#0d1525]">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
        <span className="absolute bottom-2 right-6 font-bold text-[4rem] tracking-tighter text-white/5 select-none transition-transform duration-700 group-hover:translate-x-2">
          {project.id}
        </span>
      </div>
      
      <div className="p-6 md:p-8">
        <div className="flex gap-2 flex-wrap mb-4">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-2.5 py-0.5 rounded-full text-[0.6rem] font-medium uppercase tracking-wider bg-white/5 border border-white/5 text-white/30">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="font-normal text-lg md:text-xl tracking-tight mb-2 text-white/90">
          {project.title}
        </h3>
        
        <p className="text-[0.85rem] text-white/30 font-light leading-relaxed mb-6 line-clamp-2">
          {project.desc}
        </p>
        
        <div className="flex gap-2">
          <a href={project.live} className="flex items-center gap-2 px-5 py-2 rounded-lg bg-accent/80 text-white font-medium text-[0.75rem] no-underline hover:bg-accent transition-all">
            Live
          </a>
          <a href={project.code} className="flex items-center gap-2 px-5 py-2 rounded-lg bg-white/5 border border-white/5 text-white/60 font-medium text-[0.75rem] no-underline hover:bg-white/10 transition-all">
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}
