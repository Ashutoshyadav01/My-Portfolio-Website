import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sectionPositions = navItems.map((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          return { id: item.id, offsetTop: element.offsetTop, offsetHeight: element.offsetHeight };
        }
        return null;
      }).filter(Boolean);

      const currentPosition = window.scrollY + 150;
      const currentSection = sectionPositions.find(
        (section) => currentPosition >= section.offsetTop && currentPosition < section.offsetTop + section.offsetHeight
      );

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const scrollToSection = (id) => {
    if (pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || pathname !== "/" ? "bg-black/80 backdrop-blur-md py-4 shadow-lg border-b border-purple-900/30" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          AK.
        </motion.div>

        <div className="flex items-center gap-12">
          <ul className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm uppercase tracking-widest font-medium transition-colors hover:text-purple-400 ${
                    activeSection === item.id ? "text-purple-400" : "text-zinc-400"
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-purple-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <Link 
            to="/resume"
            className="hidden md:block px-6 py-2.5 rounded-xl border border-purple-500/50 text-purple-400 text-sm font-bold tracking-widest uppercase hover:bg-purple-500 hover:text-white transition-all shadow-[0_5px_15px_rgba(168,85,247,0.2)] active:scale-95"
          >
            Resume
          </Link>
        </div>

        {/* Mobile Menu Icon (Simplified) */}
        <div className="md:hidden text-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
