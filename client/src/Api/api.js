// import { Api } from "@mui/icons-material";
import axios from "axios";

const API =axios.create({baseURL:'http://localhost:9223'})
API.interceptors.request.use((req)=>{
  if(localStorage.getItem('profile')){
      req.headers.authorization = `love ${JSON.parse(localStorage.getItem('profile')).token}`};

      return req;
})

export const fetchPosts = (page)=> API.get(`/posts?page=${page}`);
export const FindPosts = (SearchQuery)=> API.get(`/posts/find?search=${SearchQuery.search || 'none'}&tags=${SearchQuery.tags || 'none'}`);
export const FatchSelectedPostById =(id)=>API.get(`/posts/${id}`)
export const createPost =(post)=>  API.post('/posts',post);
export const UpdatePost= (id,updatedpost)=> API.patch(`/posts/${id}`,updatedpost);
export const Deletepost= (id)=> API.delete(`/posts/${id}`);
export const likepost= (id)=> API.patch(`/posts/${id}/LikePost`);
export const CommentOnPost=(FinalComment,id)=>API.post(`/posts/${id}/CommentPost`,{FinalComment})


export const signUp=(SignupData)=>API.post('/users/signup',SignupData);
export const logIn=(loginData)=>API.post('/users/login',loginData);