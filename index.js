const express = require("express")
const db = require("./db/db")
const Router = require("./routers/routers") 
const userRouter = require("./routers/authRouter")   
const dotenv = require('dotenv')
dotenv.config({path:"./.env"})
const bodyParser = require("body-parser")
var cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use("/api",Router)
app.use("/api/user",userRouter)

app.listen(process.env.PORT,()=>{
    console.log()
    console.log("Port is Running")
})
