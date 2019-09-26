import React, { useState } from "react";
import ModalTitle from "./ModalTitle";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  makeStyles,
  TextField
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: -10
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  dialogButtons: {
    padding: theme.spacing(1.5)
  }
}));

const JoinRoomModal = props => {
  const classes = useStyles();

  const { openModal, closeModal } = props;

  const [roomCode, setRoomCode] = useState("");

  const onChange = e => setRoomCode(([e.target.name] = e.target.value));

  return (
    <Dialog onClose={closeModal} open={openModal}>
      <ModalTitle onClose={closeModal}>Join Classroom</ModalTitle>
      <DialogContent dividers>
        <form className={classes.container} autoComplete="off">
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="roomcode"
            value={roomCode}
            onChange={onChange}
            className={classes.textField}
            label="Room Code"
          />
        </form>
      </DialogContent>
      <DialogActions className={classes.dialogButtons}>
        <Button onClick={closeModal} color="primary">
          Cancel
        </Button>
        <Button onClick={closeModal} color="primary">
          Join
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default JoinRoomModal;
