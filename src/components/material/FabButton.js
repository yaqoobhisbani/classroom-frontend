import React, { Fragment } from "react";
import { Fab, makeStyles } from "@material-ui/core";
import UploadIcon from "@material-ui/icons/Publish";
import UploadModal from "./UploadModal";

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
      <Fab
        onClick={handleOpen}
        color="secondary"
        className={classes.fab}
        aria-haspopup="true"
      >
        <UploadIcon />
      </Fab>
      <UploadModal open={open} onClose={handleClose} />
    </Fragment>
  );
};

export default FabButton;
