import React, { useReducer } from "react";
import ChatContext from "./chatContext";
import chatReducer from "./chatReducer";
import { chatURL } from "../../utils/chat";
import io from "socket.io-client";
import { RESET_CHAT, SET_USER, SET_ROOM } from "../types";

// SOCKET IO CLIENT INSTANCE
let socket;

const ChatState = props => {
  // Initial State
  const initialState = {
    room: null,
    messages: [],
    onlineUsers: [],
    connected: false,
    loading: true,
    user: null
  };

  // Attaching Reducer
  const [state, dispatch] = useReducer(chatReducer, initialState);

  // Init Connection
  const initChat = () => {
    socket = io(chatURL);

    socket.on("connection", data => {
      console.log(data);
    });

    socket.emit("add_user", state.room, state.user);
  };

  // Disconnect
  const disconnect = () => {
    socket.disconnect(state.room, state.user);
  };

  // GET MESSAGES

  // GET ONLINE USERS

  // SEND MESSAGE

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
