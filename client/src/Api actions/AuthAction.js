import {AUTH} from '../redux/reducers/ReducerCaseTypes';
import {signUp,logIn} from '../Api/api'



export const SignUp = (SignupData,history) =>async (dispatch)=>{
try {
    const {data}=await signUp(SignupData);
    const result=data.result;
    const token =data.token;
    dispatch({type:AUTH,payload:{result,token}});
    history('/');
} catch (error) {
    console.log(error);
}
}





export const LogIn = (loginData,history) =>async (dispatch)=>{
    try {
        const {data}=await logIn(loginData);
        const result=data.result;
        const token =data.token;
        dispatch({type:AUTH,payload:{result,token}});
        history('/');
    } catch (error) {
        console.log(error);
    }
}