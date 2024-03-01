const express = require("express")
const app = express()
const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config()
const serverPort =  process.env.SERVER_PORT ||3000


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER_AUTH_SMTP,
    pass: process.env.PASS_AUTH_SMTP,
  },
});

async function main(emailTo) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: process.env.USER_AUTH_SMTP, // sender address
    to: emailTo, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main("mvfs8001@gmail.com")
// app.listen(serverPort, () => console.log(`Servidor aberto: http://localhost:${serverPort}`))