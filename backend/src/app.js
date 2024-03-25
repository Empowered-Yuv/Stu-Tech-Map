import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({
    limit: "20kb"
}))

app.use(express.urlencoded({
    extended: true,
    limit: "20kb"
}))

app.use(express.static("public"))

app.use(cookieParser())


//routes import 

// import userRouter from "./routes/user.routes.js"




//routes declaration
// app.use("/api/v1/users", userRouter)







export { app }

//use hota hai middlewares ke liye hota hai

//cors toh pta hai allow access krne ke liye

//express.json response dene ke liye json format mai

//static to store images that doesnt change frequently

//cookie-parser to use cookies of user and to set secure cookies

//url encoded bhi use hota hai to detect url 