import  Mongoose  from "mongoose";

// scheme created like below that
const SignupUserSchema = Mongoose.Schema({
    name:{type:String,required:true},
    // lastname:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    // Repassword:{type:String,required:true},
    selectedFile:{type:String,required:true},
    id:{type:String},
   
})

// connect schema with mongoos model
const SignupUser = Mongoose.model('SignupUser',SignupUserSchema);

export default SignupUser;