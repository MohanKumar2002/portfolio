import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Bubbles = () => {
  const techStack1 = [
    { name: 'React', emoji: '⚛️' },
    { name: 'Tailwind CSS', emoji: '🎨' },
    { name: 'FastAPI', emoji: '⚡' },
    { name: 'PostgreSQL', emoji: '🐘' },
    { name: 'n8n', emoji: '⚙️' },
  ];
  
  const techStack2 = [
    { name: 'HuggingFace', emoji: '🤗' },
    { name: 'Python', emoji: '🐍' },
    { name: 'RAG', emoji: '🧠' },
    { name: 'SQL', emoji: '💾' },
    { name: 'Automation', emoji: '🤖' },
  ];

  // We duplicate arrays to create a seamless infinite scrolling loop effect
  const duplicatedTech1 = [...techStack1, ...techStack1, ...techStack1, ...techStack1, ...techStack1];
  const duplicatedTech2 = [...techStack2, ...techStack2, ...techStack2, ...techStack2, ...techStack2];

  return (
    <div className="w-full relative overflow-hidden py-4 flex flex-col space-y-8 mt-10">
      {/* Side fades for smooth marquee effect entering and exiting */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-slate-50 dark:from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-slate-50 dark:from-black to-transparent z-10 pointer-events-none"></div>
      
      {/* Row 1 - flowing left */}
      <motion.div 
        animate={{ x: ["0%", "-20%"] }} 
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        className="flex w-max space-x-6 px-4"
      >
        {duplicatedTech1.map((tech, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex flex-col items-center justify-center w-36 h-36 md:w-40 md:h-40 rounded-full glass bg-gradient-to-br from-white/90 to-white/40 dark:from-white/10 dark:to-black/80 border border-slate-300 dark:border-white/20 shadow-xl dark:shadow-[0_0_30px_rgba(0,0,0,0.05)] backdrop-blur-3xl hover:scale-105 transition-transform duration-300 group"
          >
            {/* Inner Ring for 3D appearance */}
            <div className="absolute inset-2 rounded-full border border-slate-300/50 dark:border-white/5 pointer-events-none"></div>
            
            <span className="text-4xl md:text-5xl mb-3 drop-shadow-md group-hover:scale-110 transition-transform duration-300">{tech.emoji}</span>
            <span className="text-slate-900 dark:text-white font-sans font-bold text-xs md:text-sm tracking-wider uppercase text-center">{tech.name}</span>
          </div>
        ))}
      </motion.div>

      {/* Row 2 - flowing right */}
      <motion.div 
        animate={{ x: ["-20%", "0%"] }} 
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        className="flex w-max space-x-6 px-4 ml-[-50px] md:ml-[-100px]"
      >
        {duplicatedTech2.map((tech, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex flex-col items-center justify-center w-36 h-36 md:w-40 md:h-40 rounded-full glass bg-gradient-to-br from-white/90 to-white/40 dark:from-white/10 dark:to-black/80 border border-slate-300 dark:border-white/20 shadow-xl dark:shadow-[0_0_30px_rgba(0,0,0,0.05)] backdrop-blur-3xl hover:scale-105 transition-transform duration-300 group"
          >
            {/* Inner Ring for 3D appearance */}
            <div className="absolute inset-2 rounded-full border border-slate-300/50 dark:border-white/5 pointer-events-none"></div>

            <span className="text-4xl md:text-5xl mb-3 drop-shadow-md group-hover:scale-110 transition-transform duration-300">{tech.emoji}</span>
            <span className="text-slate-900 dark:text-white font-sans font-bold text-xs md:text-sm tracking-wider uppercase text-center">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 50, filter: 'blur(5px)' }}
           whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, type: "spring", bounce: 0.3 }}
           className="mb-16"
        >
           <h2 className="text-xs md:text-sm font-sans font-bold tracking-[0.3em] text-gold uppercase mb-4">Expertise</h2>
           <h3 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white tracking-tighter mx-auto w-full md:w-auto overflow-hidden playfair-display">
              <span className="inline-block text-gold italic pr-2">My</span>Skills
           </h3>
           <p className="text-slate-500 font-sans font-light mt-4 tracking-wide">Continuous integration of technologies powering my ecosystem.</p>
        </motion.div>

        <Bubbles />
      </div>
    </section>
  );
};

export default Skills;
