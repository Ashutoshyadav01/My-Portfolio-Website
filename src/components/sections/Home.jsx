import React from "react";
import { motion } from "framer-motion";
import Section from "../Section";

const Home = () => {
  return (
    <Section id="home" title="Home" className="relative pt-32 pb-20 overflow-hidden">

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Left Side: Professional Bio */}
        <div className="flex-1 flex flex-col gap-6 max-w-3xl order-2 lg:order-1">
          <h3 className="text-purple-400 text-lg md:text-xl font-mono tracking-widest uppercase">
            Hi, my name is
          </h3>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none bg-gradient-to-r from-zinc-100 via-white to-zinc-400 bg-clip-text text-transparent">
            Ashutosh Kumar.
          </h1>
          <p className="mt-8 text-zinc-400 text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-2xl font-light">
            Full-Stack Web Developer specialized in building exceptional digital experiences. 
            Currently focused on creating accessible, human-centered products.
          </p>
          
          <div className="mt-12 flex flex-wrap gap-6">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold text-lg transition-all shadow-[0_10px_30px_rgba(168,85,247,0.3)] hover:shadow-[0_15px_40px_rgba(168,85,247,0.4)] hover:-translate-y-1 active:scale-95"
            >
              Check out my work!
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-zinc-800 hover:border-purple-500/50 text-zinc-300 hover:text-purple-400 rounded-xl font-bold text-lg transition-all hover:bg-purple-500/5"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center order-1 lg:order-2">
          <motion.div 
            whileHover={{ 
              scale: 1.05, 
              rotateY: 15, 
              rotateX: -5,
              perspective: 1000 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-[300px] h-[350px] md:w-[400px] md:h-[450px] lg:w-[500px] lg:h-[550px] rounded-3xl overflow-hidden border border-purple-500/20 shadow-[0_0_50px_rgba(168,85,247,0.15)]"
          >
            {/* Ambient Purple Glow */}
            <div className="absolute inset-0 bg-purple-600/5 z-0" />
            
            <img 
              src="/ashutosh1.jpg" 
              alt="Ashutosh Kumar Professional" 
              className="w-full h-full object-cover relative z-10"
              style={{
                filter: "brightness(1.05) contrast(1.05)",
              }}
            />
            
            {/* Subtle Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-20 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Home;

