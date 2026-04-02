import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLottie } from "lottie-react";

/**
 * Hosting Lottie locally to avoid 403 Forbidden / Access Denied errors from external CDNs.
 * File is located in /public/character.json
 */
const LOTTIE_URL = "/character.json";

const StarField = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const TypewriterText = ({ text, onComplete }) => {
  const [displayText, setDisplayText] = useState("");
  const completedRef = useRef(false);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        if (!completedRef.current) {
          completedRef.current = true;
          onComplete();
        }
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [text, onComplete]);

  return (
    <span className="inline-block relative">
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[4px] h-[0.9em] bg-purple-500 ml-2"
      />
    </span>
  );
};

const LottieAnimation = ({ animationData }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    setMousePos({ x, y });
  };

  const options = {
    animationData,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <motion.div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      animate={{ rotateY: mousePos.x, rotateX: -mousePos.y }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="w-full h-full pointer-events-none perspective-1000"
    >
      {View}
    </motion.div>
  );
};

const IntroScreen = ({ onEnter }) => {
  const [stage, setStage] = useState("loading"); // "loading" | "ready"
  const [animationData, setAnimationData] = useState(null);
  const [isLottieError, setIsLottieError] = useState(false);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    // Loading from local public folder
    fetch(LOTTIE_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setAnimationData(data);
      })
      .catch((err) => {
        console.error("Lottie fetch error:", err);
        setIsLottieError(true);
      });
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <StarField />
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black opacity-90" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-8 md:px-20 gap-16">
          <div className="flex-1 flex flex-col items-start justify-center min-h-[300px] order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white mb-10 leading-tight tracking-tighter"
              style={{ textShadow: "0 0 50px rgba(168, 85, 247, 0.6)" }}
            >
              <div className="min-h-[1.2em]">
                <TypewriterText text="I am Ashutosh Kumar" onComplete={() => setStage("ready")} />
              </div>
            </motion.div>

            {stage === "ready" && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0px 0px 40px rgba(168, 85, 247, 0.8)",
                }}
                whileTap={{ scale: 0.9 }}
                onClick={onEnter}
                className="px-14 py-5 rounded-2xl bg-purple-600/30 backdrop-blur-2xl text-white font-black text-2xl transition-all border border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)] group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-4 uppercase tracking-widest">
                  Enter Portfolio
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
              </motion.button>
            )}
          </div>

          <div className="flex-1 flex flex-col items-center justify-center order-1 md:order-2">
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.7 }}
              animate={ (animationData || isLottieError) ? { y: 0, opacity: 1, scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 50, damping: 10 }}
              className="relative z-10 w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] flex-shrink-0 drop-shadow-[0_0_60px_rgba(168,85,247,0.4)]"
            >
              {animationData ? (
                <LottieAnimation animationData={animationData} />
              ) : !isLottieError ? (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-20 h-20 border-8 border-purple-500 border-t-transparent rounded-full animate-spin" />
                </div>
              ) : (
                <div className="w-64 h-64 border-4 border-dashed border-purple-500/50 rounded-full animate-spin-slow flex items-center justify-center">
                   <div className="w-32 h-32 bg-purple-600/20 rounded-full blur-2xl" />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroScreen;