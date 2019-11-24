import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";
import { withRouter } from "react-router-dom";

import RoomsContext from "../../../context/rooms/roomsContext";

const DeleteRoomDialog = ({ open, handleClose, history }) => {
  // Context
  const roomsContext = React.useContext(RoomsContext);
  const { current, deleteRoom } = roomsContext;

  // On Remove
  const onRemove = () => {
    deleteRoom(current.code);
    history.push("/dashboard");
    handleClose();
  };

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
        <Button onClick={onRemove} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withRouter(DeleteRoomDialog);
