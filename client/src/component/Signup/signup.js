// import Appbar from './Appbar'



import React,{useState} from 'react';

import LockIcon from '@material-ui/icons/Lock';
import {Container,TextField,Box,Avatar, Button ,CssBaseline,Typography,CardMedia} from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import GoogleSignInButton from '../loginButton/googleloginbutton';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import FileBasa from 'react-file-base64';
import {SignUp} from '../../Api actions/AuthAction';
import {Form,Formik,Field} from 'formik';
// import * as Yup from 'yup';
import { object, string } from 'yup';



const useStyles = makeStyles({
  media: {
    height: 200,
  //   width:600,
    marginTop:15,
    marginBottom:15,
    objectFit:'contain'
  },
  signupbutton: {
   marginTop:15,
   marginBottom:15,
  },
  fieldColor:{
    color:'white',
    background:'white',
  },
  logo:{
    color:'white',
    marginTop:10,
    marginBottom:10,

  }
 
});


const theme = createTheme();
export default function Signup(){
  const classes = useStyles();
  const navigate=useNavigate();
  const dispatch = useDispatch();
    // const [SignupData,setSignupData]=useState({name:'',lastname:'',email:'',password:'',Repassword:'',selectedFile:''});
// const [SData,setSData]=useState({name:'',lastname:'',email:'',password:'',Repassword:'',selectedFile:''});
    const [SignupData,setSignupData]=useState({selectedFile:''});
    //  console.log(SData);
const INITIALValues={
       "name":"",
       "lastname":"",
       "email":"",
       "password":"",
       "Repassword":"",
       



};



    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(SignupData);
    //     dispatch(SignUp(SignupData,navigate));
    
    //     Clear();
    //   };
    
    
    
    
      
    
      // function Clear(){
      //   setSignupData({name:'',lastname:'',email:'',password:'',Repassword:'',selectedFile:''});
        
      // }
    



function handles(values){
      //  console.log(values);

      //  console.log({...values,...SignupData})
       const a ={...values,...SignupData};
       
       console.log(a);
      dispatch(SignUp(a,navigate));
    
        Clear();
}


function Clear(){
        setSignupData({selectedFile:''});
        
      }





    return (<div className='herosection2'>
       


        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            // marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className={classes.logo}>
            SIGNUP
          </Typography>
          {/* <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}> */}
            <Formik 
            initialValues={INITIALValues}
            validationSchema={object({
              name:string().required('please enter name').min(2,'name to short'),
              lastname:string().required('please enter Lastname').min(2,'Lastname to short'),
              email:string().required('please enter email').email('Invalid email'),
              password:string().required('please enter the password').min(7,'password should be 8 character'),
              Repassword:string().required('please enter the password').min(7,'password should be 8 character'),
            })
            }

           
            onSubmit={(values,formikHelpers)=>{
              console.log(values)
              formikHelpers.resetForm();
              handles(values);
            }}
            >

            
              {({errors,isValid,touched,dirty})=>(
             
             <Form>
                <Field
                required
                fullWidth
                name='name'
                label="name"
                type='name'
                as={TextField}
                variant='outlined'
                color='primary'
                className={classes.fieldColor}
                error={Boolean(errors.name) && Boolean(touched.name)}
                helperText={Boolean(touched.name) && errors.name}
                />
                <Box height={14}/>
                 <Field
                required
                fullWidth
                name='lastname'
                label="lastname"
                type='name'
                as={TextField}
                variant='outlined'
                color='primary'
                className={classes.fieldColor}
                error={Boolean(errors.Lastname) && Boolean(touched.Lastname)}
                helperText={Boolean(touched.Lastname) && errors.Lastname}
                />
                <Box height={14}/>
                 <Field
                required
                fullWidth
                name='email'
                label="email"
                type='email'
                as={TextField}
                variant='outlined'
                color='primary'
                className={classes.fieldColor}
                error={Boolean(errors.email) && Boolean(touched.email)}
                helperText={Boolean(touched.email) && errors.email}
                />
                <Box height={14}/>
                 <Field
                required
                fullWidth
                name='password'
                label="password"
                type='password'
                as={TextField}
                variant='outlined'
                color='primary'
                className={classes.fieldColor}
                error={Boolean(errors.password) && Boolean(touched.password)}
                helperText={Boolean(touched.password) && errors.password}
                />
                <Box height={14}/>
                 <Field
                required
                fullWidth
                name='Repassword'
                label="Repassword"
                type='password'
                as={TextField}
                variant='outlined'
                color='primary'
                className={classes.fieldColor}
                error={Boolean(errors.Repassword) && Boolean(touched.Repassword)}
                helperText={Boolean(touched.Repassword) && errors.Repassword}
                />
               
               <FileBasa
            margin="normal"
            
            required
            fullWidth
            type="file"
            multiple={false}
           onDone={({base64})=>setSignupData({selectedFile:base64})}
            />

            {SignupData.selectedFile ? 
            (
              
              <CardMedia
            className={classes.media}
            image={SignupData.selectedFile}
            title="Contemplative Reptile"
            />
            )
            
            :''}


             <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className={classes.signupbutton}
              color='primary'
              disabled={!dirty || !isValid}
            >
              SIGNUP
            </Button>
                </Form>
              
             )}
             </Formik> 
          {/* <TextField
              margin="normal"
              required
              fullWidth
              // id="creator"
              label="name"
              
              onChange={(e)=>setSignupData({...SignupData,name:e.target.value})}
              value={SignupData.name}
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              // name="message"
              label="lastname"
              type="message"
              // id="message"
              onChange={(e)=>setSignupData({...SignupData,lastname:e.target.value})}
              value={SignupData.lastname}
              autoComplete="lastname"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              // id="title"
              value={SignupData.email}
              label="email"
              // name="title"
              onChange={(e)=>setSignupData({...SignupData,email:e.target.value})}
              autoComplete="email"
              autoFocus
            />
            

            <TextField
              margin="normal"
              required
              fullWidth
              // name="tags"
              label="password"
              type="password"
              // id="tags"
              onChange={(e)=>setSignupData({...SignupData,password:e.target.value})}
              value={SignupData.password}
              autoComplete="password"
            />
             <TextField
              margin="normal"
              required
              fullWidth
              // name="tags"
              label="Repassword"
              type="password"
              // id="tags"
              onChange={(e)=>setSignupData({...SignupData,Repassword:e.target.value})}
              value={SignupData.Repassword}
              autoComplete="Repassword"
            />
           
           <FileBasa
            margin="normal"
            
            required
            fullWidth
            type="file"
            multiple={false}
           onDone={({base64})=>setSignupData({...SignupData,selectedFile:base64})}
            />
             {SignupData.selectedFile ? 
            (
            
            <CardMedia
            className={classes.media}
            image={SignupData.selectedFile}
            title="Contemplative Reptile"
            />
            )
            
            :''}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className={classes.signupbutton}
              color='primary'
            >
              SIGNUP
            </Button> */}
                    
            <GoogleSignInButton/>
           
          {/* </Box> */}
        </Box>
       
      </Container>
    </ThemeProvider>
       
    </div>
    )
}