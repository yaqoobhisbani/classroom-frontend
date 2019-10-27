import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AVATAR_FAIL,
  AVATAR_SUCCESS,
  REMOVE_AVATAR,
  LOGOUT,
  CLEAR_ERRORS,
  CLEAR_SUCCESS
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: null,
        loading: true,
        user: null,
        error: action.payload
      };
    case AVATAR_SUCCESS:
      return {
        ...state,
        success: "The Profile Picture has been uploaded!"
      };
    case AVATAR_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case REMOVE_AVATAR:
      return {
        ...state,
        success: "The Profile Picture has been removed!"
      };
    case CLEAR_SUCCESS:
      return {
        ...state,
        success: null
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
