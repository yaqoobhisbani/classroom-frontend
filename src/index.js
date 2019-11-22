import React from "react";
import ReactDOM from "react-dom";
import AuthState from "./context/auth/AuthState";
import RoomsState from "./context/rooms/RoomsState";
import AlertState from "./context/alerts/AlertState";
import MaterialState from "./context/material/MaterialState";
import TaskState from "./context/tasks/TaskState";
import ChatState from "./context/chat/ChatState";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./App";

ReactDOM.render(
  <AuthState>
    <RoomsState>
      <MaterialState>
        <TaskState>
          <ChatState>
            <AlertState>
              <App />
              <CssBaseline />
            </AlertState>
          </ChatState>
        </TaskState>
      </MaterialState>
    </RoomsState>
  </AuthState>,
  document.getElementById("root")
);
