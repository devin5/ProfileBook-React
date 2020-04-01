import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";



const registerEndPoint = "";
const signEndPoint = "http://localhost:5503/profilebook/auth/users/login";

export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const SIGN_USER_START = "SIGN_USER_START";
export const SIGN_USER_SUCCESS = "SIGN_USER_SUCCESS";
export const SIGN_USER_FAILURE = "SIGN_USER_FAILURE";

export const registerUser = user => {
  return dispatch => { 
  };
};
export const signIn = user => {
  return dispatch => {
    dispatch({type: SIGN_USER_START})
    axios.post(signEndPoint, user)        
    .then(res=>{   
        // const response = res.data.data.user[0]
      dispatch({type: SIGN_USER_SUCCESS, payload: res.data.data.user[0]})
      console.log("I am res.data", res) 
      localStorage.setItem('token', res.data.data.token)
      localStorage.setItem('id', res.data.data.user[0].User_ID)
      
    })
    .catch(err =>{
      console.log(err)
      dispatch({type: SIGN_USER_FAILURE, payload: err})
    })
  };
};
