import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import  Mongoose  from 'mongoose';
import dotenv from 'dotenv';
import postRoutes from './routers/postRoutes.js';
import userRoutes from './routers/userRoutes.js';




const app = express();
dotenv.config();




app.use(bodyParser.json({limit:"30mb",extended:"true"}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:"true"}));
app.use(cors());
app.use('/posts',postRoutes);
app.use('/users',userRoutes);




app.get('/',(req,res)=>{
    res.send('hello to visitor APi');
})





// const conectUrl="mongodb+srv://amir:amir7716@cluster0.ppas2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const conectUrl ="mongodb://localhost:27017/memryData"
const PORT=process.env.PORT || 9223;


Mongoose.connect(conectUrl,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>app.listen(PORT,()=>console.log(`server is runing on port :${PORT}`))).catch((error)=>console.log(error.message));