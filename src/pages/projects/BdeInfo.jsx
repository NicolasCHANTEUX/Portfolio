// src/pages/projects/BdeInfo.jsx
import { motion } from "framer-motion";
import BackToHome from "../../components/BackToHome";

export default function BdeInfo() {
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
          Site Web du BDE Info
        </motion.h1>

        <motion.p
          className="text-gray-600 mb-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Développé en équipe de 4 sur une durée de deux semaines, ce projet avait pour objectif de centraliser les activités du Bureau Des Étudiants (BDE) du département informatique de l’IUT du Havre sur une seule plateforme web.
        </motion.p>

        <motion.img 
          src="/assets/site_bde/accueil.png"
          alt="Capture d'écran du site BDE"
          className="rounded-lg shadow mb-10 w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/900x400?text=Image+non+trouvée";
            e.target.onerror = null;
          }}
        />
        <motion.img 
          src="/assets/site_bde/boutique.png"
          alt="Capture d'écran du site BDE"
          className="rounded-lg shadow mb-10 w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/900x400?text=Image+non+trouvée";
            e.target.onerror = null;
          }}
        />

        <motion.img 
          src="/assets/site_bde/connexion.png"
          alt="Capture d'écran du site BDE"
          className="rounded-lg shadow mb-10 w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/900x400?text=Image+non+trouvée";
            e.target.onerror = null;
          }}
        />

        <motion.img 
          src="/assets/site_bde/mon_compte.png"
          alt="Capture d'écran du site BDE"
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
            <h2 className="text-2xl font-semibold mb-2">Fonctionnalités principales</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Page d’accueil avec actualités défilantes</li>
              <li>Section Évènements avec système d’inscription</li>
              <li>Boutique permettant la commande de produits BDE</li>
              <li>Formulaire de contact vers l’administrateur</li>
              <li>Espace membre : connexion, inscription, gestion de compte</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Mon rôle</h2>
            <p className="text-gray-700">
              J’ai pris en charge la conception de la base de données ainsi que l’implémentation complète des fonctionnalités de connexion et d’inscription avec hashage sécurisé des mots de passe. J’ai également participé activement au développement front-end, notamment sur les pages Boutique et Contact.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Stack technique</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>HTML / CSS / JavaScript</li>
              <li>PHP (backend)</li>
              <li>PostgreSQL (base de données)</li>
              <li>Git & GitHub (versioning)</li>
              <li>Visual Studio Code</li>
            </ul>
          </div>

          <div className="mt-6 flex gap-4">
            <a 
              href="https://github.com/NicolasCHANTEUX/SAE_4.01_site_BDE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded text-sm font-medium"
            >
              🔗 Voir le code sur GitHub
            </a>
            {/* Ajoute ici un lien vers la démo si dispo plus tard */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
