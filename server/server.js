const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Autorise seulement votre frontend en développement
  credentials: true
}));
app.use(express.json());

// Route pour le formulaire de contact
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  // Vérification de base des données reçues
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs sont requis' });
  }

  try {
    // Configuration du transporteur email
    // Utilisation d'un mot de passe d'application au lieu du mot de passe normal
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true pour 465, false pour les autres ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD // Utiliser un mot de passe d'application
      }
    });

    // Configuration de l'email
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Vous recevrez l'email à la même adresse
      subject: `Message du portfolio de ${name}`,
      html: `
        <h2>Nouveau message de votre portfolio</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Votre message a été envoyé avec succès!' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    res.status(500).json({ error: 'Une erreur est survenue lors de l\'envoi du message' });
  }
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});