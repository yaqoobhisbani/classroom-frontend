import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  TextField,
  DialogContent,
  Button
} from "@material-ui/core";

import RoomsContext from "../../context/rooms/roomsContext";

const AddPersonModal = ({ open, onClose }) => {
  const roomsContext = React.useContext(RoomsContext);
  const { current, addStudent } = roomsContext;

  // Empty Error Object
  const emptyError = {
    isInvalid: false,
    msg: null
  };

  const [email, setEmail] = React.useState({ newemail: "" });
  const [error, setError] = React.useState(emptyError);

  const onEmailChange = e => {
    setEmail({ newemail: e.target.value });
    if (e.target.value.includes("@") && e.target.value.includes(".")) {
      setError(emptyError);
    } else {
      setError({ isInvalid: true, msg: "Invalid Email Address!" });
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    if (error.isInvalid === false) {
      addStudent(current.code, email);
    }
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add Student</DialogTitle>
      <DialogContent>
        <form id="add-student" onSubmit={onSubmit}>
          <TextField
            error={error.isInvalid}
            variant="outlined"
            name="email"
            id="email"
            label={error.msg ? error.msg : "Email Address"}
            type="email"
            onChange={onEmailChange}
            fullWidth
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button type="submit" form="add-student" color="primary">
          Add Student
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPersonModal;
