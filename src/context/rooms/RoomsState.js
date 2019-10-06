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
  ROOMS_ERROR,
  RESET_ROOMS
} from "../types";

const RoomsState = props => {
  // Initial State
  const initialState = {
    rooms: [],
    loading: true,
    error: null
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
      dispatch({ type: ROOMS_ERROR, payload: err.response.data });
    }
  };

  // JOIN ROOM
  const joinRoom = async () => {};

  // CLEAR ERROR
  const clearError = async () => {};

  // RESET STATE
  const resetRooms = async () => dispatch({ type: RESET_ROOMS });

  return (
    <RoomsContext.Provider
      value={{
        rooms: state.rooms,
        loading: state.loading,
        error: state.error,
        getRooms,
        createRoom,
        joinRoom,
        clearError,
        resetRooms
      }}
    >
      {props.children}
    </RoomsContext.Provider>
  );
};

export default RoomsState;
