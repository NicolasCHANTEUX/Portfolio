import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BdeInfo from "./pages/projects/BdeInfo";
import AppSport from "./pages/projects/AppSport";
import Psyche from "./pages/projects/Psyche";
import MuscuWeb from "./pages/projects/MuscuWeb";
import QcmBuilder from "./pages/projects/QcmBuilder";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* Pages projet spécifiques */}
      <Route path="/projects/bde-info" element={<BdeInfo />} />
      <Route path="/projects/app-sport" element={<AppSport />} />
      <Route path="/projects/psyche" element={<Psyche />} />
      <Route path="/projects/muscu-web" element={<MuscuWeb />} />
      <Route path="/projects/qcm-builder" element={<QcmBuilder />} />
    </Routes>
  );
}
