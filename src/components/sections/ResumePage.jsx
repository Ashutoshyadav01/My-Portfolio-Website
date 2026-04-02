import React from "react";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";

const ResumePage = () => {
  const resumeUrl = "/resume.pdf";
  const resumeFileName = "Ashutosh_Kumar_Resume.pdf";

  return (
    <section className="min-h-screen pt-32 pb-16 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            My Resume
          </h1>
          <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-full aspect-[1/1.414] md:aspect-[1/1.3] bg-zinc-900/50 rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.1)] group"
        >
          <iframe
            src={`${resumeUrl}#toolbar=0`}
            className="w-full h-full border-none"
            title="Resume Preview"
          />
          
          {/* Subtle overlay glow */}
          <div className="absolute inset-0 pointer-events-none border border-purple-500/10 rounded-2xl"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href={resumeUrl}
            download={resumeFileName}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all shadow-[0_10px_20px_rgba(168,85,247,0.3)] hover:shadow-[0_15px_25px_rgba(168,85,247,0.4)] active:scale-95 group"
          >
            <HiDownload className="text-xl group-hover:animate-bounce" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumePage;
