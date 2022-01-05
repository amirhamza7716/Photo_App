


import React,{useState} from 'react';
import {Container,TextField,Box,Avatar, Button ,CssBaseline,Typography} from '@material-ui/core';
import {createTheme, ThemeProvider } from '@material-ui/core/styles';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import {LogIn} from '../../Api actions/AuthAction';
import GoogleSignInButton from '../loginButton/googleloginbutton';
import {Form,Formik,Field} from 'formik';
import { object, string } from 'yup';

const useStyles = makeStyles({
  login:{
        
    // marginTop:50,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  b: {
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
export default function Login(){
  const classes = useStyles();
  const history=useNavigate();
  const dispatch = useDispatch();
// const [loginData,setloginData]=useState({email:'',password:''})





    // const handleSubmit = (event) => {
    //     event.preventDefault();
        
    //     console.log(loginData);
    //     dispatch(LogIn(loginData,history));
    
    //     Clear();
    //   };
    
    
    
    
      
    
      // function Clear(){
      //   setloginData({email:'',password:''});
        
      // }
    

      const INITIALValues={
        
        "email":"",
        "password":"",
 };

function handles(values){
  dispatch(LogIn(values,history));
}







    return (<div className='herosection1'>
    <div className={classes.login}>
    
 


    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOpenIcon />
          </Avatar>
          
          <Typography component="h1" variant="h5" className={classes.logo}>
            LOGIN
          </Typography>
          {/* <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}> */}

          {/* <TextField
              margin="normal"
              required
              fullWidth
              label="EMAIL"
              
              onChange={(e)=>setloginData({...loginData,email:e.target.value})}
              value={loginData.email}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
             value={loginData.password}
              label="PASSWORD"
              onChange={(e)=>setloginData({...loginData,password:e.target.value})}
              autoComplete="password"
              autoFocus
            /> */}
            

           
            
            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              color='primary'
              className={classes.b}
            >
              LOGIN
            </Button>
            <GoogleSignInButton/>
             */}
           
          {/* </Box> */}


          <Formik 
            initialValues={INITIALValues}
            validationSchema={object({
              
              email:string().required('please enter email').email('Invalid email'),
              password:string().required('please enter the password').min(7,'password should be 8 character'),
              
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
               
               
                <Box height={14}/>
                 <Field
                required
                fullWidth
                name='email'
                label="email"
                type='email'
                as={TextField}
                variant='outlined'
                // color='primary'
                
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
                
             <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className={classes.b}
              color='primary'
              disabled={!dirty || !isValid}
            >
              Login
            </Button>
                </Form>
              
             )}
             </Formik> 
             <Box height={14}/>
             <GoogleSignInButton/>
        </Box>
       
      </Container>
    </ThemeProvider>
    
</div>
</div>
    )
}