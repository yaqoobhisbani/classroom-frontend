import {
  GET_ROOMS,
  CREATE_ROOM,
  JOIN_ROOM,
  ROOMS_ERROR,
  CLEAR_ERROR,
  CLEAR_SUCCESS,
  LOAD_ROOM,
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
        loading: false,
        success: "The Classroom has been created!"
      };
    case JOIN_ROOM:
      return {
        ...state,
        rooms: [action.payload, ...state.rooms],
        loading: false,
        success: "The Classroom has been joined!"
      };
    case LOAD_ROOM:
      return {
        ...state,
        current: state.rooms.filter(room => room.code === action.payload)[0]
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    case CLEAR_SUCCESS:
      return {
        ...state,
        success: null
      };
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
