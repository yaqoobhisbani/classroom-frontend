import {
  RESET_CHAT,
  SET_USER,
  SET_ROOM,
  SET_HISTORY,
  SET_ONLINE_USERS,
  NEW_MESSAGE
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_HISTORY:
      return {
        ...state,
        messages: action.payload.history
      };
    case SET_ONLINE_USERS:
      return {
        ...state,
        onlineUsers: action.payload.onlineUsers
      };
    case SET_ROOM:
      return {
        ...state,
        room: action.payload
      };
    case NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case RESET_CHAT:
      return {
        room: null,
        message: [],
        onlineUsers: [],
        connected: false,
        loading: true,
        user: null
      };
    default:
      return state;
  }
};
