import React from "react";
import ReactDOM from "react-dom";
import AuthState from "./context/auth/AuthState";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./App";

ReactDOM.render(
  <AuthState>
    <App />
    <CssBaseline />
  </AuthState>,
  document.getElementById("root")
);
