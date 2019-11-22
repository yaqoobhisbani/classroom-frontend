import React, { Fragment } from "react";
import { Tooltip, Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import AddTaskModal from "./AddTaskModal";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3)
  }
}));

const FabButton = () => {
  // State
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Styles
  const classes = useStyles();

  return (
    <Fragment>
      <Tooltip title="Add Task">
        <Fab
          onClick={handleOpen}
          color="secondary"
          className={classes.fab}
          aria-haspopup="true"
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <AddTaskModal open={open} onClose={handleClose} />
    </Fragment>
  );
};

export default FabButton;
