import {
  LOCAL_LOGIN,
  GET_INFO,
} from "../actions/const";

const initialState = {
  userInfo: [],
  localLogin: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOCAL_LOGIN:
      return {
        ...state,
        localLogin: action.payload,
      };
    case GET_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
