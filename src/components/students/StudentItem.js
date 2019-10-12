import React from "react";
import {
  Grid,
  ListItem,
  ListItemAvatar,
  Badge,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  makeStyles
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(theme => ({
  listItem: {
    "&hover": {
      background: "#fff"
    }
  },
  badge: {
    margin: theme.spacing(2)
  }
}));

const StudentItem = ({ student }) => {
  const classes = useStyles();

  return (
    <Grid item>
      <ListItem className={classes.listItem}>
        <ListItemAvatar>
          <Badge
            color="secondary"
            badgeContent="Admin"
            anchorOrigin={{
              horizontal: "right",
              vertical: "top"
            }}
            className={classes.badge}
          >
            <Avatar>
              <FolderIcon />
            </Avatar>
          </Badge>
        </ListItemAvatar>
        <ListItemText>
          <Typography variant="subtitle2">{student}</Typography>
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="remove">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Grid>
  );
};

export default StudentItem;
