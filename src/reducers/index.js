import {
  // register user
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  //   Sign In User
  SIGN_USER_START,
  SIGN_USER_SUCCESS,
  SIGN_USER_FAILURE,
  // getting posts
  GET_All_POST_START,
  GET_All_POST_SUCCESS,
  GET_All_POST_FAILURE,
  //getting comments
  GET_COMMENTS_START,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,

  GET_All_PROFILE_START,
  GET_All_PROFILE_SUCCESS,
  GET_All_PROFILE_FAILURE,
} from "../actions";

const initialState = {
  comments : {},
  posts: [],
  profile: [],
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
        user: action.payload,
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
    case GET_All_POST_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case GET_All_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
        error: null
      };
    case GET_All_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

      case GET_All_PROFILE_START:
        return {
          ...state,
          error: null,
          isLoading: true
        };
      case GET_All_PROFILE_SUCCESS:
        return {
          ...state,
          profile: action.payload,
          isLoading: false,
          error: null
        };
      case GET_All_PROFILE_FAILURE:
        return {
          ...state,
          error: action.payload,
          isLoading: false
        };
    
      // case GET_COMMENTS_START:
      // return {
      //   ...state,
      //   error: null,
      //   isLoading: true
      // };
      // case GET_COMMENTS_SUCCESS:
        
      //   return {
      //     ...state,
      //     comments : {
      //       ...state.comments,
            
      //       [action.payload[0].Comment_Post_ID]:[action.payload]
      //     },
      //     isLoading: false,
      //     error: null
      //   };
      //   case GET_COMMENTS_FAILURE:
      //     return {
      //       ...state,
      //       error: action.payload,
      //       isLoading: false
      //     };
    default:
      return state;
  }
};
export default reducer;
