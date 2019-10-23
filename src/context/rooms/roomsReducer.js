import {
  GET_ROOMS,
  CREATE_ROOM,
  JOIN_ROOM,
  ROOMS_ERROR,
  CLEAR_ERROR,
  CLEAR_SUCCESS,
  CLEAR_CURRENT,
  LOAD_ROOM,
  RESET_ROOMS,
  ADD_STUDENT,
  REMOVE_STUDENT
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
    case ADD_STUDENT:
      return {
        ...state,
        current: action.payload,
        loading: false,
        success: "The student has been added!"
      };
    case REMOVE_STUDENT:
      return {
        ...state,
        current: action.payload,
        loading: false,
        success: "The student has been removed!"
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
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
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
        current: null,
        error: null,
        success: null
      };
    default:
      return state;
  }
};
