import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
} from "../actions/user.action";

const initialState = {
  token: null,
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

export default function userReducer(state = initialState, action) {
switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        token: action.payload.token,
        error: null,
      };

    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        token: null,
        isLoggedIn: false,
      };

    case USER_LOGOUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}


