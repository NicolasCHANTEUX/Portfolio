// src/pages/projects/Psyche.jsx
import React from "react";
import { MotionDiv as motion } from "../../utils/AnimationFallback";
import BackToHome from "../../components/BackToHome";

export default function Psyche() {
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
          L'âge de Psyché
        </motion.h1>

        <motion.p
          className="text-gray-600 mb-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Adaptation numérique d'un jeu de société avec une architecture MVC et génération dynamique de cartes.
        </motion.p>

        <motion.img 
          src="/assets/age_psyché/img_app_age_psyche.png"
          alt="Capture d'écran du jeu L'âge de Psyché"
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
              "L'âge de Psyché" est une adaptation numérique d'un jeu de société original. Ce projet réalisé en équipe
              pendant ma formation consistait à transformer un jeu de plateau en une application Java entièrement 
              interactive. Le jeu met en scène différents personnages évoluant sur une carte générée dynamiquement, 
              où les joueurs doivent accomplir des quêtes et collecter des ressources pour progresser.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Fonctionnalités principales</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Génération procédurale de la carte de jeu à chaque nouvelle partie</li>
              <li>Système de tour par tour avec différentes actions possibles</li>
              <li>Gestion de ressources et d'inventaire pour chaque joueur</li>
              <li>Système de quêtes avec progression et récompenses</li>
              <li>Intelligence artificielle pour les personnages non-joueurs (PNJ)</li>
              <li>Interface graphique responsive avec animations</li>
              <li>Système de sauvegarde et chargement des parties</li>
              <li>Mode multijoueur local (jusqu'à 4 joueurs)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Mon rôle</h2>
            <p className="text-gray-700">
              Au sein de l'équipe de développement, j'ai principalement travaillé sur :
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>L'architecture MVC (Modèle-Vue-Contrôleur) du projet</li>
              <li>L'algorithme de génération procédurale de la carte</li>
              <li>Le système de déplacement des personnages</li>
              <li>L'implémentation des règles du jeu dans le moteur de jeu</li>
              <li>La collaboration avec l'équipe via Git et les réunions hebdomadaires</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Stack technique</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Java</li>
              <li>Swing pour l'interface graphique</li>
              <li>Architecture MVC</li>
              <li>Algorithmes de génération procédurale</li>
              <li>GitLab pour la gestion de version</li>
              <li>JUnit pour les tests unitaires</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Défis et solutions</h2>
            <p className="text-gray-700">
              Le principal défi technique de ce projet a été la création d'un algorithme de génération de carte
              qui soit à la fois aléatoire et équilibré pour le gameplay. Nous avons résolu ce problème en 
              implémentant un système basé sur les automates cellulaires, combiné à des règles spécifiques pour 
              garantir l'accessibilité de toutes les zones. Un autre défi était la synchronisation des actions 
              entre les différents joueurs, que nous avons résolu en implémentant un pattern Observer pour maintenir 
              la cohérence de l'état du jeu.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Leçons apprises</h2>
            <p className="text-gray-700">
              Ce projet m'a permis d'approfondir ma compréhension de l'architecture MVC et de l'importance d'une 
              conception solide avant l'implémentation. J'ai également amélioré mes compétences en matière de 
              travail d'équipe et de gestion de code partagé grâce à l'utilisation intensive de Git. La phase 
              de test a été particulièrement enrichissante, car elle nous a permis d'identifier et de corriger des 
              bugs complexes liés aux interactions entre les différents composants du jeu.
            </p>
          </div>

          <div className="mt-6 flex gap-4">
            <a 
              href="https://github.com/A1exPrdgc/SAE-2.01---application-final" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded text-sm font-medium"
            >
              <span role="img" aria-label="Lien">🔗</span> Voir le code sur GitHub
            </a>
            <button 
              onClick={() => alert("Téléchargement non disponible pour le moment")}
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium"
            >
              <span role="img" aria-label="Télécharger">📥</span> Télécharger le jeu
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
