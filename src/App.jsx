// App.jsx
import { useEffect } from "react";
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

// Pages projets
import BdeInfo from "./pages/projects/BdeInfo";
import AppSport from "./pages/projects/AppSport";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Nicolas Chanteux | Portfolio";

    // Scroll fluide pour les ancres (seulement sur la home)
    if (location.pathname === "/") {
      // Gérer les ancres d'URL directes
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href");
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth"
            });
          }
        });
      });

      // Gérer la navigation depuis une autre page avec state
      if (location.state && location.state.scrollTo) {
        const section = location.state.scrollTo;
        const targetElement = document.getElementById(section);
        
        if (targetElement) {
          // Petit délai pour s'assurer que la page est chargée
          setTimeout(() => {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth"
            });
          }, 100);
        }
      }
    }
  }, [location]);

  return (
    <div className="bg-gray-100 text-gray-900">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Projects />
                <Skills />
                <About />
                <Contact />
              </>
            }
          />
          {/* Pages de projets */}
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
