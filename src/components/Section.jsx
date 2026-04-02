import React from "react";
import { motion } from "framer-motion";

const Section = ({ id, title, children, className = "" }) => {
  return (
    <section 
      id={id} 
      className={`min-h-screen py-24 px-6 max-w-7xl mx-auto flex flex-col justify-center ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4">
          <span className="text-purple-500 font-mono text-xl">#</span> {title}
          <div className="flex-1 h-[1px] bg-zinc-800 ml-4 hidden md:block"></div>
        </h2>
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
