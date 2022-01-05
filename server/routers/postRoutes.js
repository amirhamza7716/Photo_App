import express from "express";
import {FindPosts,getSelectedPost, getPosts ,CreatePost,UpdatePost,DeletPost,LikePost,CommentPost} from "../controler/postControler.js";
import Auth from '../middleware/Auth.js';
const router =express.Router();


//cmd
// http://localhost:7069/posts
router.get('/',getPosts);
router.get('/find',FindPosts);
router.get('/:id',getSelectedPost);

router.post('/',Auth, CreatePost);
router.patch('/:id',Auth, UpdatePost);
router.delete('/:id', Auth, DeletPost);
router.patch('/:id/LikePost',Auth, LikePost);
router.post('/:id/CommentPost',Auth, CommentPost);




export default router;