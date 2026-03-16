import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookCheck } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-sm font-semibold text-gold uppercase tracking-wider mb-2">My Background</div>
          <h2 className="text-3xl md:text-5xl font-bold">Academic Journey</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative glass p-10 rounded-3xl border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.05)]"
        >
          <div className="absolute top-0 right-10 -translate-y-1/2 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 p-4 rounded-full">
            <GraduationCap className="text-slate-900 dark:text-white" size={36} />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between text-left">
            <div className="mb-8 md:mb-0 md:pr-10">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Bachelor of Technology (B.Tech)</h3>
              <div className="flex flex-col text-slate-600 dark:text-slate-400 font-medium mb-6">
                <span className="text-slate-900 dark:text-white text-lg">Artificial Intelligence</span>
                <span className="text-sm mt-1">K.S.Rangasamy College of Technology • Oct 2021 - Mar 2025</span>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="p-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white mr-4 mt-0.5">
                    <BookCheck size={16} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-semibold">Specialized AI Curriculum</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Comprehensive study spanning Deep Learning, NLP, Data Automation, and advanced ML pipelines.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-1 rounded bg-slate-200 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 mr-4 mt-0.5">
                    <Award size={16} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-semibold">15+ UG Academic Projects & Later Consulting</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Foundational years developing 15+ specialized AI projects, which scaled into freelance engineering for advanced M.Tech and PhD studies post-graduation.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/3 w-full border-t border-slate-200 dark:border-slate-800 md:border-t-0 md:border-l pt-8 md:pt-0 md:pl-8">
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-cyan-500 mb-2">
                  21
                </div>
                <div className="uppercase tracking-widest text-xs font-bold text-slate-500">
                  Total <br /> Projects
                </div>
              </div>
            </div>
          </div>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 mb-12"
        >
          <h2 className="text-3xl font-bold">Licenses & Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {[
            {
              name: "Certificate of Participation - The ReneVerse Borderless Gaming Hackathon",
              issuer: "The ReneVerse",
              date: "2024"
            },
            {
              name: "Data Visualisation: Empowering Business with Effective Insights",
              issuer: "Tata Group Job Simulation",
              date: "2024"
            },
            {
              name: "Certificate of Participation - Daily Quiz (Engineering: February Series)",
              issuer: "Daily Quiz",
              date: "Feb 28, 2025"
            },
            {
              name: "Introduction to Cybersecurity",
              issuer: "Cisco Networking Academy",
              date: "2024"
            },
            {
              name: "Front End Development Libraries",
              issuer: "freeCodeCamp",
              date: "2024"
            }
          ].map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass p-6 rounded-2xl border-slate-300 dark:border-white/5 hover:border-gold/30 transition-colors flex flex-col justify-center h-full relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform"></div>
              <Award className="text-gold mb-4 relative z-10" size={28} />
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight relative z-10">{cert.name}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium relative z-10">{cert.issuer}</p>
              {cert.date && <p className="text-xs text-slate-500 mt-2 relative z-10">{cert.date}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
