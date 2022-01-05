import React,{useEffect,useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import { TiDeleteOutline } from "react-icons/ti";
import CustomizedDialogs from './PopupSearch/SearchPopup'
import Avatar from '@material-ui/core/Avatar';
import useStyles from './NavbarStyle'
import { useDispatch } from 'react-redux';
import {Link,useNavigate,useLocation } from "react-router-dom";
import decode from 'jwt-decode';




export default function PrimarySearchAppBar({search,setsearch,tags,settags}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const location=useLocation();
  const [user,setuser]=useState(JSON.parse(localStorage.getItem('profile')))



  useEffect(()=>{
    const token =user?.token;
    if(token){
      const decodedToken=decode(token);
      if(decodedToken.exp*1000 < new Date().getTime())
      {
        Logout();
      }
    }
    setuser(JSON.parse(localStorage.getItem('profile')));
  },[location])
  
  function Logout(){
  dispatch({type:'LOGOUT'})
  navigate('/');
  setuser(null);
  }


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };



  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';
  
  
  
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      
     
    >
        {/* <MenuItem style={{width:'300px',backgroundColor:'black'}}> */}
        <div  style={{width:'300px',backgroundColor:'black'}}>
        <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuClose}
              style={{backgroundColor:'red'}}
              
            >
              <TiDeleteOutline  />
            </IconButton>
        {/* </MenuItem> */}

        {user ? (
            <div style={{display:'flex',flexDirection:'column',marginTop:'20px'}}>
              <Typography style={{marginTop:'10px',marginBottom:'10px',color:'white',display:'flex',justifyContent:'center'}} variant="h6" noWrap>
            {user.result.name}
            </Typography>
            <CustomizedDialogs  search={search}  setsearch={setsearch} tags={tags} settags={settags} />
            <Avatar alt="name" src={user.result.selectedFile} style={{marginTop:'10px',marginBottom:'10px'}} />
            
            <Button style={{backgroundColor:'red',marginTop:'10px',marginBottom:'10px',color:'white',width:'60px',height:'50px',display:'flex',justifyContent:'center',}} onClick={()=>{Logout();setMobileMoreAnchorEl(null);}}>Logout</Button>
          </div>
          ):(
            <div style={{display:'flex',flexDirection:'column',marginTop:'20px'}}>
              <CustomizedDialogs  search={search}  setsearch={setsearch} tags={tags} settags={settags} />
               <Button style={{backgroundColor:'red',marginTop:'20px',marginBottom:'20px',width:'60px',height:'50px'}} onClick={()=>{setMobileMoreAnchorEl(null);}}>
            <Link  to="/login" style={{textDecorationLine:'none',color:'white'}}>
              Login</Link>
            </Button>

            <Button
             
              
              aria-controls={menuId}
              
              onClick={()=>{setMobileMoreAnchorEl(null);}}
              style={{backgroundColor:'red',marginTop:'20px',marginBottom:'20px' ,width:'60px',height:'50px'}}
            >
              <Link  to="/signup" style={{textDecorationLine:'none',color:'white'}}>
              Signup</Link>
            </Button>
            </div>
            )}
       

       </div>
    </Menu>
  );










  
  return (
    <div className={classes.grow}>
      <AppBar position="static" className='appbarback'>
        <Toolbar>
           <Avatar src='https://www.logodesign.net/logo/camera-lens-behind-the-mountain-204ld.png' alt='logo' className={classes.logo}/>
          <Typography className={classes.title} variant="h6" noWrap>
            PHOTO
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
         
              {/* <CustomizedDialogs  search={search}  setsearch={setsearch} tags={tags} settags={settags} /> */}
            
          
          {user ? (
            <div className={classes.LoginTime}>
              <Typography className={classes.title} variant="h6" noWrap>
            {user.result.name}
            </Typography>
            <CustomizedDialogs  search={search}  setsearch={setsearch} tags={tags} settags={settags} />
            <Avatar alt="name" src={user.result.selectedFile} className={classes.img} />
            
            <IconButton className={classes.button} onClick={Logout}>Logout</IconButton>
          </div>
          ):(
            <div className={classes.LoginTime}>
              <CustomizedDialogs  search={search}  setsearch={setsearch} tags={tags} settags={settags} />
               <IconButton className={classes.button}>
            <Link  to="/login" className={classes.b}>
              Login</Link>
            </IconButton>

            <IconButton
              edge="end"
              
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              className={classes.button}
            >
              <Link  to="/signup" className={classes.b}>
              Signup</Link>
            </IconButton>
            </div>
            )}
          </div>
          



          <div className={classes.sectionMobile}>

            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>





          
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
     
    </div>
  );
}