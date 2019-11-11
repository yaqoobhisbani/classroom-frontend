import React from "react";
import {
  Avatar,
  Paper,
  Divider,
  Typography,
  Grid,
  makeStyles
} from "@material-ui/core";
import moment from "moment";

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
  const messagetime = moment(message.time).fromNow();

  // State
  const [time, setTime] = React.useState(messagetime);

  // Update Time Every Minute
  const updateTime = () => {
    if (time.includes("day")) {
      const newTime =
        moment(message.time).format("YYYY-MM-DD") +
        " - " +
        moment(message.time).format("LT");
      setTime(newTime);
    } else {
      if (time.includes("min")) {
        setInterval(() => {
          const anotherTime = moment(message.time).fromNow();
          setTime(anotherTime);
        }, 60000);
      }
    }
  };

  React.useEffect(() => {
    updateTime();
    // eslint-disable-next-line
  }, []);

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
              <span style={{ fontWeight: 300 }}> | {time}</span>
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
