import React, { useReducer } from "react";
import ChatContext from "./chatContext";
import chatReducer from "./chatReducer";
import { chatURL } from "../../utils/chat";
import io from "socket.io-client";
import {
  RESET_CHAT,
  SET_USER,
  SET_ROOM,
  SET_HISTORY,
  SET_ONLINE_USERS,
  NEW_MESSAGE
} from "../types";

// SOCKET IO CLIENT INSTANCE
let socket;

const ChatState = props => {
  // Initial State
  const initialState = {
    room: null,
    messages: [],
    onlineUsers: [],
    loading: true,
    user: null
  };

  // Attaching Reducer
  const [state, dispatch] = useReducer(chatReducer, initialState);

  // Init Connection
  const initChat = () => {
    // Initializing Connection
    socket = io(chatURL);
    socket.emit("join", { room: state.room, user: state.user });

    // Event: History
    socket.on("history", history => {
      console.log(history);
      dispatch({ type: SET_HISTORY, payload: history });
    });

    // Event: Online Users
    socket.on("onlineusers", onlineusers => {
      console.log(onlineusers);
      dispatch({ type: SET_ONLINE_USERS, payload: onlineusers });
    });

    // Event: New Message
    socket.on("newMessage", message => {
      dispatch({ type: NEW_MESSAGE, payload: message });
    });
  };

  // Disconnect
  const disconnect = () => {
    socket.disconnect();
  };

  // SEND MESSAGE
  const sendMessage = message => {
    socket.emit("sendMessage", message);
  };

  // SET ROOM
  const setRoom = room => dispatch({ type: SET_ROOM, payload: room });

  // SET USER
  const setUser = user => dispatch({ type: SET_USER, payload: user });

  // RESET CHAT
  const resetChat = () => dispatch({ type: RESET_CHAT });

  return (
    <ChatContext.Provider
      value={{
        messages: state.messages,
        onlineUsers: state.onlineUsers,
        connected: state.connected,
        initChat,
        disconnect,
        sendMessage,
        setRoom,
        setUser,
        resetChat
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatState;
