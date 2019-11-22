import {
  CREATE_TASK,
  GET_TASKS,
  REMOVE_TASK,
  RESET_TASKS,
  TASK_ERROR
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      };
    case GET_TASKS:
      return {};
    case REMOVE_TASK:
      return {};
    case RESET_TASKS:
      return {};
    case TASK_ERROR:
      return {};
    default:
      return state;
  }
};
