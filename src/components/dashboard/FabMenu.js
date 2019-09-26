import React, { Fragment, useState } from "react";
import { Fab, makeStyles, MenuItem, Menu } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CreateRoomModal from "./CreateRoomModal";
import JoinRoomModal from "./JoinRoomModal";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    position: "absolute",
    bottom: theme.spacing(3),
    right: theme.spacing(3)
  }
}));

const FabButton = () => {
  const classes = useStyles();

  const [fabAnchorEl, setFabAnchorEl] = useState(null);
  const [createRoomOpen, setCreateRoomOpen] = useState(false);
  const [joinRoomOpen, setJoinRoomOpen] = useState(false);

  const fabClick = e => setFabAnchorEl(e.currentTarget);
  const fabClose = () => setFabAnchorEl(null);

  // CREATE ROOM MODAL - OPEN & CLOSE
  const createRoomClick = () => {
    setCreateRoomOpen(true);
    fabClose();
  };

  const createRoomClose = () => setCreateRoomOpen(false);

  // JOIN ROOM MODAL - OPEN & CLOSE
  const joinRoomClick = () => {
    setJoinRoomOpen(true);
    fabClose();
  };

  const joinRoomClose = () => setJoinRoomOpen(false);

  return (
    <Fragment>
      <Fab
        color="secondary"
        className={classes.fab}
        aria-haspopup="true"
        onClick={fabClick}
      >
        <AddIcon />
      </Fab>
      <Menu
        anchorEl={fabAnchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        transformOrigin={{ vertical: "bottom", horizontal: "center" }}
        keepMounted
        open={Boolean(fabAnchorEl)}
        onClose={fabClose}
      >
        <MenuItem onClick={joinRoomClick}>Join Classroom</MenuItem>
        <MenuItem onClick={createRoomClick}>Create Classroom</MenuItem>
      </Menu>

      <CreateRoomModal
        openModal={createRoomOpen}
        closeModal={createRoomClose}
      />
      <JoinRoomModal openModal={joinRoomOpen} closeModal={joinRoomClose} />
    </Fragment>
  );
};

export default FabButton;
