

import {  makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
       commentsOuterContainer:{
        display:'flex',
        justifyContent:'space-between',
        
        [theme.breakpoints.down('sm')]: {
            flexDirection:'column-reverse'
          }


        
    },
    commentsInerContainer : {
        height:'200px',
        overflowY:'auto',
        marginRight:'30px',
    } ,
  
      
   
  }));

  export default useStyles;