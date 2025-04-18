// src/pages/projects/MuscuWeb.jsx
import { motion } from "framer-motion";
import BackToHome from "../../components/BackToHome";

export default function MuscuWeb() {
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
          Site Web de Musculation
        </motion.h1>

        <motion.p
          className="text-gray-600 mb-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Site web éducatif sur la musculation avec des guides d'exercices, des plans d'entraînement et des conseils nutritionnels.
        </motion.p>

        <motion.img 
          src="/assets/site_muscu/img_site_muscu.png"
          alt="Capture d'écran du site web de musculation"
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
              Ce site web responsive est une ressource complète pour les personnes intéressées par la musculation,
              qu'elles soient débutantes ou expérimentées. Il propose un contenu éducatif détaillé sur différents
              aspects de l'entraînement en musculation, de la nutrition sportive et de la récupération. J'ai conçu
              ce site pour partager mes connaissances en musculation et aider les utilisateurs à atteindre leurs
              objectifs de fitness de manière sécuritaire et efficace.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Fonctionnalités principales</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Bibliothèque d'exercices avec instructions détaillées et vidéos démonstratives</li>
              <li>Plans d'entraînement pour différents niveaux et objectifs</li>
              <li>Calculateurs (IMC, protéines quotidiennes, TDEE, etc.)</li>
              <li>Section nutrition avec guides et recettes adaptées</li>
              <li>Blog avec articles sur les dernières recherches scientifiques</li>
              <li>Forum communautaire pour échanger conseils et expériences</li>
              <li>Système d'authentification des utilisateurs</li>
              <li>Fonctionnalité de suivi de progression personnelle</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Stack technique</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>HTML5 & CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js pour l'interface utilisateur</li>
              <li>Node.js et Express pour le backend</li>
              <li>MongoDB pour la base de données</li>
              <li>Authentication JWT</li>
              <li>Responsive design avec media queries</li>
              <li>Animations avec CSS et Framer Motion</li>
              <li>Déployé sur Heroku</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Défis et solutions</h2>
            <p className="text-gray-700">
              L'un des principaux défis de ce projet était de présenter une grande quantité d'informations techniques 
              de façon claire et accessible pour différents niveaux de connaissances. J'ai résolu ce problème en créant 
              une architecture de contenu structurée et en développant un système de filtrage qui permet aux utilisateurs
              de trouver facilement des informations pertinentes pour leur niveau et leurs objectifs. 
            </p>
            <p className="text-gray-700 mt-2">
              Un autre défi était de créer des visualisations interactives pour expliquer les mouvements corrects 
              pendant les exercices. J'ai utilisé des animations SVG et Canvas pour créer des démonstrations interactives 
              qui mettent en évidence les groupes musculaires travaillés et les points techniques importants.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Optimisations et performances</h2>
            <p className="text-gray-700">
              Pour garantir des temps de chargement rapides malgré le contenu riche en médias, j'ai implémenté:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Lazy loading pour les images et vidéos</li>
              <li>Code splitting et chargement progressif des composants React</li>
              <li>Optimisation des images avec compression et formats modernes (WebP)</li>
              <li>Mise en cache côté client et CDN pour les ressources statiques</li>
              <li>Optimisation des requêtes à la base de données avec indexation</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Évolutivité et perspectives futures</h2>
            <p className="text-gray-700">
              Le site a été conçu avec une architecture évolutive permettant d'ajouter facilement de nouvelles 
              fonctionnalités. Les prochaines étapes de développement incluent:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Une application mobile complémentaire</li>
              <li>L'intégration de trackers d'activité et montres connectées</li>
              <li>Un système de coaching personnalisé avec IA</li>
              <li>Des fonctionnalités de réalité augmentée pour démontrer les exercices</li>
              <li>Une section e-commerce pour produits et équipements recommandés</li>
            </ul>
          </div>

          <div className="mt-6 flex gap-4">
            <a 
              href="https://github.com/NicolasCHANTEUX/Site_Web_Musculation" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded text-sm font-medium"
            >
              🔗 Voir le code sur GitHub
            </a>
            <a 
              href="https://app-dd5685c1-1c4d-45ea-9434-14a19ca254c3.cleverapps.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium"
            >
              🌐 Visiter le site
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
