const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');
const { google } = require('googleapis');
const { accessToken, storedRefreshToken } = require('./tokens'); // Import access token and refresh token

app.use(express.json());
app.use(cors());

// Create and configure the OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
  '823000084015-atf8e0dv567jolp9sod9h9k0ivdnpod9.apps.googleusercontent.com',
  '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',
  'https://developers.google.com/oauthplayground' // Redirect URL
);

// Set the refresh token on the OAuth2 client
oAuth2Client.setCredentials({
  refresh_token: storedRefreshToken,
});

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Check if the access token is expired, and if so, refresh it using the stored refresh token
    if (oAuth2Client.isTokenExpiring()) {
      const { tokens } = await oAuth2Client.refreshToken();
      oAuth2Client.setCredentials(tokens);
    }

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
