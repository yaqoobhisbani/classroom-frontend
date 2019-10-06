import {
  GET_ROOMS,
  CREATE_ROOM,
  JOIN_ROOM,
  ROOMS_ERROR,
  CLEAR_ERROR,
  RESET_ROOMS
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_ROOMS:
      return {
        ...state,
        rooms: action.payload,
        loading: false
      };
    case CREATE_ROOM:
      return {
        ...state,
        rooms: [action.payload, ...state.rooms],
        loading: false
      };
    case JOIN_ROOM:
      return {};
    case CLEAR_ERROR:
      return {};
    case ROOMS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case RESET_ROOMS:
      return {
        rooms: [],
        loading: true,
        error: null
      };
    default:
      return state;
  }
};
