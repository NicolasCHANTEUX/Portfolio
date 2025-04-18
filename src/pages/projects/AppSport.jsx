// src/pages/projects/AppSport.jsx
import { motion } from "framer-motion";
import BackToHome from "../../components/BackToHome";

export default function AppSport() {
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
          Application Sportive
        </motion.h1>

        <motion.p
          className="text-gray-600 mb-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Application Java de suivi d'entraînements sportifs avec interface graphique et base de données.
        </motion.p>

        <motion.img 
          src="/assets/app_muscu/img_app_muscu.png"
          alt="Capture d'écran de l'application sportive"
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
              Cette application Java a été conçue pour aider les sportifs à suivre et gérer leurs entraînements 
              de musculation. Elle permet aux utilisateurs d'enregistrer leurs séances, de suivre leur progression 
              sur différents exercices, et de visualiser leurs performances au fil du temps. L'application utilise 
              une architecture structurée avec une interface graphique JavaFX et une base de données PostgreSQL 
              pour stocker les données des utilisateurs.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Fonctionnalités principales</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Création et gestion de profils utilisateurs</li>
              <li>Bibliothèque d'exercices prédéfinis avec descriptions et illustrations</li>
              <li>Création de programmes d'entraînement personnalisés</li>
              <li>Enregistrement des séances avec poids, répétitions et sensations</li>
              <li>Visualisation de la progression avec graphiques</li>
              <li>Calcul de statistiques (charges maximales, volume d'entraînement)</li>
              <li>Exportation des données au format CSV</li>
              <li>Système de rappels et de planification</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Développement</h2>
            <p className="text-gray-700">
              Ce projet a été développé en utilisant Java 11 avec JavaFX pour l'interface graphique. 
              J'ai adopté une architecture MVC (Modèle-Vue-Contrôleur) pour séparer clairement les différentes 
              responsabilités du code. La persistance des données est assurée par PostgreSQL, avec JDBC pour 
              la communication entre l'application et la base de données. Le projet a été géré avec Maven pour 
              faciliter la gestion des dépendances et du build.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Stack technique</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Java 11</li>
              <li>JavaFX</li>
              <li>PostgreSQL</li>
              <li>JDBC</li>
              <li>Maven</li>
              <li>Architecture MVC</li>
              <li>JUnit pour les tests</li>
              <li>Git pour le versioning</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Défis et solutions</h2>
            <p className="text-gray-700">
              Le principal défi de ce projet a été la conception d'un modèle de données flexible pouvant s'adapter 
              à différents types d'exercices et de méthodes d'entraînement. J'ai résolu ce problème en créant 
              un système modulaire où les exercices peuvent avoir différents paramètres et métriques. Un autre défi 
              était la création d'une interface intuitive pour la saisie rapide des données pendant un entraînement. 
              Pour cela, j'ai implémenté un système de formulaires dynamiques et de raccourcis qui minimisent 
              le temps nécessaire pour enregistrer une série.
            </p>
          </div>

          <div className="mt-6 flex gap-4">
            <a 
              href="https://github.com/NicolasCHANTEUX/MusculationApp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded text-sm font-medium"
            >
              🔗 Voir le code sur GitHub
            </a>
            <button 
              onClick={() => alert("Téléchargement non disponible pour le moment")}
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium"
            >
              📥 Télécharger l'application
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
