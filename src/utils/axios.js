import axios from "axios";

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export const config = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const formDataConfig = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
