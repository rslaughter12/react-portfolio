const nodemailer = require('nodemailer');

const sendEmail = (req, res) => {
  // Retrieve form values from request body
  const { name, email, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'racevedoslaughter12@gmail.com',
      pass: '323585rs?',
    },
  });

  // Setup email data
  const mailOptions = {
    from: email,
    to: 'racevedoslaughter12@gmail.com',
    subject: 'New Message from Portfolio Contact Form',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
      res.status(500).json({ error: 'An error occurred while sending the email' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
};

module.exports = {
  sendEmail,
};
