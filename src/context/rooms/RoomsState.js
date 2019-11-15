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
  REMOVE_STUDENT,
  CLASSNAME_UPDATED,
  SUBJECT_UPDATED,
  DESCRIPTION_UPDATED
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

      dispatch({ type: JOIN_ROOM, payload: res.data.msg });
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
  const removeStudent = async (code, id) => {
    try {
      const res = await axios.delete(`/api/room/${code}/student/${id}`);

      dispatch({ type: REMOVE_STUDENT, payload: res.data });

      getRooms();
    } catch (err) {
      dispatch({ type: ROOMS_ERROR, payload: err.response.data.msg });
    }
  };

  // CHANGE CLASSNAME
  const changeClassName = async (code, classname) => {
    try {
      const res = await axios.put(
        `/api/room/${code}/classname`,
        classname,
        config
      );

      dispatch({ type: CLASSNAME_UPDATED, payload: res.data });

      getRooms();
    } catch (err) {
      dispatch({ type: ROOMS_ERROR, payload: err.response.data.msg });
    }
  };

  // CHANGE SUBJECT
  const changeSubject = async (code, subject) => {
    try {
      const res = await axios.put(`/api/room/${code}/subject`, subject, config);

      dispatch({ type: SUBJECT_UPDATED, payload: res.data });

      getRooms();
    } catch (err) {
      dispatch({ type: ROOMS_ERROR, payload: err.response.data.msg });
    }
  };

  // CHANGE DESCRIPTION
  const changeDescription = async (code, description) => {
    try {
      const res = await axios.put(
        `/api/room/${code}/description`,
        description,
        config
      );

      dispatch({ type: DESCRIPTION_UPDATED, payload: res.data });

      getRooms();
    } catch (err) {
      dispatch({ type: ROOMS_ERROR, payload: err.response.data.msg });
    }
  };

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
        changeClassName,
        changeSubject,
        changeDescription,
        removeStudent
      }}
    >
      {props.children}
    </RoomsContext.Provider>
  );
};

export default RoomsState;
