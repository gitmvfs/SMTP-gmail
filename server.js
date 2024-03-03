const express = require("express")
const app = express()
const cors = require("cors")
const serverPort =  process.env.SERVER_PORT || 3000
const emailRota = require("./routes/email")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use("",emailRota)

app.listen(serverPort, () => console.log(`Servidor aberto: http://localhost:${serverPort}`))