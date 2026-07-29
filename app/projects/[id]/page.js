"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-bg flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
        <p className="text-muted mb-8">The project you are looking for does not exist or has been moved.</p>
        <Link
          href="/"
          className="px-6 py-3 bg-accent text-white rounded-xl hover:bg-accent/80 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#060610] to-[#0a0a18] text-white selection:bg-accent/30 relative overflow-hidden py-16 px-6 md:px-14">
      {/* Background blobs for premium feel */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square rounded-full bg-accent2/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/#works"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors duration-300 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <div className="flex gap-2 flex-wrap mb-6">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-[0.7rem] font-semibold uppercase tracking-wider bg-white/5 border border-white/5 text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Project Showcase Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[16/9] w-full rounded-[2rem] border border-white/10 overflow-hidden bg-[#0d1525] shadow-2xl mb-12"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Quick Details Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-1 p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl flex flex-col gap-6"
          >
            <div>
              <h3 className="text-[0.65rem] text-accent tracking-[0.15em] uppercase mb-3 font-semibold">
                Tech Stack
              </h3>
              <p className="text-[0.9rem] font-light text-white/70 leading-relaxed">
                {project.tags.join(", ")}
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-accent text-white font-medium text-sm transition-all duration-300 hover:bg-accent/80 shadow-lg shadow-accent/15"
              >
                <span>Live Project</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>

              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 font-medium text-sm transition-all duration-300 hover:bg-white/10"
              >
                <span>GitHub (Client)</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Detailed Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 flex flex-col gap-8"
          >
            {/* Description */}
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl">
              <h2 className="text-xl font-normal tracking-tight text-white mb-4">About the Project</h2>
              <p className="text-[0.95rem] text-white/70 font-light leading-relaxed">
                {project.desc}
              </p>
            </div>

            {/* Challenges */}
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl">
              <h2 className="text-xl font-normal tracking-tight text-accent2 mb-4">Challenges Faced</h2>
              <p className="text-[0.95rem] text-white/70 font-light leading-relaxed">
                {project.challenges}
              </p>
            </div>

            {/* Future Plans */}
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl">
              <h2 className="text-xl font-normal tracking-tight text-accent3 mb-4">Future Improvements</h2>
              <p className="text-[0.95rem] text-white/70 font-light leading-relaxed">
                {project.improvements}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
