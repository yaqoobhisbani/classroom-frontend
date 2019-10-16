import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  TextField,
  DialogContent,
  Button
} from "@material-ui/core";

const UploadModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Upload a File</DialogTitle>
      <DialogContent>
        <TextField type="file" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onClose} color="primary">
          Add Student
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UploadModal;
