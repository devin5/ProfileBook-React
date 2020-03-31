import {
    // register user
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    //   Sign In User
    SIGN_USER_START,
    SIGN_USER_SUCCESS,
    SIGN_USER_FAILURE,
    
  } from "../actions";
  
  const initialState = {
    user: {},
    isLoading: false,
    error: null
  };
  
  const reducer = (state = initialState, action) => {
    console.log("action.type: " + action.type);
    switch (action.type) {
      case REGISTER_USER_START:
        return {
          ...state,
          error: null,
          isLoading: true
        };
      case REGISTER_USER_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: null
        };
      case REGISTER_USER_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
      case SIGN_USER_START:
        return {
          ...state,
          error: null,
          isLoading: true
        };
      case SIGN_USER_SUCCESS:
        return {
          ...state,
          user: action.payload,
          isLoading: false,
          error: null
        };
      case SIGN_USER_FAILURE:
        return {
          ...state,
          error: action.payload,
          isLoading: false
        };
      default:
        return state;
    }
  };
  export default reducer;
  