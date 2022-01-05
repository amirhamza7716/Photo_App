import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
import moment from 'moment';
import { useDispatch } from 'react-redux';
import {Grid  } from '@material-ui/core';
import {DeletePost,LikePost} from '../../../../Api actions/action';

import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    minWidth:250,
  },
  media: {
    objectFit:'cover',
    height: 240,
  },
  cardcontent:{
      justifyContent:'center'
  },
  cardName:{
      display:'flex',
      justifyContent:'center',
  },
  cardTitle:{
    display:'flex',
    justifyContent:'center',
  },
  cardTime:{
    display:'flex',
    justifyContent:'center',
  },
  cardTags:{
    display:'flex',
    justifyContent:'center',
  },
  actionButtons:{
    display:'flex',
    justifyContent:'center'
  },
  button:{

  },
  LinkOfCards:{
    textDecorationLine:'none',
    color:'black',
  }

});

export default function Posts({post,setcurrentId,setOpen}) {
  const classes = useStyles();
  const dispatch=useDispatch();
  const user =JSON.parse(localStorage.getItem('profile'));
  console.log(user);

  return (
    // <Grid item  xs={12} sm={4} md={3} xl={3} >
    <Card className={classes.root}>
     <Link to={`/posts/${post._id}`} className={classes.LinkOfCards}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={post.selectedFile}
          title={post.name}
        />
        <CardContent className={classes.cardcontent}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.cardName}>
          {post.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h3" className={classes.cardTitle}>
          {post.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="h6" className={classes.cardTime}>
          {moment(post.createdAt).fromNow()}
          </Typography>
          <Typography gutterBottom variant="h6" component="h6" className={classes.cardTags}>
          {post.tags.map((tag)=>`#${tag}`)}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      </Link>
      <CardActions className={classes.actionButtons}>
      {(user?.result?.googleId==post?.creator || user?.result?._id==post?.creator) && ( <Button className={classes.button}  onClick={()=>dispatch(DeletePost(post._id))}><MdDelete         size="2em"/>  </Button> )}
               {(user?.result?.googleId==post?.creator || user?.result?._id==post?.creator) && ( <Button className={classes.button} onClick={()=>{setcurrentId(post._id);setOpen(true)}}>      <GrDocumentUpdate size="2em"/>  </Button> )}                                    
                                       
                                       <Button className={classes.button} disabled={!user?.result} onClick={()=>dispatch(LikePost(post._id))}>
                                          
                                         <FcLike           size="2em"/>
                                         </Button>
                                       <Button className={classes.button}> {post.likes.length} </Button>
      </CardActions>
    </Card>
    // </Grid>
  );
}