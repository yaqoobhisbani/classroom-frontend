import axios from "axios";

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
    console.log("Token is set in Axios header");
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export const config = {
  headers: {
    "Content-Type": "application/json"
  }
};
