import React from "react";
import ReactDOM from "react-dom";
import AuthState from "./context/auth/AuthState";
import RoomsState from "./context/rooms/RoomsState";
import AlertState from "./context/alerts/AlertState";
import MaterialState from "./context/material/MaterialState";
import ChatState from "./context/chat/ChatState";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./App";

ReactDOM.render(
  <AuthState>
    <RoomsState>
      <MaterialState>
        <ChatState>
          <AlertState>
            <App />
            <CssBaseline />
          </AlertState>
        </ChatState>
      </MaterialState>
    </RoomsState>
  </AuthState>,
  document.getElementById("root")
);
