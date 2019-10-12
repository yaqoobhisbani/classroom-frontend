import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  TextField,
  DialogContent,
  Button
} from "@material-ui/core";

const AddPersonModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add Student</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          variant="outlined"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
        />
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

export default AddPersonModal;
