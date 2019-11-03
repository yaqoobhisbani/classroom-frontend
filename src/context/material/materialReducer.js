import {
  GET_MATERIAL,
  UPLOAD_FILE,
  DELETE_FILE,
  FILE_ERROR,
  CLEAR_SUCCESS,
  CLEAR_ERROR,
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
        loading: false,
        success: "The file has been uploaded!"
      };
    case DELETE_FILE:
      return {
        ...state,
        material: state.material.filter(item => item._id !== action.payload),
        loading: false,
        success: "The file has been deleted!"
      };
    case FILE_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case CLEAR_SUCCESS:
      return {
        ...state,
        success: null
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
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
