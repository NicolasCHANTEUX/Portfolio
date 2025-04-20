// src/pages/projects/QcmBuilder.jsx
import React from "react";
import { MotionDiv as motion } from "../../utils/AnimationFallback";
import BackToHome from "../../components/BackToHome";

export default function QcmBuilder() {
  return (
    <section className="min-h-screen py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <BackToHome />
        <motion.h1 
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          QCM Builder
        </motion.h1>

        <motion.p
          className="text-gray-600 mb-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Application web de création et de gestion de questionnaires à choix multiples pour l'enseignement.
        </motion.p>

        <motion.img 
          src="/assets/app_qcm_builder/img_app_qcm_builder.png"
          alt="Capture d'écran de l'application QCM Builder"
          className="rounded-lg shadow mb-10 w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/900x400?text=Image+non+trouvée";
            e.target.onerror = null;
          }}
        />

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-2">Description du projet</h2>
            <p className="text-gray-700">
              QCM Builder est une application web conçue pour les enseignants, leur permettant de créer, 
              gérer et distribuer facilement des questionnaires à choix multiples à leurs étudiants. 
              Le projet a été développé en utilisant le stack MERN (MongoDB, Express.js, React, Node.js) 
              pour offrir une expérience utilisateur fluide et réactive. L'application propose différents 
              types de questions, des options de notation automatique, et des analyses détaillées des résultats.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Fonctionnalités principales</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Création de QCM avec différents types de questions (choix unique, choix multiples, vrai/faux)</li>
              <li>Éditeur visuel avec aperçu en temps réel</li>
              <li>Importation/exportation des questionnaires au format CSV et PDF</li>
              <li>Partage de questionnaires via URL ou code QR</li>
              <li>Tableau de bord analytique pour visualiser les résultats et performances</li>
              <li>Correction automatique et feedback instantané</li>
              <li>Gestion des groupes d'étudiants et des classes</li>
              <li>Mode examen avec contraintes temporelles et de navigation</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Développement</h2>
            <p className="text-gray-700">
              Ce projet a été développé suivant une méthodologie Agile avec des sprints de deux semaines. 
              L'architecture est basée sur une API RESTful développée avec Node.js et Express.js, 
              communiquant avec une interface utilisateur React. La base de données MongoDB stocke les 
              questionnaires, les résultats et les informations utilisateurs. Les aspects de sécurité ont 
              été soigneusement considérés, notamment pour l'authentification (JWT) et la protection des 
              données sensibles comme les résultats des examens.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Stack technique</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Frontend: React, Redux, Material-UI, ChartJS</li>
              <li>Backend: Node.js, Express.js</li>
              <li>Base de données: MongoDB avec Mongoose</li>
              <li>Authentification: JSON Web Tokens</li>
              <li>Tests: Jest, React Testing Library</li>
              <li>Déploiement: Docker, AWS</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Défis et solutions</h2>
            <p className="text-gray-700">
              L'un des principaux défis était de concevoir un éditeur de questionnaires qui soit à la fois 
              simple à utiliser pour les débutants mais suffisamment puissant pour les utilisateurs avancés. 
              Nous avons opté pour une approche modulaire avec des modèles prédéfinis et une personnalisation 
              progressive. Un autre défi était d'assurer l'intégrité des examens en ligne, ce que nous avons 
              résolu en implémentant un système de surveillance avec détection de changement d'onglet/fenêtre 
              et des questions générées aléatoirement à partir d'une banque de questions.
            </p>
          </div>

          <div className="mt-6 flex gap-4">
            <a 
              href="https://github.com/NicolasCHANTEUX/qcm-builder" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded text-sm font-medium"
            >
              🔗 Voir le code sur GitHub
            </a>
            <button 
              onClick={() => alert("Démonstration non disponible pour le moment")}
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium"
            >
              🔍 Voir la démo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
