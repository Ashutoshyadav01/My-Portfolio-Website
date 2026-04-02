import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import IntroScreen from "./components/IntroScreen";
import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import ResumePage from "./components/sections/ResumePage";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-purple-500/30 selection:text-purple-200">
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroScreen key="intro" onEnter={() => setShowIntro(false)} />
        ) : (
          <div key="portfolio" className="relative">
            <Navbar />
            <Routes>
              <Route path="/" element={
                <main className="space-y-24 pb-24">
                   <Home />
                   <About />
                   <Experience />
                   <Education />
                   <Projects />
                   <Contact />
                </main>
              } />
              <Route path="/resume" element={<ResumePage />} />
            </Routes>
            
            <footer className="py-16 text-center text-zinc-600 text-sm border-t border-zinc-900 mx-auto max-w-7xl">
              <p>&copy; {new Date().getFullYear()} Ashutosh Kumar. All rights reserved.</p>
              <p className="mt-2 text-zinc-700">Built with React, Tailwind CSS, and Framer Motion.</p>
            </footer>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;