const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
// import '../../.env'
dotenv.config()
// dotenv.config({ path: '../../.env' })
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

// We want to integrate with task App

const sendWelcomeEmail=(email,name)=>{
  transporter.sendMail({
    from: 'poonam.chauhan229@gmail.com',
    to: email,
  // to:'vidhyavkm@gmail.com',
    subject: 'Thanks For Joining in',
    text: `Welcome to the App,${name}.Let me Know how you get along with the app`
  }, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

const sendCancellationEmail=(email,name)=>{
  transporter.sendMail({
    from: 'poonam.chauhan229@gmail.com',
    to: email,
  // to:'vidhyavkm@gmail.com',
    subject: 'Sorry to see you go!',
    text: `Goodbye ${name}, Hope to see you again!!!`
  }, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports={sendWelcomeEmail,sendCancellationEmail}

// After this userRoute