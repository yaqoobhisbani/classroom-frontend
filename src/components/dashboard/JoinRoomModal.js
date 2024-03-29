import React, { useState, useContext } from "react";
import ModalTitle from "./ModalTitle";
import RoomsContext from "../../context/rooms/roomsContext";
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
  const roomsContext = useContext(RoomsContext);
  const classes = useStyles();
  const { openModal, closeModal } = props;

  const [roomCode, setRoomCode] = useState("");

  const emptyError = {
    isInvalid: false,
    msg: null
  };

  const [codeError, setCodeError] = useState(emptyError);

  const onClose = () => {
    setCodeError(emptyError);
    setRoomCode("");
    closeModal();
  };

  const onCodeChange = e => {
    e.preventDefault();
    setRoomCode(e.target.value);
    if (e.target.value.length === 6) {
      setCodeError(emptyError);
    } else {
      setCodeError({
        isInvalid: true,
        msg: "Invalid Classroom Code"
      });
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    if (roomCode.length === 6) {
      roomsContext.joinRoom(roomCode);
      onClose();
    } else {
      setCodeError({
        isInvalid: true,
        msg: "Invalid Room Code"
      });
    }
  };

  return (
    <Dialog onClose={closeModal} open={openModal}>
      <ModalTitle onClose={closeModal}>Join Classroom</ModalTitle>
      <DialogContent dividers>
        <form
          onSubmit={onSubmit}
          className={classes.container}
          autoComplete="off"
        >
          <TextField
            error={codeError.isInvalid}
            variant="outlined"
            margin="normal"
            fullWidth
            name="roomcode"
            value={roomCode}
            onChange={onCodeChange}
            className={classes.textField}
            label={codeError.msg ? codeError.msg : "Room Code"}
          />

          <Button style={{ display: "none" }} type="submit">
            Submit
          </Button>
        </form>
      </DialogContent>
      <DialogActions className={classes.dialogButtons}>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onSubmit} color="primary">
          Join
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default JoinRoomModal;
