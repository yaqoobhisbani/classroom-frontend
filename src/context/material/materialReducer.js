import {
  GET_MATERIAL,
  UPLOAD_FILE,
  DELETE_FILE,
  FILE_ERROR,
  RESET_MATERIAL
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_MATERIAL:
      return {
        ...state,
        material: action.payload,
        loading: false
      };
    case UPLOAD_FILE:
      return {
        ...state,
        material: [action.payload, ...state.material],
        loading: false
      };
    case DELETE_FILE:
      return {
        ...state,
        material: state.material.filter(item => item._id !== action.payload),
        loading: false
      };
    case FILE_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case RESET_MATERIAL:
      return {
        material: [],
        loading: true,
        error: null
      };
    default:
      return state;
  }
};
