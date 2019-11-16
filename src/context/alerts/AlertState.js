import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { SHOW_ALERT, REMOVE_ALERT } from "../types";

const AlertState = props => {
  const initialState = {
    alert: {
      variant: null,
      msg: null
    },
    isAvailable: false
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // SHOW ALERT
  const showAlert = (variant, msg) => {
    dispatch({ type: SHOW_ALERT, payload: { variant, msg } });
  };

  // REMOVE ALERT
  const removeAlert = () => dispatch({ type: REMOVE_ALERT });

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        isAvailable: state.isAvailable,
        showAlert,
        removeAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
