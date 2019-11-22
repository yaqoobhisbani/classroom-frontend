import React, { Fragment } from "react";
import { Snackbar } from "@material-ui/core";
import AlertWrapper from "./AlertWrapper";

// Contexts
import AlertContext from "../../context/alerts/alertContext";
import AuthContext from "../../context/auth/authContext";
import RoomsContext from "../../context/rooms/roomsContext";
import MaterialContext from "../../context/material/materialContext";
import TaskContext from "../../context/tasks/taskContext";

const Alerts = () => {
  // Context
  const alertContext = React.useContext(AlertContext);
  const authContext = React.useContext(AuthContext);
  const roomsContext = React.useContext(RoomsContext);
  const materialContext = React.useContext(MaterialContext);
  const taskContext = React.useContext(TaskContext);
  const { alert, isAvailable, removeAlert } = alertContext;

  // State
  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Clear Alert State
  const clearAlert = () => removeAlert();

  // Component Effects
  React.useEffect(() => {
    if (isAvailable) {
      handleClick();
    }
    // eslint-dsiable-next-line
  }, [isAvailable]);

  // Displaying Rooms Context Success Alerts!
  React.useEffect(() => {
    if (roomsContext.success) {
      alertContext.showAlert("success", roomsContext.success);
      roomsContext.clearSuccess();
    }
    // eslint-disable-next-line
  }, [roomsContext.success]);

  // Displaying Rooms Context Error Alerts!
  React.useEffect(() => {
    if (roomsContext.error) {
      alertContext.showAlert("error", roomsContext.error);
      roomsContext.clearError();
    }
    // eslint-disable-next-line
  }, [roomsContext.error]);

  // Displaying Auth Context Success Alerts
  React.useEffect(() => {
    if (authContext.success) {
      alertContext.showAlert("success", authContext.success);
      authContext.clearSuccess();
    }
    // eslint-disable-next-line
  }, [authContext.success]);

  // Displaying Auth Context Error Alerts
  React.useEffect(() => {
    if (authContext.error) {
      alertContext.showAlert("error", authContext.error);
      authContext.clearErrors();
    }
    // eslint-disable-next-line
  }, [authContext.error]);

  // Displaying Material Context Success Alerts
  React.useEffect(() => {
    if (materialContext.success) {
      alertContext.showAlert("success", materialContext.success);
      materialContext.clearSuccess();
    }
    // eslint-disable-next-line
  }, [materialContext.success]);

  // Displaying Material Context Error Alerts
  React.useEffect(() => {
    if (materialContext.error) {
      alertContext.showAlert("error", materialContext.error);
      materialContext.clearError();
    }
    // eslint-disable-next-line
  }, [materialContext.error]);

  // Displaying Task Context Success Alerts
  React.useEffect(() => {
    if (taskContext.success) {
      alertContext.showAlert("success", taskContext.success);
      taskContext.clearSuccess();
    }
    // eslint-disable-next-line
  }, [taskContext.success]);

  return (
    <Fragment>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        autoHideDuration={2500}
        open={open}
        onClose={handleClose}
        onExited={clearAlert}
      >
        <AlertWrapper
          onClose={handleClose}
          variant={alert.variant}
          message={alert.msg}
        />
      </Snackbar>
    </Fragment>
  );
};

export default Alerts;
