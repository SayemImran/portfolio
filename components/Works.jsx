"use client";

import { motion } from "framer-motion";
import WorkCard from "./WorkCard";

const projects = [
  {
    id: "01",
    title: "Blood Drops",
    desc: "Full-stack blood management system with JWT authentication and donation feature.",
    tags: ["Django", "Python", "ReactJS", "PostgreSQL"],
    image: "/bloodDrops.png",
    live: "https://blooddrops.vercel.app/",
    code: "https://github.com/SayemImran/Blood-Drops",
  },
  {
    id: "02",
    title: "DigiTools",
    desc: "Digital tools marketplace built with modern web standards.",
    tags: ["ReactJS", "TailwindCSS"],
    image: "/digitools.png",
    live: "https://digitools-by-imran.netlify.app/",
    code: "https://github.com/SayemImran/digitools",
  },
  {
    id: "03",
    title: "Keen Keeper",
    desc: "A social application to keep your friends close.",
    tags: ["Next.JS", "TailwindCSS"],
    image: "/keenkeeper.png",
    live: "https://keen-keeper-ten-pi.vercel.app/",
    code: "https://github.com/SayemImran/keen-keeper",
  },
  {
    id: "04",
    title: "Qurbani Hut",
    desc: "A full-stack web application that simplifies the process of sacrificing animals for religious purposes, providing a seamless and user-friendly platform for customers to book and manage their qurbani orders.",
    tags: ["Next.JS", "TailwindCSS", "BetterAuth", "MongoDB"],
    image: "/qurbani.png",
    live: "https://qurbanihut-bd.vercel.app/",
    code: "https://github.com/SayemImran/qurbanihut",
  },
  {
    id: "05",
    title: "Petverse",
    desc: "A digtital SaaS platform for pet adoption",
    tags: ["Next.JS", "TailwindCSS", "BetterAuth", "MongoDB", "JWT","Sonner","HeroUI"],
    image: "/petverse.png",
    live: "https://petverse-bd.vercel.app/",
    code: "https://github.com/SayemImran/petverse/",
    server: "https://github.com/SayemImran/petverse-server/",
  },
  {
    id: "06",
    title: "Resell Hub",
    desc: "A digtital SaaS platform for buying and selling used goods",
    tags: ["Next.JS", "TailwindCSS", "BetterAuth", "MongoDB", "JWT","Stirpe","Sonner","HeroUI"],
    image: "/resellhub.png",
    live: "https://resell-hub-bd.vercel.app/",
    code: "https://github.com/SayemImran/resell-hub-client/",
    server: "https://github.com/SayemImran/resell-hub-server/",
  },
];

export default function Works() {
  return (
    <section
      id="works"
      className="px-6 md:px-14 py-20 md:py-24 max-w-6xl mx-auto relative"
    >
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-[6px] text-[0.6rem] text-accent tracking-[0.15em] uppercase mb-[10px] before:content-[''] before:block before:w-4 before:h-px before:bg-accent"
        >
          Selected Work
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-light text-[clamp(2rem,4vw,2.8rem)] tracking-tight leading-tight text-white/90 mb-3"
        >
          Projects I&apos;ve{" "}
          <span className="text-white/30 font-medium">Built</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/30 max-w-sm text-[0.9rem] font-light leading-relaxed"
        >
          A selection of projects that showcase my technical journey.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <WorkCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
