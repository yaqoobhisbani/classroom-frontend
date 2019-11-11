import React from "react";
import {
  Avatar,
  Paper,
  Divider,
  Typography,
  Grid,
  makeStyles
} from "@material-ui/core";

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
  // Styles
  const classes = useStyles();
  const avatarURL = `/api/users/${message.user.id}/avatar`;

  return (
    <Grid container spacing={1} className={classes.container}>
      <Grid item xs={2} sm={1}>
        <Grid container justify="center">
          <Grid item>
            <Avatar src={avatarURL} />
          </Grid>
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
