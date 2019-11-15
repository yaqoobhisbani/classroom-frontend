import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";

import RoomsContext from "../../context/rooms/roomsContext";

const DeleteRoomDialog = ({ open, handleClose }) => {
  // Context
  const roomsContext = React.useContext(RoomsContext);
  const { current } = roomsContext;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Delete {current.classname} Classroom?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete {current.classname} Classroom? <br />
          <ul>
            <li>It will permanently delete {current.classname} Classroom.</li>
            <li>
              Material, Tasks & Messages of this Classroom will also be deleted.
            </li>
            <li>This action is not reversible!</li>
          </ul>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteRoomDialog;
