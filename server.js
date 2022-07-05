const express = require('express')
const app = express()
require('dotenv').config()

const nodemailer = require('nodemailer')

const PORT = process.env.PORT || 3000

app.use(express.static('public'))
app.use(express.json())

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})
app.post('/',(req,res)=>{
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: "aliaqasimi90@gmail.com",
            pass: process.env.password
        }
    })

    const mailOption = {
        from: req.body.email,
        to: "aliaqasimi90@gmail.com",
        subject: `Massage from ${req.body.email}: ${req.body.subject}`,
        text: req.body.massage
    }

    transporter.sendMail(mailOption,(error,info)=>{
        if(error){
            console.log(error)
        }else{
            console.log(`Email sent :${info.response}`)
            res.send("seccess")
        }
    })
})


app.listen(PORT,()=>{
    console.log('listening to port')
})