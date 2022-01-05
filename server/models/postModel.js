import  Mongoose  from "mongoose";

// scheme created like below that
const postSchema = Mongoose.Schema({
    title:String,
    message:String,
    name:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    // likeCount:{
    //     type:Number,
    //     default:0
    // },
    likes:{
        type:[String],
        default:[]
    },
    comments:{
        type:[String],
        default:[]
    },

    createdAt:{
        type:Date,
        default:new Date()
    }
})

// connect schema with mongoos model
const PostMessage = Mongoose.model('PostMessage',postSchema);

export default PostMessage;