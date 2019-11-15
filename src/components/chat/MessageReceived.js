import React from "react";
import {
  Avatar,
  Badge,
  Paper,
  Divider,
  Typography,
  Grid,
  makeStyles
} from "@material-ui/core";

import RoomsContext from "../../context/rooms/roomsContext";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2)
  },
  text: {
    paddingTop: theme.spacing(1)
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
        horizontal: "right",
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
        <Grid container>
          <Paper className={classes.paper}>
            <Typography variant="subtitle2" gutterBottom>
              {message.user.name}
              <span style={{ fontWeight: 300 }}> | {message.time}</span>
            </Typography>
            <Divider />
            <Typography variant="body2" className={classes.text}>
              {message.text}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MessageReceived;
