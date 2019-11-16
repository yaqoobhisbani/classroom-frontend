import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Grid,
  makeStyles,
  Tooltip
} from "@material-ui/core";

import RoomsContext from "../../../context/rooms/roomsContext";
import DeleteIcon from "@material-ui/icons/Delete";
import ConfirmIcon from "@material-ui/icons/Check";

const useStyles = makeStyles(theme => ({
  listItemText: {
    marginRight: 40
  },
  listItem: {
    cursor: "pointer",
    transition: "all 0.4s ease-out",
    borderRadius: 5,
    "&:hover": {
      background: "#fff",
      boxShadow: "3px 5px 10px 0px #dedede"
    }
  }
}));

const StudentItem = ({ student }) => {
  // Context
  const roomsContext = React.useContext(RoomsContext);
  const { current } = roomsContext;

  // Styles
  const classes = useStyles();
  const avatarURL = `/api/users/${student.id}/avatar`;

  // Accept Request
  const acceptRequest = () => {
    roomsContext.approveRequest(current.code, { id: student.id });
  };

  // Decline Request
  const declineRequest = () => {
    roomsContext.denyRequest(current.code, student.id);
  };

  return (
    <Grid item className={classes.listItem} xs={12} sm="auto">
      <ListItem>
        <ListItemAvatar>
          <Avatar src={avatarURL} />
        </ListItemAvatar>
        <ListItemText
          primary={student.name}
          secondary="wants to join this classroom?"
          className={classes.listItemText}
        />
        <ListItemSecondaryAction>
          <Tooltip title="Accept Request" placement="top">
            <IconButton
              edge="end"
              aria-label="confirm"
              className={classes.confirmIcon}
              onClick={acceptRequest}
            >
              <ConfirmIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete Request" placement="top">
            <IconButton edge="end" aria-label="delete" onClick={declineRequest}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>
    </Grid>
  );
};

export default StudentItem;
