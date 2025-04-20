import React, { useState, useEffect } from "react";
import { MotionDiv as motion } from "../utils/AnimationFallback";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Vérifie si l'utilisateur est sur la page d'accueil
  const isHomePage = location.pathname === "/" || location.pathname === "";
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const navClasses = `
    sticky top-0 z-50 w-full px-6 py-4
    ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'} 
    transition-all duration-300
  `;
  
  return (
    <nav className={navClasses}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold cursor-pointer"
          >
            Nicolas CHANTEUX
          </motion.div>
        </Link>
        
        {/* Desktop Navigation */}
        <motion.ul 
          className="hidden md:flex gap-6 text-sm font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {isHomePage ? (
            <>
              <li><a href="#home" className="hover:text-blue-500 transition-colors">Accueil</a></li>
              <li><a href="#projects" className="hover:text-blue-500 transition-colors">Projets</a></li>
              <li><a href="#skills" className="hover:text-blue-500 transition-colors">Compétences</a></li>
              <li><a href="#about" className="hover:text-blue-500 transition-colors">À propos</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </>
          ) : (
            <>
              <li><Link to="/" className="hover:text-blue-500 transition-colors">Accueil</Link></li>
              <li><Link to="/" state={{ scrollTo: "projects" }} className="hover:text-blue-500 transition-colors">Projets</Link></li>
              <li><Link to="/" state={{ scrollTo: "skills" }} className="hover:text-blue-500 transition-colors">Compétences</Link></li>
              <li><Link to="/" state={{ scrollTo: "about" }} className="hover:text-blue-500 transition-colors">À propos</Link></li>
              <li><Link to="/" state={{ scrollTo: "contact" }} className="hover:text-blue-500 transition-colors">Contact</Link></li>
            </>
          )}
        </motion.ul>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center p-2 rounded-md hover:bg-gray-100 focus:outline-none"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden mt-4 py-4 bg-white border-t"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-4 px-6">
            {isHomePage ? (
              <>
                <li><a href="#home" className="hover:text-blue-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Accueil</a></li>
                <li><a href="#projects" className="hover:text-blue-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Projets</a></li>
                <li><a href="#skills" className="hover:text-blue-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Compétences</a></li>
                <li><a href="#about" className="hover:text-blue-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>À propos</a></li>
                <li><a href="#contact" className="hover:text-blue-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
              </>
            ) : (
              <>
                <li><Link to="/" className="hover:text-blue-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Accueil</Link></li>
                <li><Link to="/" state={{ scrollTo: "projects" }} className="hover:text-blue-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Projets</Link></li>
                <li><Link to="/" state={{ scrollTo: "skills" }} className="hover:text-blue-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Compétences</Link></li>
                <li><Link to="/" state={{ scrollTo: "about" }} className="hover:text-blue-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>À propos</Link></li>
                <li><Link to="/" state={{ scrollTo: "contact" }} className="hover:text-blue-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
              </>
            )}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}