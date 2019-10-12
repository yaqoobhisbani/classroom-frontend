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
import DeleteIcon from "@material-ui/icons/Delete";
import RoomsContext from "../../context/rooms/roomsContext";

const useStyles = makeStyles(theme => ({
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
  const roomsContext = React.useContext(RoomsContext);
  const { current } = roomsContext;
  const { name, id } = student;
  const avatarURL = `/api/users/${id}/avatar`;
  const isAdmin = current.createdBy === id ? true : false;
  const classes = useStyles();

  const AdminAvatar = (
    <Badge
      color="secondary"
      badgeContent="Admin"
      anchorOrigin={{
        horizontal: "right",
        vertical: "top"
      }}
    >
      <Avatar src={avatarURL} />
    </Badge>
  );

  const NormalAvatar = <Avatar src={avatarURL} />;

  return (
    <Grid item className={classes.listItem} xs={12} sm={4} md="auto">
      <ListItem>
        <ListItemAvatar>{isAdmin ? AdminAvatar : NormalAvatar}</ListItemAvatar>
        <ListItemText>
          <Typography variant="subtitle2">{name}</Typography>
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
