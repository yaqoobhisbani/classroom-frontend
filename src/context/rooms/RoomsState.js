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
  RESET_ROOMS
} from "../types";

const RoomsState = props => {
  // Initial State
  const initialState = {
    adminRooms: null,
    joinedRooms: null,
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
      console.log(err);
    }
  };

  // CREATE ROOM
  const createRoom = async () => {};

  // JOIN ROOM
  const joinRoom = async () => {};

  // CLEAR ERROR
  const clearError = async () => {};

  // RESET STATE
  const resetRooms = async () => dispatch({ type: RESET_ROOMS });

  return (
    <RoomsContext.Provider
      value={{
        adminRooms: state.adminRooms,
        joinedRooms: state.joinedRooms,
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
