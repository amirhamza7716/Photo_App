import { red } from '@material-ui/core/colors';
import { alpha, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    appbar:{
       
       
        
    },

    LoginTime:{
      display:'flex',
      flexDirection:'row',
      
    },

    
    
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    b:{
     textDecorationLine:'none',
     color:'white',

    },
    button:{
        marginLeft:20,
        borderRadius:15,
        color:'white',
        backgroundColor:'red',
        width:'60px',
        height:'40px',
        fontSize:'15px',
        fontWeight:'small',
        
        '&:hover': {
            backgroundColor: 'blue',
          },
    },
    img:{
        
        marginLeft:20,
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    logo:{
     
      marginRight:10,
      width: theme.spacing(6),
      height: theme.spacing(6),
  },
  title:{
marginRight:20,
  },
  
    search: {
      position: 'relative',
      borderRadius:100,
      justifyItems:'center',
      alignItems:'center',
      
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
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },

     
      
    },
  }));

  export default useStyles;