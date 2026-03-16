import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Download, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/80/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-gold uppercase tracking-wider mb-2">Get In Touch</div>
          <h2 className="text-3xl md:text-5xl font-bold">Ready to Innovate?</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-slate-100 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-2xl glass">
          
          <div className="lg:w-1/3">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Let's talk AI.</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-sm">
              Whether you need to build advanced ML pipelines, deploy generative RAG architecture, or want to collaborate on research, I'm just a message away.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-slate-200 dark:bg-slate-200/80 dark:bg-slate-800/80 rounded-xl text-blue-600 dark:text-blue-400 border border-slate-300 dark:border-slate-700">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">Email</div>
                  <a href="mailto:mohanmohanmk684@gmail.com" className="text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:text-blue-400 transition-colors block max-w-[200px] truncate sm:max-w-none">mohanmohanmk684@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-slate-200 dark:bg-slate-200/80 dark:bg-slate-800/80 rounded-xl text-cyan-600 dark:text-cyan-400 border border-slate-300 dark:border-slate-700">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">Location</div>
                  <span className="text-slate-800 dark:text-slate-200">Namakkal, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mb-10">
              <a href="https://github.com/MohanKumar2002" target="_blank" rel="noreferrer" className="p-3 bg-slate-200 dark:bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 rounded-full hover:bg-gold/80 hover:text-slate-900 dark:text-white transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mohan-kumar-subramanian-a46a77226" target="_blank" rel="noreferrer" className="p-3 bg-slate-200 dark:bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 rounded-full hover:bg-gold/80 hover:text-slate-900 dark:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://moh-ai-tech.vercel.app" target="_blank" rel="noreferrer" className="p-3 bg-slate-200 dark:bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 rounded-full hover:bg-gold/80 hover:text-slate-900 dark:text-white transition-all text-sm font-bold flex items-center justify-center">
                W
              </a>
            </div>

            <a
              href="/Profile (3).pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-slate-900 dark:text-white font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all hover:scale-[1.02]"
            >
              <Download size={20} className="mr-2" /> Download Resume
            </a>
          </div>

          <div className="lg:w-2/3">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent/50 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent/50 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-transparent/50 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-transparent/50 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="button"
                className="inline-flex items-center px-8 py-3 rounded-xl bg-gold/80 text-slate-900 dark:text-white font-medium hover:bg-blue-500 transition-colors focus:ring-4 focus:ring-blue-500/50"
              >
                Send Message <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
