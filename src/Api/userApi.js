import {AxiosInstance}from './axios'


export const userSignup=async(signupdata)=>{

 
    const data= await AxiosInstance.post('/user/signup',signupdata)
return data;
}
export const userlogin=async(loginData)=>{
 
    const data= await AxiosInstance.post('/user/userLogin',loginData)
return data;
}
export const userLoginWithGoogle=async(loginData)=>{
    const data= await AxiosInstance.post('/user/googleUserLogin',loginData)
return data;
}