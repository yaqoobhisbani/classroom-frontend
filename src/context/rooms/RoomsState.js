import React, { useReducer } from "react";
import RoomsContext from "./roomsContext";
import roomsReducer from "./roomsReducer";
import axios from "axios";
import { config } from "../../utils/axios";
import {
  GET_ROOMS,
  CREATE_ROOM,
  JOIN_ROOM,
  CLEAR_ERROR,
  CLEAR_SUCCESS,
  ROOMS_ERROR,
  LOAD_ROOM,
  RESET_ROOMS,
  CLEAR_CURRENT,
  ADD_STUDENT,
  REMOVE_STUDENT
} from "../types";

const RoomsState = props => {
  // Initial State
  const initialState = {
    rooms: [],
    loading: true,
    current: null,
    error: null,
    success: null
  };

  // Attaching Reducer
  const [state, dispatch] = useReducer(roomsReducer, initialState);

  // GET ROOMS
  const getRooms = async () => {
    try {
      const res = await axios.get("/api/classrooms");

      dispatch({ type: GET_ROOMS, payload: res.data });
    } catch (err) {
      dispatch({ type: ROOMS_ERROR, payload: err.response.data });
    }
  };

  // CREATE ROOM
  const createRoom = async roomData => {
    try {
      const res = await axios.post("/api/classrooms", roomData, config);

      dispatch({ type: CREATE_ROOM, payload: res.data });
    } catch (err) {
      dispatch({ type: ROOMS_ERROR, payload: err.response.data.msg });
    }
  };

  // JOIN ROOM
  const joinRoom = async code => {
    try {
      const res = await axios.put(`/api/classrooms/${code}`);

      dispatch({ type: JOIN_ROOM, payload: res.data });
    } catch (err) {
      dispatch({ type: ROOMS_ERROR, payload: err.response.data.msg });
    }
  };

  // ADD STUDENT
  const addStudent = async (code, email) => {
    try {
      const res = await axios.post(`/api/room/${code}/students`, email, config);

      dispatch({ type: ADD_STUDENT, payload: res.data });

      getRooms();
    } catch (err) {
      dispatch({ type: ROOMS_ERROR, payload: err.response.data.msg });
    }
  };

  // REMOVE STUDENT
  const removeStudent = async () => {};

  // LOAD ROOM
  const loadRoom = async code => dispatch({ type: LOAD_ROOM, payload: code });

  // CLEAR ERROR
  const clearError = () => dispatch({ type: CLEAR_ERROR });

  // CLEAR SUCCESS
  const clearSuccess = () => dispatch({ type: CLEAR_SUCCESS });

  // CLEAR CURRENT
  const clearCurrent = () => dispatch({ type: CLEAR_CURRENT });

  // RESET STATE
  const resetRooms = () => dispatch({ type: RESET_ROOMS });

  return (
    <RoomsContext.Provider
      value={{
        rooms: state.rooms,
        loading: state.loading,
        current: state.current,
        error: state.error,
        success: state.success,
        getRooms,
        createRoom,
        joinRoom,
        clearError,
        clearSuccess,
        clearCurrent,
        loadRoom,
        resetRooms,
        addStudent,
        removeStudent
      }}
    >
      {props.children}
    </RoomsContext.Provider>
  );
};

export default RoomsState;
