import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { userRouter } from './routes/userRoutes.js'

const dbConnect = async()=>{
   await mongoose.connect(process.env.MONGO_URL);
    console.log("db connected");
}


//app config
const PORT  = process.env.PORT || 4000
const app = express();
await dbConnect();

//middlewares
app.use(express.json());
app.use(cors())

//sample route
app.get('/',(req,res)=>{
    res.send("api working");
})
app.use('/api/user',userRouter);


app.listen(PORT,()=>{console.log(`App running on ${PORT}`)})