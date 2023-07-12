const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
// import '../../.env'
dotenv.config({ path: '../../.env' })
console.log(process.env.EMAIL_USER)

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
console.log(emailUser)

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

const mailOptions = {
  from: 'poonam.chauhan229@gmail.com',
  to: 'poonam.chauhan229@gmail.com',
// to:'vidhyavkm@gmail.com',
  subject: 'Hello from Nodemailer',
  text: 'This is a test email sent using Nodemailer.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
// We want to integrate with task App
