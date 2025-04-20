const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

// Chemin vers le dossier build
const buildFolder = path.join(__dirname, 'build');

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

    // Créer un dossier temporaire
    const tempFolder = path.join(__dirname, 'temp_deploy');
    if (fs.existsSync(tempFolder)) {
      await runCommand(`rm -rf ${tempFolder}`);
    }
    fs.mkdirSync(tempFolder);

    // Initialiser un nouveau repo git
    console.log('📦 Initialisation du repo temporaire...');
    await runCommand(`cd ${tempFolder} && git init`);

    // Copier les fichiers du build
    console.log('📂 Copie des fichiers...');
    await runCommand(`cp -r ${buildFolder}/* ${tempFolder}/`);
    
    // Créer un fichier .nojekyll
    fs.writeFileSync(path.join(tempFolder, '.nojekyll'), '');

    // Configurer le repo et pousser vers GitHub
    console.log('🔄 Configuration du repo et push vers GitHub...');
    await runCommand(`
      cd ${tempFolder} && 
      git add . && 
      git commit -m "Déploiement du site" && 
      git branch -M gh-pages && 
      git remote add origin https://github.com/NicolasCHANTEUX/Portfolio.git && 
      git push -f origin gh-pages
    `);

    // Nettoyage
    console.log('🧹 Nettoyage...');
    await runCommand(`rm -rf ${tempFolder}`);
    
    console.log('✅ Déploiement terminé avec succès!');
    console.log('🌐 Votre site est maintenant disponible à l\'adresse: https://nicolaschanteux.github.io/Portfolio/');
  } catch (error) {
    console.error('❌ Erreur lors du déploiement:', error);
  }
};

// Lancer le déploiement
deploy();
