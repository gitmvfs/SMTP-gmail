const nodemailer = require("nodemailer");
const {resolve} = require("path")
const dotenv = require("dotenv").config({path: resolve(__dirname,"../" , ".env")})

// Configura a rota do emaill

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_AUTH_SMTP,
      pass: process.env.PASS_AUTH_SMTP,
    },
  });
  
// Função para enviar email
async function enviarEmail (emailPara, emailCopia ,titulo,corpoHtml){


  const info = await transporter.sendMail({

    from: process.env.USER_AUTH_SMTP,
    to: emailPara,
    cc: emailCopia,
    subject: titulo,
    html: corpoHtml // Conteudo do email,
  }) 
  console.log(info)
  
  return info

}

module.exports = enviarEmail