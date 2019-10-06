import {
  GET_ROOMS,
  CREATE_ROOM,
  JOIN_ROOM,
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
      return {};
    case JOIN_ROOM:
      return {};
    case CLEAR_ERROR:
      return {};
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
