import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";
import RoomsContext from "../../../context/rooms/roomsContext";

const ConfirmRemoveDialog = ({ open, handleClose, student }) => {
  // Context
  const roomsContext = React.useContext(RoomsContext);
  const { current, removeStudent } = roomsContext;

  // Removing Student
  const onConfirm = () => {
    removeStudent(current.code, student.id);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Remove Student</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to remove {student.name}?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmRemoveDialog;
