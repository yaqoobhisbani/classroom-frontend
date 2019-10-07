import React, { useState, useContext } from "react";
import RoomsContext from "../../context/rooms/roomsContext";
import ModalTitle from "./ModalTitle";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  makeStyles
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

const CreateRoomModal = props => {
  const roomsContext = useContext(RoomsContext);
  const classes = useStyles();

  const { openModal, closeModal } = props;

  const emptyRoom = {
    classname: "",
    subject: "",
    description: ""
  };

  const [roomInfo, setRoomInfo] = useState(emptyRoom);
  const { classname, subject, description } = roomInfo;

  const onChange = e =>
    setRoomInfo({ ...roomInfo, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (classname.length > 0 && subject.length > 0 && description.length > 0) {
      roomsContext.createRoom({
        classname,
        subject,
        description
      });
      closeModal();
      setRoomInfo(emptyRoom);
    }
  };

  return (
    <Dialog onClose={closeModal} open={openModal}>
      <ModalTitle onClose={closeModal}>Create Classroom</ModalTitle>
      <DialogContent dividers>
        <form
          onSubmit={onSubmit}
          className={classes.container}
          autoComplete="off"
        >
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="classname"
            required
            value={classname}
            onChange={onChange}
            className={classes.textField}
            label="Class Name"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="subject"
            required
            value={subject}
            onChange={onChange}
            className={classes.textField}
            label="Subject"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="description"
            required
            value={description}
            onChange={onChange}
            className={classes.textField}
            label="Description"
          />

          <Button style={{ display: "none" }} type="submit">
            Submit
          </Button>
        </form>
      </DialogContent>
      <DialogActions className={classes.dialogButtons}>
        <Button onClick={closeModal} color="primary">
          Cancel
        </Button>
        <Button onClick={onSubmit} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateRoomModal;
