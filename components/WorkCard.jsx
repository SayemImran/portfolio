"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WorkCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group rounded-[2rem] bg-white/[0.01] border border-white/5 overflow-hidden backdrop-blur-xl transition-all duration-500 hover:border-white/10 hover:shadow-2xl hover:shadow-accent/5"
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

      <div className="p-6 md:p-8 flex flex-col justify-between items-start gap-4">
        <h3 className="font-normal text-lg md:text-xl tracking-tight text-white/90">
          {project.title}
        </h3>

        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-accent text-white font-medium text-[0.8rem] tracking-wide no-underline hover:bg-accent/80 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-accent/20"
        >
          View More / Details
        </Link>
      </div>
    </motion.div>
  );
}

