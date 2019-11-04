import React from "react";
import { Paper, Typography, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2),
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
        <Paper className={classes.paper}>
          <Typography variant="body2">{message.text}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MessageSent;
