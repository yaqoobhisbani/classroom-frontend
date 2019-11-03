import React from "react";
import { Paper, Grid, Button, TextField, makeStyles } from "@material-ui/core";

import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2)
  }
}));

const MessageSender = () => {
  // Styles
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <Grid container justify="center" alignItems="center" spacing={1}>
        <Grid item xs={8} sm={9} md={10}>
          <TextField
            variant="outlined"
            multiline
            fullWidth
            label="Type Your Message.."
          />
        </Grid>

        <Grid item xs>
          <Grid container justify="center">
            <Button variant="contained" color="primary" endIcon={<SendIcon />}>
              Send
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MessageSender;
