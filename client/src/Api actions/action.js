import * as api from '../Api/api';
import {createPost} from '../Api/api'
import {FindPosts} from '../Api/api'
import {likepost} from '../Api/api'
import {FETCH_ALL,SEARCH_POST,CREATE,UPDATE,DELETE,LIKE,START_LOADING,END_LOADING,FETCH_Selected_file} from '../redux/reducers/ReducerCaseTypes'
//action creators

// export const getposts=()=> 
// // use redux thunk and old getposts before adding pagination
// async(dispatch)=>
// {

// try {
//     const {data} = await api.fetchPosts();
//     dispatch({type:FETCH_ALL,payload:data})
// } catch (error) {
//     console.log(error.message)
// }





    // const action = {type:"FETCH_ALL",payload:[]}
    // // return action;
    // dispatch(action)
// }

// after adding pagination in getposts function 
export const getposts=(page)=> 
// use redux thunk
async(dispatch)=>
{

try {
    dispatch({type : START_LOADING})
    const {data} = await api.fetchPosts(page);
    console.log(data);
    dispatch({type : FETCH_ALL,payload:data})
    dispatch({type : END_LOADING})
} catch (error) {
    console.log(error.message)
}

}

export const fatchSelectedPost=(id)=>async(dispatch)=>{
try {
    dispatch({type : START_LOADING})
    const {data} = await api.FatchSelectedPostById(id);
    console.log(data);
    dispatch({type : FETCH_Selected_file,payload:data})
    dispatch({type : END_LOADING})
} catch (error) {
    
}
}

export const FetchPostBySearch=(SearchQuery)=>async(dispatch)=>{
try {
    dispatch({type : START_LOADING})
    const {data:{data}} = await FindPosts(SearchQuery);
    console.log(data);
    dispatch({type:SEARCH_POST,payload:data})
    dispatch({type : END_LOADING})
} catch (error) {
    console.log(error)
}
}

        // dispatch({type : START_LOADING})
        
        
        // dispatch({type:SEARCH_POST,payload:data})
        // dispatch({type : END_LOADING})
  

export const CreatePost =(post,navigate)=>async(dispatch)=>{
         console.log(post)
        
    try {
        dispatch({type : START_LOADING})
        const {data} = await createPost(post);
        navigate(`/posts/${data._id}`)
        dispatch({type:"CREATE",payload:data});
        
        dispatch({type : END_LOADING})
        
       
    } catch (error) {
        console.log(error.message)
    }
}





export const UpdatePost=(currentId,postdata)=>async(dispatch)=>{
    try {
      const {data}=  await api.UpdatePost(currentId,postdata)
      dispatch({type:UPDATE,payload:data});
    } catch (error) {
        console.log(error);
    }
}



export const DeletePost=(id)=>async (dispatch)=>{
      try {
        await api.Deletepost(id);
        dispatch({type:DELETE,payload:id})
      } catch (error) {
          console.log(error)
      }
}


export const LikePost =(id)=>async(dispatch)=>{
    try {
        const {data}=  await api.likepost(id);
      dispatch({type:'LIKE',payload:data});
    } catch (error) {
        console.log(error);
        
    }
}


export const PutCommentOnPost = (FinalComment,id)=>async(dispatch)=>{
try {
    const {data} = await api.CommentOnPost(FinalComment,id);
     console.log(data);
    dispatch({type:'COMMENT',payload:data});
    return data.comments;
} catch (error) {
    console.log(error)
}
}