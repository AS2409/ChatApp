// utils/sendEmail.js
import nodemailer from 'nodemailer';

// Create a transporter using your email service (e.g., Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  },
});

// Function to send email
const sendEmail = async (to, subject, text, html) => {
  // Basic validation for required fields
  if (!to || !subject || !text || !html) {
    throw new Error('Missing required fields for sending email.');
  }

  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    to, // Recipient address
    subject, // Subject line
    text, // Plain text body
    html, // HTML body content
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Error sending email');
  }
};

export default sendEmail;
