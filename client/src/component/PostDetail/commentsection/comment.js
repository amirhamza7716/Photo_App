import React,{useState,useRef} from 'react';
import { TextField,Button, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyle from './commentStyle'
import {PutCommentOnPost} from '../../../Api actions/action'
const Comments = ({post}) => {
    const classes = useStyle();
    console.log(post);
    const [comments,setcomments]=useState(post?.comments);
    const [Comment,setComment]=useState('');
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();
    const commentRef=useRef();
    
    
    async function HandleComment(){
     const FinalComment = `${user.result.name}:${Comment}`;
     const newComments = await dispatch(PutCommentOnPost(FinalComment,post._id));
     setcomments(newComments);
     setComment('');
     commentRef.current.scrollIntoView({behavior:'smooth'})
    }
    return (
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInerContainer}>
                    <Typography gutterBottom variant='h6'>Comments</Typography>
                    {
                        comments.map((c,i)=>(
                            <Typography key={i} gutterBottom variant='subtitle1'>
                             
                              <strong>{c.split(': ')[0]}</strong>
                              {c.split(':')[1]}

                            </Typography>
                        ))
                    }
                    <div ref={commentRef}/>
                </div>

                {user?.result?.name &&(
                <div style={{width:'70%'}}>
                    <Typography gutterBottom variant='h6'>Write a Comment</Typography>
                    <TextField
                    fullWidth
                    row={4}
                    variant='outlined'
                    label='Comment'
                    multiline
                    value={Comment}
                    onChange={(e)=>setComment(e.target.value)}
                    />
                    <Button style={{marginTop:'10px'}} fullWidth disabled={!Comment} variant='contained' color='primary' onClick={HandleComment}> Comment</Button>
                </div>
                )}
            </div>
        </div>
    )
}

export default Comments;
