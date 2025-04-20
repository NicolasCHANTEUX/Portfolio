const { exec } = require('child_process');
const path = require('path');
const fs = require('fs-extra');

// Chemins
const buildFolder = path.join(__dirname, 'build');
const tempFolder = path.join(__dirname, 'temp_deploy');

// Fonction pour exécuter des commandes shell
const runCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Erreur d'exécution: ${error.message}`);
        reject(error);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
      }
      console.log(`stdout: ${stdout}`);
      resolve(stdout);
    });
  });
};

// Déploiement
const deploy = async () => {
  try {
    console.log('🚀 Démarrage du déploiement...');
    
    // S'assurer que le dossier build existe
    if (!fs.existsSync(buildFolder)) {
      console.error('❌ Dossier build non trouvé. Exécutez "npm run build" avant de déployer.');
      return;
    }

    // Nettoyer et créer un dossier temporaire
    if (fs.existsSync(tempFolder)) {
      fs.removeSync(tempFolder);
    }
    fs.mkdirSync(tempFolder);

    // Initialiser un nouveau repo git
    console.log('📦 Initialisation du repo temporaire...');
    await runCommand(`cd "${tempFolder}" && git init`);

    // Copier les fichiers du build (utiliser fs-extra au lieu de cp)
    console.log('📂 Copie des fichiers...');
    fs.copySync(buildFolder, tempFolder);
    
    // Créer un fichier .nojekyll
    fs.writeFileSync(path.join(tempFolder, '.nojekyll'), '');

    // Configurer le repo et pousser vers GitHub
    console.log('🔄 Configuration du repo et push vers GitHub...');
    await runCommand(`cd "${tempFolder}" && git add . && git commit -m "Déploiement du site"`);
    await runCommand(`cd "${tempFolder}" && git branch -M gh-pages`);
    await runCommand(`cd "${tempFolder}" && git remote add origin https://github.com/NicolasCHANTEUX/Portfolio.git`);
    
    // Essayer de pousser
    try {
      await runCommand(`cd "${tempFolder}" && git push -f origin gh-pages`);
      console.log('✅ Déploiement terminé avec succès!');
    } catch (pushError) {
      console.log('⚠️ Erreur lors du push. Essai avec authentification...');
      console.log('Veuillez vous connecter à votre compte GitHub quand demandé.');
      await runCommand(`cd "${tempFolder}" && git push -f origin gh-pages`);
      console.log('✅ Déploiement terminé avec succès!');
    }
    
    console.log('🌐 Votre site est maintenant disponible à l\'adresse: https://nicolaschanteux.github.io/Portfolio/');
    
    // Nettoyage
    console.log('🧹 Nettoyage...');
    fs.removeSync(tempFolder);
    
  } catch (error) {
    console.error('❌ Erreur lors du déploiement:', error);
  }
};

// Lancer le déploiement
deploy();
