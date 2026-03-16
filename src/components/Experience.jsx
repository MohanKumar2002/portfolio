import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, BookOpen, ExternalLink } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <Briefcase className="text-gold" size={28} />
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">

              {/* Timeline Item */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gold bg-slate-100 dark:bg-slate-900 text-gold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="w-2 h-2 bg-gold rounded-full animate-ping"></span>
                </div>
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl border-l-4 border-l-gold">
                  <div className="flex flex-col mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Founder & AI Researcher</h3>
                    <div className="text-blue-600 dark:text-blue-400 font-medium text-sm">Moh-AI Tech • Jun 2025 - Present</div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Build & deploy AI tools (chatbots, generators, summarizers, dashboards). Design AI-powered websites. Deliver business outcomes like saving client teams 20-40 hours/week.
                  </p>
                </div>
              </div>

              {/* Timeline Item */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl">
                  <div className="flex flex-col mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Artificial Intelligence Developer</h3>
                    <div className="text-slate-600 dark:text-slate-400 font-medium text-sm">Cubeaisolutions Tech Pvt Ltd • Aug 2024 - Feb 2025</div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Developed AI/ML models focusing on predictive capabilities, data analysis, and advanced algorithmic engineering to address business needs.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Research & Publications Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <BookOpen className="text-purple-500" size={28} />
              <h2 className="text-3xl font-bold">Research & Publications</h2>
            </div>

            <div className="glass p-8 rounded-2xl border-t border-t-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.05)] h-full">
              <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-purple-600/20 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                  Highlighted Publication
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 italic">
                  "Adaptive AI for Real-Time User Prompt Correction in Conversational Systems"
                </h3>
                <p className="text-slate-700 dark:text-slate-300 font-medium mb-4">— Research Paper</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  Focused on advanced methodologies to optimize prompts for Large Language Models. The work highlights novel approaches to achieve higher deterministic accuracy from generative models through programmatic enhancement.
                </p>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Core Research Areas</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-700 dark:text-slate-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3"></div>
                    Retrieval-Augmented Generation (RAG) Architectures
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3"></div>
                    Full-Stack AI Integrations and Dashboards
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3"></div>
                    Custom Machine Learning Models
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
