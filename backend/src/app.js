import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import userRouter from "./routes/user.routes.js"
import mentorRouter from "./routes/mentor.routes.js"
import authRouter from './routes/auth.routes.js'
import blogRouter from './routes/blog.routes.js'

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

app.use(bodyParser.json())


//routes import 







//routes declaration
app.use("/api/v1/users", userRouter)
app.use("/api/v1/mentors", mentorRouter)
app.use("/api/v1/auth", authRouter)
app.use('/api/v1/blog', blogRouter);







export { app }

//use hota hai middlewares ke liye hota hai

//cors toh pta hai allow access krne ke liye

//express.json response dene ke liye json format mai

//static to store images that doesnt change frequently

//cookie-parser to use cookies of user and to set secure cookies

//url encoded bhi use hota hai to detect url 