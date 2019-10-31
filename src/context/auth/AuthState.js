import React, { useReducer } from "react";
import axios from "axios";
import { setAuthToken, config, formDataConfig } from "../../utils/axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
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
  NAME_UPDATED,
  EMAIL_UPDATED,
  PASS_UPDATED,
  UPDATE_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  CLEAR_SUCCESS,
  SET_ADMIN
} from "../types";

const AuthState = props => {
  // Initial Auth State
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isAdmin: false,
    loading: true,
    user: null,
    error: null,
    success: null
  };

  // Attaching Reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  // LOAD USER
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get("/api/auth");

      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // LOGIN USER
  const loginUser = async loginData => {
    try {
      const res = await axios.post("/api/auth", loginData, config);

      dispatch({ type: LOGIN_SUCCESS, payload: res.data });

      loadUser();
    } catch (err) {
      dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg });
    }
  };

  // REGISTER USER
  const registerUser = async registerData => {
    try {
      const res = await axios.post("/api/users", registerData, config);

      dispatch({ type: REGISTER_SUCCESS, payload: res.data });

      loadUser();
    } catch (err) {
      dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
    }
  };

  // UPLOAD AVATAR
  const uploadAvatar = async formData => {
    try {
      await axios.post("/api/users/me/avatar", formData, formDataConfig);

      dispatch({ type: AVATAR_SUCCESS });

      loadUser();
    } catch (err) {
      dispatch({ type: AVATAR_FAIL, payload: err.response.data.msg });
    }
  };

  // REMOVE AVATAR
  const removeAvatar = async () => {
    try {
      await axios.delete("/api/users/me/avatar");

      dispatch({ type: REMOVE_AVATAR });

      loadUser();
    } catch (err) {
      dispatch({ type: AVATAR_FAIL, payload: err.response.data.msg });
    }
  };

  // CHANGE NAME
  const changeName = async name => {
    try {
      const res = await axios.post("/api/users/me/name", name, config);

      dispatch({ type: NAME_UPDATED, payload: res.data });
    } catch (err) {
      dispatch({ type: UPDATE_FAIL, payload: err.response.data.msg });
    }
  };

  // CHANGE EMAIL
  const changeEmail = async email => {
    try {
      const res = await axios.post("/api/users/me/email", email, config);

      dispatch({ type: EMAIL_UPDATED, payload: res.data });
    } catch (err) {
      dispatch({ type: UPDATE_FAIL, payload: err.response.data.msg });
    }
  };

  // CHANGE PASSWORD
  const changePassword = async passwords => {
    try {
      await axios.post("/api/users/me/password", passwords, config);

      dispatch({ type: PASS_UPDATED });
    } catch (err) {
      dispatch({ type: UPDATE_FAIL, payload: err.response.data.msg });
    }
  };

  // LOGOUT USER
  const logoutUser = () => dispatch({ type: LOGOUT });

  // CLEAR ERRORS
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  // CLEAR SUCCESS
  const clearSuccess = () => dispatch({ type: CLEAR_SUCCESS });

  // SET ADMIN
  const setAdmin = value => dispatch({ type: SET_ADMIN, payload: value });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        isAdmin: state.isAdmin,
        loading: state.loading,
        user: state.user,
        error: state.error,
        success: state.success,
        loadUser,
        loginUser,
        registerUser,
        uploadAvatar,
        removeAvatar,
        changeName,
        changeEmail,
        changePassword,
        setAdmin,
        logoutUser,
        clearErrors,
        clearSuccess
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
