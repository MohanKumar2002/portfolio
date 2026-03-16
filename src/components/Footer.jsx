import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 py-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold tracking-tighter">
            <span className="text-gradient">Mohan Kumar</span> <span className="text-slate-900 dark:text-white">S</span>
          </span>
          <p className="text-slate-500 text-sm mt-1">
            Building custom AI-powered tools & automation to scale faster.
          </p>
        </div>
        
        <div className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} Mohan Kumar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
