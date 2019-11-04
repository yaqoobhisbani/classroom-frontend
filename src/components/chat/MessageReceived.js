import React from "react";
import {
  Avatar,
  Paper,
  Divider,
  Typography,
  Grid,
  makeStyles
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";

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

  return (
    <Grid container spacing={1} className={classes.container}>
      <Grid item xs={2} sm={1}>
        <Grid container justify="center">
          <Grid item>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs>
        <Grid container xs="auto">
          <Paper className={classes.paper}>
            <Typography variant="subtitle2" gutterBottom>
              {message.user}
              <span style={{ fontWeight: 300 }}> | 6 mins ago</span>
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
