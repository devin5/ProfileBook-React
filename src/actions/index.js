import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

const registerEndPoint = "";
const signEndPoint = "";

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
  };
};
