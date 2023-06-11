import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

import userRoutes from "./routes/users.js"
import loanRoutes from "./routes/loans.js"
import authRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser"


const app = express();

dotenv.config()

const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongodb")
    }catch(error){
        throw error
    }
    };
    
    mongoose.connection.on("disconnected",()=>{
        console.log("mongoose disconnected")
    })


app.use(cookieParser())
app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/loans", loanRoutes)

app.use((err,req,res,next)=>{
    const status = err.status || 500
    const message = err.message || "something went wrong";
    return res.status(status).json({
        success:false,
        status,
        message
    })

})
    

app.listen(8800,()=>{
    connect()
    console.log("connected to backend")
})





