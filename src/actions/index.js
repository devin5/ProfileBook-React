import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";




const signEndPoint = "http://localhost:5503/profilebook/auth/users/login";
const allPosts = "http://localhost:5503/profilebook/posts/";
const registerEndPoint =
  "http://localhost:5503/profilebook/auth/users/register";


export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const SIGN_USER_START = "SIGN_USER_START";
export const SIGN_USER_SUCCESS = "SIGN_USER_SUCCESS";
export const SIGN_USER_FAILURE = "SIGN_USER_FAILURE";

export const GET_All_POST_START = "GET_All_POST_START";
export const GET_All_POST_SUCCESS  = "GET_All_POST_SUCCES";
export const GET_All_POST_FAILURE = "GET_All_POST_FAILURE";


export const registerUser = (user, history) => {
  return dispatch => {
    dispatch({ type: REGISTER_USER_START });
    axios
      .post(registerEndPoint, user)
      .then(res => {
        dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data.data.user });
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("id", res.data.data.user.User_ID);
        history.push("/")
      })
      .catch(err => {
        dispatch({ type: REGISTER_USER_FAILURE, payload: err });
      });
  };
};
export const signIn = user => {
  return dispatch => {
    dispatch({type: SIGN_USER_START})
    axios.post(signEndPoint, user)        
    .then(res=>{   
      dispatch({type: SIGN_USER_SUCCESS, payload: res.data.data.user[0]})
      localStorage.setItem('token', res.data.data.token)
      localStorage.setItem('id', res.data.data.user[0].User_ID)
      
    })
    .catch(err =>{
      dispatch({type: SIGN_USER_FAILURE, payload: err})
    })
  };
  
};

export const getTimeLine = () => {
return dispatch => {
  dispatch({type: GET_All_POST_START})
  axiosWithAuth().get(allPosts)        
  .then(res=>{   
    dispatch({type: GET_All_POST_SUCCESS, payload: res.data})
  })
  .catch(err =>{
    dispatch({type: GET_All_POST_FAILURE, payload: err})
  })
};

};