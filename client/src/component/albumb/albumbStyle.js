import { alpha, makeStyles } from '@material-ui/core/styles';
import { MdFullscreenExit } from 'react-icons/md';


const useStyles = makeStyles((theme) => ({
  maindivpagination:{
    display:'flex',
    justifyContent:'center',
    marginBottom:10,
  },
    peperpagination:{
       borderRadius:4,
       marginTop:'1rem',
       padding:'10px',
      //  width:'250px',
      //  display:'flex',
      //  justifyContent:'center'

    },
   
    search: {
      position: 'relative',
      borderRadius:100,
      justifyItems:'center',
      alignItems:'center',
      // borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
        display: 'block',
      },
    },
   
    
  }));

  export default useStyles;