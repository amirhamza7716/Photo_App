import React,{useState,useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {Container,TextField,Box,Avatar, CardMedia } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FileBasa from 'react-file-base64';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import {CreatePost,UpdatePost} from '../../../Api actions/action'
import { useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom"

const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  const useStyles = makeStyles({
    createButton:{
      // backgroundColor:''
      marginTop:10,
      marginBottom:10,
      border:'2px solid',
      borderColor:'red',
      fontSize:'1rem',
      fontWeight:'bolder',
      color:'yellow'
    },

    createForm:{
      display:'flex',
      justifyContent:'center'
    },
    media: {
      height: 200,
    //   width:600,
      marginTop:15,
      marginBottom:15,
      objectFit:'contain'
    },
    icon:{
        display:'flex',
        justifyContent:'center'
    },
    createForm:{
        display:'flex',
        justifyContent:'center'
    },
    submitbutton:{
        marginTop:15,
        marginBottom:15,

        },
        dailogbox:{
          backgroundColor:'black'
        },
        iconavatar:{
          backgroundColor:'black'
        }
  });

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });


  
  
  





const Addmemry = ({currentId,setcurrentId,open, setOpen}) => {
    // const [open, setOpen] = useState(false);
    const cl = useStyles();
    const [postdata,setpostdata]=useState({title:'',message:'',tags:'',selectedFile:''})
    const navigate=useNavigate();
    const user =JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();
    const editpost = useSelector((state)=>currentId ? 
                                                   state.reducer.posts.find((p)=>
                                                                      p._id ==currentId) : null);
    
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  

    useEffect(()=>{
      if(editpost){
        setpostdata(editpost)
       }
    },[editpost])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(postdata)
        if(currentId){
         
          dispatch(UpdatePost(currentId,{...postdata,name:user?.result?.name}));
          
        }else{
          
          dispatch(CreatePost({...postdata,name:user?.result?.name},navigate))
          
        }
    
        Clear();
      };
    





      function Clear(){
        setpostdata({title:'',message:'',tags:'',selectedFile:''});
        setcurrentId(null);
      }
    
    
    if(!user?.result?.name){
      return(<></>
      //  <div>
      //    create a memry and like a memry
      //  </div>
      )
    }


    return (
      <div className={cl.createForm}>
        <Button  color="primary" onClick={handleClickOpen} className={cl.createButton} >
          Create Photo
        </Button>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} className={cl.dailogbox}>
           
        

        <Container >
            <div className={cl.icon}>
          <Avatar  className={cl.iconavatar}>
            <InsertPhotoIcon />
          </Avatar>
          </div>
          {/* <Typography component="h1" variant="h5"> */}
            {/* {currentId ? 'EDIT' : 'ADD'} PICUTRE  */}
          {/* </Typography> */}

          <DialogTitle  className={cl.createForm} onClose={handleClose}>
          {currentId ? 'EDIT' : 'ADD'} PHOTO
           </DialogTitle>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
         
            <TextField
              margin="normal"
              required
              fullWidth
              value={postdata.title}
              label="title"
              onChange={(e)=>setpostdata({...postdata,title:e.target.value})}
              autoComplete="title"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              // name="message"
              label="discription of places"
              type="message"
              // id="message"
              onChange={(e)=>setpostdata({...postdata,message:e.target.value})}
              value={postdata.message}
              autoComplete="message"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              // name="tags"
              label="tags"
              type="tags"
              // id="tags"
              onChange={(e)=>setpostdata({...postdata,tags:e.target.value.split(',')})}
              value={postdata.tags}
              autoComplete="tags"
            />
            <FileBasa
            margin="normal"
            required
            fullWidth
            type="file"
            multiple={false}
           onDone={({base64})=>setpostdata({...postdata,selectedFile:base64})}
            />
            {postdata.selectedFile ? 
            (
            
            <CardMedia
            className={cl.media}
            image={postdata.selectedFile}
            title="Contemplative Reptile"
            />
            )
            
            :''}
             
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={cl.submitbutton}
              onClick={handleClose}
            >
              ADDMEMRY
            </Button>  

            
          </Box>
       
          </Container>
    </Dialog>
      </div>
    );
}

export default Addmemry
