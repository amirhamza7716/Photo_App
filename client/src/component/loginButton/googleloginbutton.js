
import React from 'react';
import { Button } from '@material-ui/core';
import {GoogleLogin} from 'react-google-login';
import {FcGoogle  } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function GoogleSignInButton(){
 const dispatch = useDispatch();
 const navigate =useNavigate();
    async function googleSuccess(res){
       console.log(res);
       const result = res?.profileObj;
       const token = res?.tokenId;

       try {
        dispatch({type:'AUTH',payload:{result,token}}); 
        navigate.push('/') ;
       } catch (error) {
           console.log(error);
       }
    }

    function googleFailure(){
        console.log("google signIn is unsuccessful ...try again letter");
    }
    // 466383295845-qdg6f825b61i1elutuqn0cid2aqd7t77.apps.googleusercontent.com
    return(
    <GoogleLogin
    clientId="466383295845-qdg6f825b61i1elutuqn0cid2aqd7t77.apps.googleusercontent.com"
    render= {(renderProps)=>(
                           <Button 
                                  className="GoogleBUTTON"
                                  color='primary' 
                                  fullWidth 
                                  onClick={renderProps.onClick} 
                                  disabled = {renderProps.disabled} 
                                  startIcon={<FcGoogle/>}
                                  variant="contained"> Google Sign in
                            </Button>    
                            )
            }

    onSuccess={googleSuccess}
    onFailure={googleFailure} 
    cookiePolicy="single_host_origin"       
    
    />)
}