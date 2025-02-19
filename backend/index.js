const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const Port = process.env.PORT || 8000
const middleware = require("./middleware/middleware")
require("dotenv").config()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//this is for generating error from ourself
// app.get("/home" , (req , res)=>{
//     const status = false
//     if(status){
//         res.status(200).send("Okk")
//     }
//     else {
//         res.status(400).send("Home page error")
//     }
// })
app.get("/home", (req, res) => {
    try {
        throw new Error("home page error")
        res.status(200).send("Data OKK")
    } catch (error) {
        res.status(400).send({ msg: "Home page error" })
    }
})
app.get("/about", (req, res) => {
    try {
        throw new Error("This is about page error")
        res.status(200).send("Data from about")
    } catch (error) {
        res.status(500).send({ msg: " about error" })
    }
})
app.get("/services",  (req, res, next) => {
   try {
    throw new Error("This is service page error using global middleware")
    res.status(200).send("Data from services")
   } catch (error) {
    next(error)
    
   }

})
app.use(middleware)
app.listen(Port, () => {
    console.log(`Listening at the port of ${Port}`)
})