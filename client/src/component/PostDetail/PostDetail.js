import React,{useEffect}from 'react';
import {Paper,Typography,CircularProgress,Divider,Grid} from '@material-ui/core';
import { useSelector,useDispatch } from 'react-redux';
import moment from 'moment';
import { useParams,useNavigate } from 'react-router';
import {fatchSelectedPost,FetchPostBySearch} from '../../Api actions/action';
import {Link} from 'react-router-dom';
import makeStyles from './PostDetailStyle';
import Comments from './commentsection/comment';
import './postDetailStyle.css';
const PostDetail = () => {
    const {post,isLoading,posts} = useSelector((state)=>state.reducer)

    const dispatch = useDispatch();
    const navigate= useNavigate();
    const {id}=useParams();
    const classes=makeStyles();
    console.log(id)
    
    useEffect(()=>{
        dispatch(fatchSelectedPost(id));
    },[id])

    useEffect(()=>{
        if(post)
       {  dispatch(FetchPostBySearch({search:'none',tags:post?.tags.join(',')}))}
    },[post])

if(!post) return null;
if(isLoading){
    return (
        <Paper>
            <CircularProgress size="7em"/>
        </Paper>
    )
}

const recommandedPosts = posts.filter(({_id})=>_id != post._id)
console.log(post);
    return (<div className='herosection'>
        <Paper elevation={6}>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6} >
                 <Typography variant='h3' component='h4'>{post.title} </Typography>
                 <Typography gutterBottom variant='h6' color="textSecondary" component='h2'>{post.tags.map((tag)=>`#${tag}`)} </Typography>
                 <Typography gutterBottom variant='body1'  component='p'>{post.message} </Typography>
                 <Typography  variant='h6' >{post.name} </Typography>
                 <Typography variant='body1' >{post.createdAt} </Typography>

                 

                 <Divider style={{margin:'20px 0'}}/>
                 <Comments post={post}/>
                 <Divider style={{margin:'20px 0'}}/>

                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <img src={post.selectedFile} alt='hamza' className={classes.media}/>  
                </Grid>

            </Grid>
        </Paper>
        <Paper>
            {
                recommandedPosts.length && (
                    <div>
                        <Divider style={{margin:'20px 0'}}/>
                        <Typography gutterBottom variant='h5' >you might Also like that</Typography>
                        <Divider style={{margin:'20px 0'}}/>
                        <Grid container spacing={4}>
                         
                            {recommandedPosts.map((post)=>{
                                return <Grid item key={post} xs={12} sm={4} md={4} >
                                <Link to={`/posts/${post._id}`}>
                                       <div  className="container" >
                             <div className="card" >
                                  <div  className="imgBx">
                                      <img  src={post.selectedFile}/>
                                  </div>
                                  <div   className="Visitdetail">
                                       <div  className="About">
                                            <h2  className="visitorname">{post.name} </h2>
                                            <h3 className="visitorplace">{post.title} </h3>
                                            <h3 className="visitorplace">  {moment(post.createdAt).fromNow()} </h3>
                                            <h6 className="visitorplace">{post.tags.map((tag)=>`#${tag}`)}</h6>
                                            
                                          
                                            <div className="social_icon">
                                                             
                                   
                                                             <button className="icon_list"> {post.likes.length} </button>
                                                            
                                            </div>
                                       </div>
                                  </div>
                             </div>
                          </div>
                          </Link>
                              </Grid>
                            })}
                        </Grid >
                    </div>
                )
            }
        </Paper>
        </div>
    )
}

export default PostDetail
