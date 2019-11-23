import {
  CREATE_TASK,
  GET_TASKS,
  REMOVE_TASK,
  RESET_TASKS,
  TASK_ERROR,
  CLEAR_SUCCESS
} from "../types";
import moment from "moment";

export default (state, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        tasks: [
          {
            ...action.payload,
            shortDate: moment(action.payload.dueDate).format("DD-MM-YYYY"),
            fullDate: moment(action.payload.dueDate).format("DD MMMM YYYY")
          },
          ...state.tasks
        ],
        success: "The task has been created!"
      };
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload.map(task => {
          const newTask = {
            ...task,
            shortDate: moment(task.dueDate).format("DD-MM-YYYY"),
            fullDate: moment(task.dueDate).format("DD MMMM YYYY")
          };

          return newTask;
        }),
        loading: false
      };
    case REMOVE_TASK:
      return {
        ...state,
        success: "The task has been removed!"
      };
    case TASK_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case CLEAR_SUCCESS:
      return {
        ...state,
        success: null
      };
    case RESET_TASKS:
      return {
        tasks: [],
        loading: true,
        error: null,
        success: null
      };
    default:
      return state;
  }
};
