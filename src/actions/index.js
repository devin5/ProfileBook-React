import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

const registerEndPoint =
  "http://localhost:5503/profilebook/auth/users/register";
const signEndPoint = "";

export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const SIGN_USER_START = "SIGN_USER_START";
export const SIGN_USER_SUCCESS = "SIGN_USER_SUCCESS";
export const SIGN_USER_FAILURE = "SIGN_USER_FAILURE";

export const registerUser = user => {
  return dispatch => {
    dispatch({ type: REGISTER_USER_START });
    axios.post(registerEndPoint, user).then(res => {
      console.log("im register response", res);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data.data.user });
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("id", res.data.data.user.User_ID);
    })
    .catch(err => {
      dispatch({ type: REGISTER_USER_FAILURE, payload: err });
    })
  };
};
export const signIn = user => {
  return dispatch => {};
};
