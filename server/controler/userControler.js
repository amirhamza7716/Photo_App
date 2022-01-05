import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import SignupUser from "../models/userModel.js";




export const Signup=async (req,res)=>{
    const {name,lastname,email,password,Repassword,selectedFile}=req.body
    console.log(selectedFile)
         try {
            const existingUser=await SignupUser.findOne({email});
            if(existingUser){
                return res.status(400).json({message:"user already exist."})
            }
            if(password!==Repassword)
            {
                return res.status(400).json({message:"password does not match Repassword."})
            }

            const hashedPassword=await bcrypt.hash(password,12);
            const result = await SignupUser.create({email,password:hashedPassword,name:`${name} ${lastname}`,selectedFile:selectedFile})
            const token = jwt.sign({email:result.email,id:result._id},'photo',{expiresIn:"1h"})
            res.status(200).json({result,token})
         } catch (error) {
            res.status(500).json({message:'something put wrong.'});
         }
}







export async function Login(req,res){
   const {email,password}=req.body;

try {
    const existingUser=await SignupUser.findOne({email});
    if(!existingUser){
        return res.status(404).json({message:"user doesn't exist."})
    }

    const isPasswordCorrect=await bcrypt.compare(password,existingUser.password)
    if(!isPasswordCorrect){
        return res.status(404).json({message:"invalid credentials."})
    }

    const token = jwt.sign({email:existingUser.email,id:existingUser._id},'photo',{expiresIn:"1h"})
    res.status(200).json({result:existingUser,token})
} catch (error) {
    res.status(500).json({message:'something put wrong.'});
}
}
