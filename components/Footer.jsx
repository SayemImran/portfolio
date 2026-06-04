"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const socials = [
    { name: 'GitHub', url: 'https://github.com/sayemimran', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg> },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/sayem-imran-khan', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg> },
    { name: 'X / Twitter', url: 'https://twitter.com/sayemimran', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg> },
    { name: 'Facebook', url: 'https://facebook.com/sayemimran', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-14 py-12 border-t border-white/5 bg-white/[0.005] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[100px] bg-accent/5 blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        {/* Social Icons */}
        <div className="flex gap-4">
          {socials.map((social) => (
            <motion.a 
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/30 hover:text-white transition-all"
              title={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Footer Info */}
        <div className="w-full pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-white/80 font-medium text-sm tracking-tight">
              Sayem Imran Khan
            </div>
            <div className="text-[0.65rem] text-white/20 font-medium uppercase tracking-[0.2em]">
              © {currentYear} — Built with Passion
            </div>
          </div>

          <div className="flex gap-8">
            {['Home', 'Works', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[0.65rem] font-medium text-white/20 hover:text-white/50 transition-colors uppercase tracking-[0.25em] no-underline"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
