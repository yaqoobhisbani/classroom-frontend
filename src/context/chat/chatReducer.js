import {
  RESET_CHAT,
  RESET_MESSAGES,
  SET_USER,
  SET_ROOM,
  SET_HISTORY,
  SET_ONLINE_USERS,
  NEW_MESSAGE
} from "../types";
import moment from "moment";

export default (state, action) => {
  switch (action.type) {
    case SET_HISTORY:
      return {
        ...state,
        messages: action.payload.history.map(message => {
          const newMessage = {
            ...message,
            time:
              moment(message.time).format("DD MMM YYYY") +
              " | " +
              moment(message.time).format("LT")
          };

          return newMessage;
        })
      };
    case SET_ONLINE_USERS:
      return {
        ...state,
        onlineUsers: action.payload.onlineUsers,
        loading: false
      };
    case SET_ROOM:
      return {
        ...state,
        room: action.payload
      };
    case NEW_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            ...action.payload,
            time:
              moment(action.payload.time).format("YYYY-MM-DD") +
              " | " +
              moment(action.payload.time).format("LT")
          }
        ]
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case RESET_MESSAGES:
      return {
        ...state,
        messages: [],
        onlineUsers: [],
        loading: true
      };
    case RESET_CHAT:
      return {
        room: null,
        messages: [],
        onlineUsers: [],
        loading: true,
        user: null
      };
    default:
      return state;
  }
};
