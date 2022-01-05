import * as React from 'react';
import {Container,Grid  } from '@material-ui/core';
import CircularProgress from "@material-ui/core/CircularProgress"
import { useSelector } from 'react-redux';
import Posts from './Posts/Posts';
import useStyles from './cardStyle'
export default function Cards({setcurrentId,setOpen}){

const classes =useStyles();
const {posts,isLoading} = useSelector((state)=>state.reducer);
console.log(posts);
    



      if(!posts.length && !isLoading) return 'NO POSTS';

    return  isLoading ? <CircularProgress/>:(
    <Container  >

    {/* End hero unit */}
    <Grid container spacing={2} >
      {posts.map((post) => (
        <Grid item key={post} xs={12} sm={12} md={4} className={classes.CardGrid}>
         

        <Posts post={post} setcurrentId={setcurrentId} setOpen={setOpen}/>



        </Grid>
      ))}
    </Grid>
  </Container>)
}


