import React from "react";
import {
  Avatar,
  Badge,
  Paper,
  Tooltip,
  Typography,
  Grid,
  makeStyles
} from "@material-ui/core";

import RoomsContext from "../../../context/rooms/roomsContext";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(1)
  },
  paper: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginTop: 3,
    marginBottom: 5
  },
  senderName: {
    color: "#9e9e9e",
    fontWeight: 400
  }
}));

const MessageReceived = ({ message }) => {
  // Context
  const roomsContext = React.useContext(RoomsContext);
  const { current } = roomsContext;
  const isAdmin = current.createdBy === message.user.id ? true : false;

  // Styles
  const classes = useStyles();
  const avatarURL = `/api/users/${message.user.id}/avatar`;

  // Normal Avatar
  const NormalAvatar = <Avatar src={avatarURL} />;

  // Admin Avatar
  const AdminAvatar = (
    <Badge
      color="secondary"
      badgeContent="Admin"
      anchorOrigin={{
        horizontal: "left",
        vertical: "top"
      }}
    >
      <Avatar src={avatarURL} />
    </Badge>
  );

  return (
    <Grid container spacing={1} className={classes.container}>
      <Grid item xs={2} sm={1}>
        <Grid container justify="center">
          <Grid item>{isAdmin ? AdminAvatar : NormalAvatar}</Grid>
        </Grid>
      </Grid>

      <Grid item xs>
        <Typography variant="body2" className={classes.senderName}>
          {message.user.name}
        </Typography>
        <Grid container>
          <Tooltip title={message.time} placement="right">
            <Paper className={classes.paper}>
              <Typography variant="body2" className={classes.text}>
                {message.text}
              </Typography>
            </Paper>
          </Tooltip>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MessageReceived;
