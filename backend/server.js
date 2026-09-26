const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post('/api/contact', async (req, res) => {
    const { name, email, organization, inquiry_type, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Champs obligatoires manquants.' });
    }

    const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        replyTo: email,
        to: ['elmirhasnae55@gmail.com', 'faouzia.benabbou@univh2c.ma', 'elfilalis@gmail.com', 'lailafetjah@gmail.com'],
        subject: `[ICT 2027 Inquiry] ${inquiry_type || 'General'} - ${name}`,
        html: `
            <h3>Nouveau message de contact - ICT 2027</h3>
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Organisation :</strong> ${organization || 'Non spécifiée'}</p>
            <p><strong>Type de demande :</strong> ${inquiry_type || 'Général'}</p>
            <p><strong>Message :</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Email envoyé avec succès !' });
    } catch (error) {
        console.error('Erreur SMTP :', error);
        return res.status(500).json({ error: "Échec de l'envoi de l'email." });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur prêt sur http://localhost:${PORT}`));