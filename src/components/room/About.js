import React, { Fragment } from "react";
import {
  Container,
  Paper,
  Typography,
  Button,
  makeStyles
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AuthContext from "../../context/auth/authContext";
import AboutPanels from "../about/AboutPanels";
import DeleteRoomDialog from "../about/DeleteRoomDialog";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2)
  },
  deleteBtn: {
    marginTop: theme.spacing(2)
  }
}));

const About = () => {
  // Context
  const authContext = React.useContext(AuthContext);
  const { isAdmin } = authContext;

  // Confirm Delete Modal State
  const [confirmModal, setConfirmModal] = React.useState(false);
  const handleOpenConfirm = () => setConfirmModal(true);
  const handleCloseConfirm = () => setConfirmModal(false);

  // Styles
  const classes = useStyles();

  return (
    <Container component="main" className={classes.container}>
      <Paper className={classes.paper}>
        <Typography variant="h5">About This Classroom</Typography>
      </Paper>

      <AboutPanels />

      {isAdmin ? (
        <Fragment>
          <Button
            variant="contained"
            color="secondary"
            className={classes.deleteBtn}
            startIcon={<DeleteIcon />}
            onClick={handleOpenConfirm}
          >
            Delete Classroom
          </Button>
          <DeleteRoomDialog
            open={confirmModal}
            handleClose={handleCloseConfirm}
          />
        </Fragment>
      ) : null}
    </Container>
  );
};

export default About;
