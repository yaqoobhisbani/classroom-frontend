import React from "react";
import {
  Paper,
  Typography,
  Grid,
  makeStyles,
  Tooltip
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(1)
  },
  paper: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    background: theme.palette.primary.main,
    color: "white"
  }
}));

const MessageSent = ({ message }) => {
  // Styles
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row-reverse"
      spacing={1}
      className={classes.container}
    >
      <Grid item>
        <Tooltip title={message.time} placement="left">
          <Paper className={classes.paper}>
            <Typography variant="body2">{message.text}</Typography>
          </Paper>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default MessageSent;
