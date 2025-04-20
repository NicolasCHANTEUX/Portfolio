// Fonction simplifiée pour précharger les images
export function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

// Liste des images à précharger, simplifiée pour éviter les problèmes
export const projectImages = [
  './assets/profile.jpg',
  './assets/site_bde/img_site_bde.png',
  './assets/app_muscu/img_app_muscu.png',
  './assets/site_muscu/img_site_muscu.png',
];

// Fonction pour précharger toutes les images de manière fiable
export async function preloadAllImages() {
  try {
    await Promise.all(projectImages.map(src => preloadImage(src)));
    console.log('Images préchargées avec succès');
  } catch (error) {
    console.warn('Erreur lors du préchargement des images:', error);
  }
}
