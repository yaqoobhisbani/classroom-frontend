import React, { useReducer } from "react";
import TaskContext from "./taskContext";
import taskReducer from "./taskReducer";
import axios from "axios";
import { config } from "../../utils/axios";
import {
  CREATE_TASK,
  GET_TASKS,
  REMOVE_TASK,
  RESET_TASKS,
  TASK_ERROR,
  CLEAR_SUCCESS
} from "../types";

const TaskState = props => {
  // Initiasl State
  const initialState = {
    tasks: [],
    loading: true,
    error: null,
    success: null
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  // CREATE TASK
  const createTask = async (code, task) => {
    try {
      const res = await axios.post(`/api/room/${code}/tasks`, task, config);

      dispatch({ type: CREATE_TASK, payload: res.data });
    } catch (err) {
      dispatch({ type: TASK_ERROR, payload: err.response.data.msg });
    }
  };

  // GET TASKS
  const getTasks = async code => {
    try {
      const res = await axios.get(`/api/room/${code}/tasks`, config);

      dispatch({ type: GET_TASKS, payload: res.data });
    } catch (err) {
      dispatch({ type: TASK_ERROR, payload: err.response.data.msg });
    }
  };

  // REMOVE TASK
  const removeTask = () => {};

  // CLEAR SUCCESS
  const clearSuccess = () => dispatch({ type: CLEAR_SUCCESS });

  // RESET TASKS
  const resetTasks = () => dispatch({ type: RESET_TASKS });

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        loading: state.loading,
        error: state.error,
        success: state.success,
        createTask,
        getTasks,
        removeTask,
        resetTasks,
        clearSuccess
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
