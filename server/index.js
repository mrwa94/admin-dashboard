import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'
import helmet from "helmet";
import morgan from "morgan"
//import Routers
// import clientRouter from clientRouter

// config 

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({
    policy: 'cross-origin'
}))
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())


// Routes
// app.use("/client" , clientRouter)
// app.use("/generate" , generateRoutes)
// app.use("/management" , managementRoutes)
// app.use('/sales' ,salesRoutes)

//mongoose setup 
const PORT = process.env.PORT || 3000
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('You successfully connected to MongoDB!')
    app.listen(PORT, () => console.log(`server port : ${PORT}  running`))
}).catch((error) => console.log(`${error} is not connected`))
