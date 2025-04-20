// Fonction pour précharger les images
export function preloadImages(images) {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

// Liste des images à précharger
export const projectImages = [
  './assets/profile.jpg',
  './assets/site_bde/img_site_bde.png',
  './assets/site_bde/accueil.png',
  './assets/site_bde/boutique.png',
  './assets/site_bde/connexion.png',
  './assets/site_bde/mon_compte.png',
  './assets/app_muscu/img_app_muscu.png',
  './assets/age_psyché/img_app_age_psyche.png',
  './assets/app_qcm_builder/img_app_qcm_builder.png',
  './assets/site_muscu/img_site_muscu.png',
];

// Fonction pour précharger toutes les images
export function preloadAllImages() {
  preloadImages(projectImages);
}
