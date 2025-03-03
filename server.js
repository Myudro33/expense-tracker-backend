import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import path from 'path'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import { fileURLToPath } from 'url';
import incomeRoutes from './routes/incomeRoutes.js'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
dotenv.config({path:"./.env"})
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:process.env.CLIENT_URL||"*",
    methods:['GET',"POST","PUT","DELETE"],
    allowedHeaders:['Content-Type','Authorization']
}))
connectDB()


app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/income",incomeRoutes)


app.use('/uploads',express.static(path.join(__dirname,'uploads')))
const PORT = process.env.PORT||5000
app.listen(PORT,()=>console.log(`server running on ${PORT}`))