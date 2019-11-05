import { RESET_CHAT, SET_USER, SET_ROOM } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_ROOM:
      return {
        ...state,
        room: action.payload
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
