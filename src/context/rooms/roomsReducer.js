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
        adminRooms: action.payload.adminRooms,
        joinedRooms: action.payload.joinedRooms,
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
        adminRooms: null,
        joinedRooms: null,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};
