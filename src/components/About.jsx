import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Lightbulb, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <div className="text-sm font-semibold text-gold uppercase tracking-wider mb-2">About Me</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              AI Researcher & <span className="text-gradient">Automation Engineer</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg leading-relaxed font-light">
              I am an AI Researcher holding a B.Tech in Artificial Intelligence. My background combines deep theoretical research with the practical engineering of scalable ML pipelines, Natural Language Processing, and Computer Vision models.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed font-light">
              As the Founder of Moh-AI Tech, I specialize in architecting <span className="text-slate-800 dark:text-slate-200 font-medium">Custom RAG Chatbots</span>, <span className="text-slate-800 dark:text-slate-200 font-medium">Data-to-Dashboard Visualizers</span>, and <span className="text-slate-800 dark:text-slate-200 font-medium">Full-Stack AI Automations</span>. My work focuses on bridging the gap between cutting-edge AI research and operational efficiency, significantly reducing manual workflows.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="glass p-4 rounded-xl flex items-start space-x-4 border-t border-t-blue-500/30 hover:border-t-blue-500 transition-colors">
                <BrainCircuit className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-1">Automation Systems</h4>
                  <p className="text-sm text-slate-500">n8n, HuggingFace & Workflows</p>
                </div>
              </div>
              <div className="glass p-4 rounded-xl flex items-start space-x-4 border-t border-t-purple-500/30 hover:border-t-purple-500 transition-colors">
                <Lightbulb className="text-purple-600 dark:text-purple-400 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-1">Custom Chatbots</h4>
                  <p className="text-sm text-slate-500">FastAPI, PostgreSQL & RAG</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 relative flex justify-center w-full"
          >
            {/* Visual Abstract representation of AI */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
              
              <div className="absolute top-0 right-0 glass shadow-2xl p-6 rounded-2xl border-slate-300 dark:border-white/10 z-20 transform rotate-3 hover:rotate-0 transition-transform">
                <Code2 className="text-cyan-600 dark:text-cyan-400 mb-3" size={32} />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Founder</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Moh-AI Tech</p>
              </div>

              <div className="absolute bottom-10 left-0 glass shadow-2xl p-6 rounded-2xl border-slate-300 dark:border-white/10 z-20 transform -rotate-3 hover:rotate-0 transition-transform">
                <div className="text-4xl font-extrabold text-gradient mb-1">70%</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Time Saved</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">With AI Automation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
