"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <section id="contact" className="px-6 md:px-14 py-20 md:py-24 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto bg-white/[0.01] border border-white/5 rounded-[2rem] p-10 md:p-16 text-center backdrop-blur-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="inline-flex items-center gap-[6px] text-[0.6rem] text-accent tracking-[0.15em] uppercase mb-5 before:content-[''] before:block before:w-4 before:h-px before:bg-accent">
            Contact Me
          </div>

          <h2 className="font-light text-[clamp(2rem,5vw,3rem)] tracking-tight leading-tight text-white/90 mb-4">
            Let&apos;s Build <br />
            <span className="text-white/30 font-medium">Something Great</span>
          </h2>

          <p className="text-[0.9rem] text-white/30 font-light max-w-sm mx-auto mb-10 leading-relaxed">
            I am always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="mailto:sayemimrankhan@gmail.com"
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-accent text-white font-medium text-[0.8rem] no-underline shadow-lg shadow-accent/10 hover:bg-accent/90 transition-all"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Email Me
            </a>
            <div className="flex gap-3">
              <a
                href="https://github.com/sayemimran"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/sayem-imran-khan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://wa.me/8801609813346"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#25D366] text-white hover:scale-105 transition-all"
                aria-label="WhatsApp"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.887.76 5.595 2.087 7.94L0 32l7.87-2.06a15.9 15.9 0 0 0 8.13 2.25c8.836 0 16-7.164 16-16S24.836.396 16 .396Zm0 29.11c-2.6 0-5.01-.7-7.08-1.9l-.51-.3-4.67 1.22 1.25-4.55-.33-.52a13.4 13.4 0 0 1-2.06-7.05c0-7.42 6.04-13.46 13.46-13.46s13.46 6.04 13.46 13.46-6.04 13.46-13.46 13.46Zm7.43-10.08c-.4-.2-2.37-1.17-2.74-1.3-.37-.14-.64-.2-.9.2-.27.4-1.03 1.3-1.26 1.57-.23.27-.46.3-.86.1-.4-.2-1.7-.63-3.23-2-1.2-1.07-2-2.4-2.23-2.8-.23-.4-.02-.62.18-.82.18-.18.4-.46.6-.7.2-.23.27-.4.4-.66.13-.27.07-.5-.03-.7-.1-.2-.9-2.17-1.23-2.97-.32-.77-.65-.67-.9-.68-.23-.01-.5-.01-.76-.01-.27 0-.7.1-1.07.5-.37.4-1.4 1.36-1.4 3.3 0 1.94 1.44 3.82 1.64 4.08.2.27 2.83 4.32 6.86 6.05 4.03 1.73 4.03 1.15 4.75 1.08.72-.07 2.37-.97 2.7-1.9.33-.93.33-1.73.23-1.9-.1-.17-.37-.27-.77-.47Z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
