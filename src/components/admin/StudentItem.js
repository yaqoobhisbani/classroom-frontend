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

import FolderIcon from "@material-ui/icons/Folder";
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
  // Styles
  const classes = useStyles();

  return (
    <Grid item className={classes.listItem} xs={12} sm="auto">
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
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
            >
              <ConfirmIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete Request" placement="top">
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>
    </Grid>
  );
};

export default StudentItem;
