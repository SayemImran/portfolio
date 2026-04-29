"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'works', 'skills', 'contact'];
      let current = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 120) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['home', 'works', 'skills', 'contact'];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] h-[64px] flex items-center justify-between px-6 md:px-14 backdrop-blur-2xl border-b border-white/5 transition-all duration-500 ${
        isScrolled ? 'bg-bg/80 py-1' : 'bg-transparent py-2'
      }`}>
        <Link href="#home" className="group flex items-center gap-3 no-underline">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-[0.6rem] font-bold text-white tracking-widest shadow-lg shadow-accent/20"
          >
            SIK
          </motion.div>
          <span className="font-medium text-[0.9rem] text-white/80 tracking-tight hidden sm:block">
            Sayem Imran Khan
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.02] border border-white/5 p-1 rounded-xl backdrop-blur-md">
          {navItems.map((item) => (
            <Link 
              key={item}
              href={`#${item}`} 
              className={`relative px-4 py-1.5 text-[0.75rem] font-medium no-underline rounded-lg transition-all duration-300 tracking-wide ${
                activeSection === item ? 'text-white' : 'text-white/30 hover:text-white/60'
              }`}
            >
              {activeSection === item && (
                <motion.div 
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/5 rounded-lg -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="#contact" className="hidden lg:flex px-5 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-medium text-[0.75rem] no-underline hover:bg-white/10 transition-all active:scale-95 interactive">
            Hire Me
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden w-8 h-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white transition-all cursor-none interactive"
          >
            <div className="relative w-4 h-3">
              <span className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-1.5 w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-bg/95 backdrop-blur-2xl md:hidden pt-20 px-6 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link 
                  key={item}
                  href={`#${item}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-light text-white/80 hover:text-accent transition-colors py-3 border-b border-white/5"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </div>
            <Link 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 w-full py-4 rounded-xl bg-accent text-white font-bold text-center text-lg shadow-lg"
            >
              Hire Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
