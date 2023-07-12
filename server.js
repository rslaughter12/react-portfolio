const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');
const { google } = require('googleapis');

app.use(express.json());
app.use(cors());

// Create and configure the OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
  '823000084015-atf8e0dv567jolp9sod9h9k0ivdnpod9.apps.googleusercontent.com',
  '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',
  'https://developers.google.com/oauthplayground' // Redirect URL
);

// Retrieve the stored refresh token from secure storage
const storedRefreshToken = '1//04HOTuoOotjdVCgYIARAAGAQSNwF-L9IrFdCu2rzLJo-GtA-pSjvUPeAEWuV1nIcfTvruoUcQg-B5vi_GZRTO5tbWXCe0gYP_GKE'; // Replace with the actual code to retrieve the stored refresh token

// Set the refresh token on the OAuth2 client
oAuth2Client.setCredentials({
  refresh_token: storedRefreshToken,
});

// Generate the authorization URL
const SCOPES = ['https://www.googleapis.com/auth/gmail.send']; // Add any additional scopes your application requires

const authUrl = oAuth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: SCOPES,
});

// Redirect the user to the authorization URL
app.get('/auth/google', (req, res) => {
  res.redirect(authUrl);
});

// Handle the authorization callback
app.get('/auth/google/callback', async (req, res) => {
  const { code } = req.query;

  try {
    // Exchange the authorization code for tokens
    const { tokens } = await oAuth2Client.getToken(code);

    // Store the refresh token securely
    const refreshToken = tokens.refresh_token;
    // Save the refreshToken to your secure storage

    // Set the credentials with the obtained tokens
    oAuth2Client.setCredentials(tokens);

    // Continue with email sending or other actions
    res.send('Authorization successful. You can close this window.');
  } catch (error) {
    console.error('Error exchanging authorization code for tokens:', error);
    res.send('Error occurred during authorization. Please try again.');
  }
});

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Implement your email sending functionality here using Nodemailer
    // This is a basic example using Gmail SMTP transport

    // Check if the access token is expired, and if so, refresh it using the stored refresh token
    if (oAuth2Client.isTokenExpiring()) {
      const { tokens } = await oAuth2Client.refreshToken();
      oAuth2Client.setCredentials(tokens);
    }

    const accessToken = 'ya29.a0AbVbY6My2cCXAtXW_siy88z0sRI4IXCrrx6Zp8Ob5qyFnlBttqeMFvpWyRSuduT9qpmstr0NIaOTnW-1woAQt2yCMluKQKBFk9cQbxUjHds7VaLWDC8rne4Esy7XcmnJoGH-qu0cSgjK1iahfrmEHM2Vyj-qaCgYKAW8SAQ8SFQFWKvPlRyY4vbIl_ts6IFFHyiClag0163';

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'racevedoslaughter12@gmail.com',
        clientId: '823000084015-atf8e0dv567jolp9sod9h9k0ivdnpod9.apps.googleusercontent.com',
        clientSecret: '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',
        refreshToken: storedRefreshToken,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'YOUR_EMAIL',
      to: 'racevedoslaughter12@gmail.com',
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully');
      }
    });
  } catch (error) {
    console.error('Error occurred during email sending:', error);
    res.status(500).send('Error sending email');
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
