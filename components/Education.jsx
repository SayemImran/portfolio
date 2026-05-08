"use client";

import React from 'react';
import { motion } from 'framer-motion';

const EducationCard = ({ degree, school, duration, grade, details }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-3xl relative overflow-hidden group transition-all hover:bg-white/[0.02] hover:border-white/10"
  >
    {/* Decor */}
    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
      <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
      </svg>
    </div>

    <div className="relative z-10">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <h3 className="text-2xl font-light text-white/90 mb-2">{degree}</h3>
          <p className="text-accent font-medium tracking-wide text-sm">{school}</p>
        </div>
        <div className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 text-[0.7rem] font-medium text-white/40 tracking-wider uppercase">
          {duration}
        </div>
      </div>

      <div className="flex items-center gap-6 mb-8">
        <div className="flex flex-col">
          <span className="text-[0.6rem] text-white/20 uppercase tracking-[0.2em] mb-1">Result</span>
          <span className="text-xl font-light text-white/70">CGPA <span className="text-white font-medium">{grade}</span></span>
        </div>
        <div className="h-10 w-px bg-white/5" />
        <div className="flex flex-col">
          <span className="text-[0.6rem] text-white/20 uppercase tracking-[0.2em] mb-1">Scale</span>
          <span className="text-xl font-light text-white/40">4.00</span>
        </div>
      </div>

      <div className="space-y-3">
        {details.map((detail, idx) => (
          <div key={idx} className="flex items-start gap-3 text-sm text-white/40 font-light leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/30 flex-shrink-0" />
            <p>{detail}</p>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function Education() {
  const educationData = [
    {
      degree: "BSc. in Computer Science & Engineering",
      school: "City University",
      duration: "Dec 2019 - Jan 2024",
      grade: "3.46",
      details: [
        "Focused on software engineering principles, data structures, and advanced algorithms.",
        "Completed comprehensive coursework in full-stack development and database management.",
        "Participated in various technical workshops and academic projects throughout the degree."
      ]
    }
  ];

  return (
    <section id="education" className="px-6 md:px-14 py-24 max-w-6xl mx-auto relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent2/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      
      <div className="mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/5 text-[0.65rem] font-medium text-white/30 tracking-[0.2em] uppercase mb-6"
        >
          Academic Background
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[clamp(2rem,5vw,3rem)] font-light tracking-tight text-white/90"
        >
          My <span className="text-white/30 font-medium italic">Education</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {educationData.map((edu, idx) => (
          <EducationCard key={idx} {...edu} />
        ))}
      </div>
    </section>
  );
}
