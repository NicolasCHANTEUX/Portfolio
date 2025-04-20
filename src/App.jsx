// App.jsx
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Psyche from "./pages/projects/Psyche";
import QcmBuilder from "./pages/projects/QcmBuilder";
import MuscuWeb from "./pages/projects/MuscuWeb";
import BdeInfo from "./pages/projects/BdeInfo";
import AppSport from "./pages/projects/AppSport";

// Composant HomePage pour éviter le nesting direct des composants dans Routes
const HomePage = () => (
  <>
    <Home />
    <Projects />
    <Skills />
    <About />
    <Contact />
  </>
);

export default function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Nicolas Chanteux | Portfolio";

    // Scroll fluide pour les ancres (seulement sur la home)
    if (location.pathname === "/" || location.pathname === "") {
      // Gérer les ancres d'URL directes
      const anchorLinks = document.querySelectorAll('a[href^="#"]');
      
      const handleClick = function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth"
          });
        }
      };
      
      anchorLinks.forEach(anchor => {
        anchor.addEventListener("click", handleClick);
      });
      
      // Nettoyage pour éviter les memory leaks
      return () => {
        anchorLinks.forEach(anchor => {
          anchor.removeEventListener("click", handleClick);
        });
      };
    }
  }, [location]);

  return (
    <div className="bg-gray-100 text-gray-900">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/bde-info" element={<BdeInfo />} />
          <Route path="/projects/app-sport" element={<AppSport />} />
          <Route path="/projects/psyche" element={<Psyche />} />
          <Route path="/projects/qcm-builder" element={<QcmBuilder />} />
          <Route path="/projects/muscu-web" element={<MuscuWeb />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
