const router = require("express").Router()
const enviarEmail = require("../controller/smtpController")


router.post("/enviarEmail", async (req,res)=>{
    console.log(req.body);

    const {emailPara, emailCopia, titulo, corpoHtml} = req.body
    
    try{
        const info = await enviarEmail(emailPara,emailCopia,titulo,corpoHtml)
        res.status(200).json({"statusCode" : "200" , "emailInfo" : info})
    }
    catch(error){
        res.status(500).json({"statusCode" : "500" , "Error" : error})
    }

})

module.exports = router