import React, { useState } from "react";
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
  const classes = useStyles();

  const { openModal, closeModal } = props;

  const [roomInfo, setRoomInfo] = useState({
    classname: "",
    subject: "",
    description: ""
  });

  const onChange = e =>
    setRoomInfo({ ...roomInfo, [e.target.name]: e.target.value });

  return (
    <Dialog onClose={closeModal} open={openModal}>
      <ModalTitle onClose={closeModal}>Create Classroom</ModalTitle>
      <DialogContent dividers>
        <form className={classes.container} autoComplete="off">
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="classname"
            value={roomInfo.classname}
            onChange={onChange}
            className={classes.textField}
            label="Class Name"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="subject"
            value={roomInfo.subject}
            onChange={onChange}
            className={classes.textField}
            label="Subject"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="description"
            value={roomInfo.description}
            onChange={onChange}
            className={classes.textField}
            label="Description"
          />
        </form>
      </DialogContent>
      <DialogActions className={classes.dialogButtons}>
        <Button onClick={closeModal} color="primary">
          Cancel
        </Button>
        <Button onClick={closeModal} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateRoomModal;
