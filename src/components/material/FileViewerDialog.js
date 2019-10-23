import React from "react";
import {
  Dialog,
  AppBar,
  Toolbar,
  Slide,
  Button,
  IconButton,
  Typography,
  makeStyles
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

import MaterialContext from "../../context/material/materialContext";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FileViewerDialog = ({ file, open, handleClose }) => {
  const materialContext = React.useContext(MaterialContext);
  const classes = useStyles();

  const onDownload = () => {
    materialContext.downloadFile(file.downloadLink, file.originalName);
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {file.originalName}
          </Typography>
          <Button color="inherit" onClick={onDownload}>
            Download
          </Button>
        </Toolbar>
      </AppBar>
      {/* IFRAME GOES HERE */}
    </Dialog>
  );
};

export default FileViewerDialog;
