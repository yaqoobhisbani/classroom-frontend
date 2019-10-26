import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";

import MaterialContext from "../../context/material/materialContext";

const ConfirmDeleteDialog = ({ open, handleClose, file }) => {
  const materialContext = React.useContext(MaterialContext);
  const { deleteFile } = materialContext;

  const onConfirm = () => {
    deleteFile(file.downloadLink, file._id);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Remove File</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to remove {file.originalName}?
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

export default ConfirmDeleteDialog;
