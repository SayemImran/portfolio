"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="px-6 md:px-14 py-20 md:py-24 max-w-6xl mx-auto relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none -z-10" />

      <div className="mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-[6px] text-[0.65rem] text-accent tracking-[0.15em] uppercase mb-[10px] before:content-[''] before:block before:w-4 before:h-px before:bg-accent"
        >
          My Story
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-light text-[clamp(2rem,4vw,2.8rem)] tracking-tight leading-tight text-white/90"
        >
          Independent Spirit, <br />
          <span className="text-white/30 font-medium">Driven by Code</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-7 bg-white/[0.01] border border-white/5 rounded-[2rem] p-8 md:p-10 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-5 text-[0.95rem] md:text-[1rem] text-white/50 font-light leading-relaxed">
            <p>
              I am a <span className="text-white font-normal">self-driven independent developer</span> who discovered a passion for the web through the lens of pure creation. I don&apos;t just write code; I craft digital experiences from the ground up.
            </p>
            <p>
              While I am currently looking to break into the professional field, my journey so far has been defined by <span className="text-white font-normal">ambitious solo projects</span>. Building everything alone has forced me to become a versatile creator—mastering the bridge between aesthetic design and functional architecture.
            </p>
            <p>
              I thrive on the challenge of taking a complex idea and turning it into a polished, high-performance reality. For me, every project is an opportunity to push the boundaries of <span className="text-white font-normal">UI/UX</span> and modern web technologies.
            </p>
            <p>
              My programming journey began with curiosity and evolved through relentless self-learning. I love diving deep into <span className="text-white font-normal">full-stack development</span>, where I can architect both the frontend magic and the backend logic that powers it. The satisfaction of seeing a concept transform into a seamless user experience is what drives me every day.
            </p>
            <p>
              Beyond the screen, I find inspiration in the world around me. I&apos;m passionate about <span className="text-white font-normal">travelling</span> to new places, discovering different cultures, and letting fresh perspectives fuel my creativity. When I&apos;m not coding, you&apos;ll find me immersed in <span className="text-white font-normal">esports games</span>, strategizing and competing in virtual worlds that mirror the problem-solving I love in development.
            </p>
            <p>
              I also enjoy <span className="text-white font-normal">cooking delicious meals</span>, experimenting with flavors and techniques that bring people together. This blend of technical precision in code and culinary creativity reflects my personality—someone who approaches challenges with enthusiasm, attention to detail, and a touch of adventure.
            </p>
          </div>
        </motion.div>

        <div className="lg:col-span-5 flex flex-col gap-3">
          {[
            { icon: '🚀', title: 'Self-Taught Mastery', desc: 'No classroom could match the intensity of learning by doing. I build to understand, and I build to win.' },
            { icon: '🏗️', title: 'Solo-Architect', desc: 'Handling everything from wireframes to deployment has given me a unique 360-degree view of software development.' },
            { icon: '💎', title: 'Uncompromising Quality', desc: 'Being independent means my name is on every pixel. I strive for perfection in every project I release.' }
          ].map((card, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (index * 0.1) }}
              whileHover={{ x: 5, backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
              className="bg-white/[0.01] border border-white/5 rounded-[1.5rem] p-5 flex items-start gap-4 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl flex-shrink-0 bg-white/5 border border-white/5 flex items-center justify-center text-lg shadow-inner group-hover:bg-accent/10 transition-all">
                {card.icon}
              </div>
              <div>
                <h4 className="font-medium text-[0.9rem] text-white/80 mb-1">{card.title}</h4>
                <p className="text-[0.8rem] text-white/30 font-light leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
