import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 70, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 150
      }
    }
  };
  
  const title1 = "Mohan Kumar S".split(" ");
  const title2 = "AI Researcher &".split(" ");

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-black text-slate-900 dark:text-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
        
        {/* Left Side: Staggered Cinematic Typography */}
        <div className="flex-1 text-center lg:text-left mt-10 lg:mt-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-4"
          >
            <div className="flex flex-col justify-center lg:justify-start overflow-visible py-2">
               <motion.span variants={wordVariants} className="text-sm md:text-base lg:text-lg font-sans font-light tracking-[0.3em] uppercase text-gold/80 block w-full mb-4">
                 Hello, I'm
               </motion.span>
               <div className="flex flex-nowrap gap-x-3 md:gap-x-4 overflow-visible">
                 {title1.map((word, i) => (
                   <motion.span key={i} variants={wordVariants} className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold tracking-tighter text-slate-900 dark:text-white inline-block whitespace-nowrap">
                     {word}
                   </motion.span>
                 ))}
               </div>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 mt-2 overflow-hidden py-2">
               {title2.map((word, i) => (
                 <motion.span key={i} variants={wordVariants} className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tighter text-slate-900 dark:text-white/50 inline-block">
                   {word}
                 </motion.span>
               ))}
               <motion.span variants={wordVariants} className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tighter text-gold italic inline-block pr-4">
                 Founder
               </motion.span>
            </div>

            <motion.p
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
              className="mt-8 max-w-xl text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              Building intelligent, scalable AI architectures and research-driven machine learning models. Bridging the gap between academic innovation and theoretical computer science.
            </motion.p>
          </motion.div>
        </div>

        {/* Right Side: 3D Tracking Avatar Card */}
        <div className="flex-1 flex justify-center lg:justify-end" style={{ perspective: "1200px" }}>
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            initial={{ scale: 0.5, opacity: 0, filter: 'blur(20px)' }}
            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            transition={{ type: "spring", damping: 15, stiffness: 80, delay: 0.8 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-64 h-80 md:w-80 md:h-[420px] rounded-2xl overflow-hidden glass shadow-[0_0_80px_rgba(255,184,0,0.1)] cursor-crosshair group border border-slate-300 dark:border-white/10"
          >
            <img 
              src="/mohan.png" 
              alt="Mohan Kumar S" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"; // Minimalist placeholder
              }}
            />

            {/* Glossy gradient overlay mapped to Z axis */}
            <div 
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
              style={{ transform: "translateZ(30px)" }}
            ></div>
            
            {/* Pop out gold border element */}
            <div 
              className="absolute inset-4 border border-gold/30 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500" 
              style={{ transform: "translateZ(50px)" }}
            ></div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
