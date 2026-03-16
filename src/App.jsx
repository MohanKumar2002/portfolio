import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = React.useState('light');

  React.useEffect(() => {
    // Force light mode requested by user
    document.documentElement.classList.remove('dark');
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-slate-200 selection:bg-gold/30 transition-colors duration-1000">
      <div className="bg-noise dark:opacity-5 opacity-10"></div>
      
      {/* Dynamic Background Animation Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-1000">
        {theme === 'light' ? (
          // Daytime (Sunlight) Theme
          <div className="absolute inset-0 opacity-100">
            <div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-yellow-300/30 blur-[150px] rounded-full animate-pulse-slow mix-blend-multiply"></div>
            <div className="absolute top-10 left-[-10%] w-[60vw] h-[60vw] bg-amber-500/20 blur-[120px] rounded-full animate-float mix-blend-multiply"></div>
          </div>
        ) : (
          // Nighttime (Dark/Star) Theme
          <div className="absolute inset-0 opacity-100">
            <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-indigo-900/40 blur-[150px] rounded-full animate-pulse-slow"></div>
            <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-blue-900/30 blur-[120px] rounded-full animate-float"></div>
          </div>
        )}
      </div>

      <Navbar />
      <main className="relative z-10 transition-all duration-1000">
        <Hero theme={theme} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
