import { alpha, makeStyles} from '@material-ui/core/styles';
import {createMuiTheme} from '@material-ui/core'



const theme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 450,
        md: 660,
        lg: 900,
        xl: 1200
      }
    }
  });

const useStyles = makeStyles(() => ({
    
    CardGrid:{
        
        [theme.breakpoints.up('sm')]: {
            flexDirection:'column'

          }, 
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