import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, CodeSquare } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Subscription-Ready AI Hubs',
      category: 'Full-Stack AI Platform',
      description: 'Built scalable AI hubs featuring real-time tools, user access control, and subscription management for businesses.',
      tags: ['React', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'],
      highlight: true
    },
    {
      title: 'AI Lead Generation Automation',
      category: 'Workflow Automation',
      description: 'Automated outreach pipelines integrating NLP models with email and spreadsheet platforms to increase lead response rates by 45%.',
      tags: ['n8n', 'HuggingFace', 'Gmail API', 'Google Sheets']
    },
    {
      title: 'Custom AI Chatbots & Summarizers',
      category: 'LLMs & NLP',
      description: 'Deployed tailored Retrieval-Augmented Generation (RAG) chatbots that handle over 70% of customer queries instantly.',
      tags: ['RAG', 'Vector DB', 'LLMs', 'FastAPI']
    },
    {
      title: 'Interactive Data Visualizers',
      category: 'Dashboards & Analytics',
      description: 'Data-to-Dashboard systems translating raw metrics into actionable, real-time insights for strategic decision making.',
      tags: ['React', 'Data Visualization', 'SQL']
    },
    {
      title: 'Business-Specific Automation Systems',
      category: 'AI Tools',
      description: 'Developed custom solutions including AI resume builders and SQL analyzers to eliminate repetitive tasks and save 20-40 hours/week.',
      tags: ['AI Agents', 'Automation', 'Python']
    },
    {
      title: 'Prompt Enhancer AI',
      category: 'Research Paper',
      description: 'Advanced AI system designed to optimize and enhance prompts for large language models, published in IEEE.',
      tags: ['NLP', 'Transformers', 'Python'],
      highlight: true
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-sm font-semibold text-gold uppercase tracking-wider mb-2">Portfolio</div>
          <h2 className="text-3xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            A selection of my recent AI and Machine Learning endeavors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`glass rounded-2xl p-6 flex flex-col h-full border hover:-translate-y-2 transition-transform duration-300 ${
                project.highlight ? 'border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.1)]' : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg text-blue-600 dark:text-blue-400">
                  <CodeSquare size={24} />
                </div>
                <div className="flex space-x-2">
                  <a href="https://github.com/MohanKumar2002" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900 dark:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-slate-500 hover:text-slate-900 dark:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="mb-2">
                <span className="text-xs font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-600/10 dark:bg-cyan-400/10 px-2 py-1 rounded-md">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-slate-200/80 dark:bg-slate-800/80 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Mentorship Projects Section */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mt-32 mb-12 text-center"
        >
           <div className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-2">Freelance Technical Consulting</div>
           <h2 className="text-3xl md:text-5xl font-bold">21+ Research Implementations</h2>
           <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto flex flex-col items-center">
             Acted as a Freelance Technical Consultant engineering tailored Machine Learning pipelines and AI architectures for advanced academic research (PhD, M.Tech, and UG levels).
           </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
           
           {/* M.Tech Projects */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="glass p-8 rounded-2xl border-t-4 border-t-purple-500 border border-slate-200 dark:border-slate-800 flex flex-col h-full"
           >
             <div className="flex items-center justify-between mb-4">
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">M.Tech</h3>
               <span className="bg-purple-600/20 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 font-bold px-3 py-1 rounded-full text-sm shrink-0">5 Projects</span>
             </div>
             <p className="text-xs text-purple-800 dark:text-purple-300/80 mb-6 font-medium leading-relaxed">
               Provided end-to-end deliverables including full project source code, technical documentation, and IEEE-formatted research papers.
             </p>
             <ul className="space-y-4">
               <li className="text-sm text-slate-900 dark:text-slate-300 flex items-start leading-relaxed"><span className="text-purple-600 dark:text-purple-500 mr-2 mt-0.5">•</span> Personalized Learning Path Recommender System (ML)</li>
               <li className="text-sm text-slate-900 dark:text-slate-300 flex items-start leading-relaxed"><span className="text-purple-600 dark:text-purple-500 mr-2 mt-0.5">•</span> Multimodal Mental Health Monitoring for Stress Detection</li>
               <li className="text-sm text-slate-900 dark:text-slate-300 flex items-start leading-relaxed"><span className="text-purple-600 dark:text-purple-500 mr-2 mt-0.5">•</span> Route Optimization for Delivery Services (CNN)</li>
               <li className="text-sm text-slate-900 dark:text-slate-300 flex items-start leading-relaxed"><span className="text-purple-600 dark:text-purple-500 mr-2 mt-0.5">•</span> AI-Powered Predictive Maintenance for Smart Industries</li>
               <li className="text-sm text-slate-900 dark:text-slate-300 flex items-start leading-relaxed"><span className="text-purple-600 dark:text-purple-500 mr-2 mt-0.5">•</span> AI-Powered Signal Denoising for Wireless Systems</li>
             </ul>
           </motion.div>

           {/* PhD Project */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="glass p-8 rounded-2xl border-t-4 border-t-gold border border-slate-200 dark:border-slate-800 lg:order-last flex flex-col h-full"
           >
             <div className="flex items-center justify-between mb-4">
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">PhD</h3>
               <span className="bg-gold/20 text-gold font-bold px-3 py-1 rounded-full text-sm shrink-0">1 Project</span>
             </div>
             <p className="text-xs text-amber-700 dark:text-gold/80 mb-6 font-medium leading-relaxed">
               Provided comprehensive architectural engineering and codebase implementation for the researcher's published paper.
             </p>
             <div className="bg-slate-100 dark:bg-slate-900/50 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white mb-3 text-lg leading-tight">AI Smart File Compressor for Paper Submission</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  Helps researchers compress large research papers, figures, and supplementary files while maintaining quality so they can meet journal or conference submission size limits.
                </p>
             </div>
           </motion.div>

           {/* UG Projects */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="glass p-8 rounded-2xl border-t-4 border-t-cyan-500 border border-slate-200 dark:border-slate-800 bg-gradient-to-b from-cyan-500/5 to-transparent flex flex-col h-full"
           >
             <div className="flex items-center justify-between mb-8">
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">UG</h3>
               <span className="bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-bold px-3 py-1 rounded-full text-sm shrink-0">15 Projects</span>
             </div>
             
             <div className="grid grid-cols-1 gap-2 h-72 max-h-72 overflow-y-auto pr-2 custom-scrollbar border border-slate-200 dark:border-slate-800/50 rounded-lg p-2 bg-slate-50 dark:bg-slate-950/30">
               {[
                 "Diabetes Prediction using ML",
                 "Fake News Detection using ML",
                 "Review Sentiment Analysis",
                 "Sentiment Analysis Project",
                 "Face Recognition System",
                 "Handwritten Text Extraction System",
                 "Drowsiness Detection System (Deep Learning)",
                 "AI-Powered Attendance (Face Rec + PostgreSQL)",
                 "Text Generation Chatbot",
                 "My Virtual Assistant",
                 "CubeCorpSolutions Chatbot",
                 "Document-Genie (RAG Framework)",
                 "Resume Filtering Chatbot",
                 "Document Summarization AI",
                 "RAG-Based Chatbot"
               ].map((proj, i) => (
                 <div key={i} className="text-sm text-slate-900 dark:text-slate-300 py-2.5 px-2 hover:bg-slate-200 dark:bg-slate-200/50 dark:bg-slate-800/50 rounded transition-colors border-b border-slate-200 dark:border-slate-800/50 last:border-0 flex items-start leading-snug font-medium dark:font-light">
                   <span className="text-cyan-600 dark:text-cyan-500 mr-2 mt-0.5 text-[10px]">◆</span> {proj}
                 </div>
               ))}
             </div>
           </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
