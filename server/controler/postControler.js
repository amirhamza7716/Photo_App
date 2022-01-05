
import  Mongoose  from "mongoose";
import PostMessage from "../models/postModel.js"
// two types are use two create function and export


// new getPosts function after  pagination send request and use Query
export const getPosts=async (req,res)=>{
    const {page}=req.query;
    try {
        // who many card limits you want to show in One page
        const LIMIT= 6;
        // get the starting Index of every page
        const StartIndex=(Number(page)-1)*LIMIT;  
        // how many posts you have in MONGODB and count
        const  total = await PostMessage.countDocuments({});
        const Posts = await PostMessage.find().sort({_id : -1}).limit(LIMIT).skip(StartIndex);

        res.status(200).json({data:Posts , currentPage : Number(page), NumberOfPages : Math.ceil(total/LIMIT)});
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}




// old getPosts function before pagination send request and not use Query
// export const getPosts=async (req,res)=>{
//          try {
//              const PostMessages = await PostMessage.find();

//              res.status(200).json(PostMessages);
//          } catch (error) {
//              res.status(404).json({message:error.message})
//          }
// }



export const getSelectedPost=async (req,res)=>{
     const {id} = req.params;
    try {
        const PostMessages = await PostMessage.findById(id);

        res.status(200).json(PostMessages);
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}



// diffrence between query and params
//  Query -> /post?page=1 -> page=1
//  Params -> /post/:id ->id=123   like   /post/123
// export const getPostsBySearch=async (req,res)=>{
//     // const {searchQuery,tags}=req.query;
//     const {searchQuery} = req.params;
//     try {
//         // i for uper case and lower case it serach upr case and lower case both
//        const title = new RegExp(searchQuery,'i');
           
//        const posts = await PostMessage.find({$or:[{title},{tags:{$in:tags.split(',')}}]});
//        res.json({data : posts});
//     } catch (error) {
//         res.status(404).json({message:error.message})
//     }
// }


export async function FindPosts(req,res){
    const {search,tags} = req.query;
    console.log(search)
    console.log(tags)
    try {
        const title = new RegExp(search,'i');
        const posts = await PostMessage.find({$or:[{title},{tags:{$in:tags.split(',')}}]})
        res.json({data:posts})
    } catch (error) {
        console.log({message:error.message})
    }
}



export async function CreatePost(req,res){
    const post = req.body;
    // const newPost = new PostMessage(post);
    const newPost = new PostMessage({...post,creator:req.userId,createdAt:new Date().toISOString()});
try {
   const Post = await newPost.save();
   res.status(201).json(Post);
} catch (error) {
    res.status(409).json({message:error.message});
}
}




export async function UpdatePost(req,res){
    // "/post/123" geting id like this from root 123 is id  and id is mongoos id and cheacking this is exist in database throw mongoos
    const {id:_id} = req.params;
    const post = req.body;
    try {

        if(!Mongoose.Types.ObjectId.isValid(_id)){
            return res.status(404).send('No Post this id')
        }else{
            const updatedPost = await PostMessage.findByIdAndUpdate(_id,{...post,_id},{new:true});
            res.json(updatedPost);
        }
        
    } catch (error) {
        res.status(408).json({message:error.message});
    }
    
 
}


export async function DeletPost(req,res){
    const {id} = req.params;
    try {
        if(!Mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).send('No Post this id')
        }else{
            await PostMessage.findByIdAndRemove(id)
            res.json({message:"delete sucessfully"});
        }
        
    } catch (error) {
        
    }
}


export async function LikePost(req,res) {
    const {id} = req.params;
    try {
        if(!req.userId) {
            return res.json({message:'Unauthenticated'})
        }
        if(!Mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).send('No Post this id')
        }else{
           const post = await PostMessage.findById(id);
       
           const index=post.likes.findIndex((id)=>id==String(req.userId))

           if(index==-1){
            //    like the post
               post.likes.push(req.userId)
           }else{
            //    dislike the post
            post.likes = post.likes.filter((id)=>id!==String(req.userId))
           }

           const updatedPost = await PostMessage.findByIdAndUpdate(
               id,
            //    {likeCount:post.likeCount + 1},
               post,
               {new:true}
               );


            res.json(updatedPost);
            
        }
    } catch (error) {
        console.log(error)
    }
}



export const CommentPost=async(req,res)=>{
      const {id} = req.params;
      const {FinalComment} = req.body;
      try {
        const post = await PostMessage.findById(id);
        post.comments.push(FinalComment);
        const updatedPost = await PostMessage.findByIdAndUpdate(id,post,{new:true});
        res.json(updatedPost);
      } catch (error) {
          console.log(error);
      }
      


}