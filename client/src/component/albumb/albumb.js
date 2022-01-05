import React,{useState} from 'react';
import {Grid,Container,Paper,Button} from '@material-ui/core';
import Addmemry from './Addmemry/Addmemry';
import Cards from './Card/card';
import PaginaTion from '../pagination/Pagination'
import useStyles from './albumbStyle';
import { useLocation} from 'react-router'
import {Link } from "react-router-dom";


function useQuery(){
  return new URLSearchParams(useLocation().search);

}


  export default function Album({search,tags}) {
    const classes=useStyles();
    const [currentId,setcurrentId]=useState(null);
    const [open, setOpen] = useState(false);
    const query=useQuery();
    const page=query.get('page') || 1;
      const searchQuery = query.get('searchQuery');
      // const [search,setsearch]=useState('');
      // const [tags,settags]=useState([]);

        return (<div className='herosection'>
           {/* <Container maxWidth="xl"> */}
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={12} lg={12}   >
              <Addmemry
              currentId={currentId}
              setcurrentId={setcurrentId}
              open={open}
              setOpen={setOpen}
              />
              </Grid>  
            </Grid>


            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12}   >
               <Cards
               setcurrentId={setcurrentId}
               setOpen={setOpen}
               />
              </Grid>  
            </Grid>


            

         {(!searchQuery && !tags.length && !search)&&(
            <Grid item xs={12} >
              <div className={classes.maindivpagination}>
            <Paper elevation={6} className={classes.peperpagination}>
             <PaginaTion  page={page}/>
             </Paper>
             </div>
            </Grid>)}

           

           {/* </Container> */}
          </div>
        )
     
  
  }