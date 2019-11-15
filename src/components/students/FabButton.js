import React, { Fragment } from "react";
import { Fab, makeStyles, Tooltip } from "@material-ui/core";
import AddPersonIcon from "@material-ui/icons/PersonAdd";
import AddPersonModal from "./AddPersonModal";

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
      <Tooltip title="Add Student">
        <Fab
          onClick={handleOpen}
          color="secondary"
          className={classes.fab}
          aria-haspopup="true"
        >
          <AddPersonIcon />
        </Fab>
      </Tooltip>
      <AddPersonModal open={open} onClose={handleClose} />
    </Fragment>
  );
};

export default FabButton;
