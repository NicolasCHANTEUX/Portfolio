import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  // Simplifié: pas de préchargement qui pourrait causer des erreurs
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="./assets/profile.jpg" 
            alt="Nicolas Chanteux"
            className="w-60 h-60 object-cover rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/150?text=NC";
              e.target.onerror = null;
            }}
          />
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Nicolas CHANTEUX
        </motion.h1>
        
        <motion.h2
          className="text-xl md:text-2xl text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Étudiant en informatique - Full Stack – passionné par le web
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex justify-center space-x-4"
        >
          <a 
            href="#projects" 
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-md"
          >
            Voir mes projets
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-50 transition-colors border border-blue-600 shadow-md"
          >
            Me contacter
          </a>
        </motion.div>
      </div>
    </section>
  );
}