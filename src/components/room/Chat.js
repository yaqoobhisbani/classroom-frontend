import React, { Component } from "react";
import {
  Container,
  Typography,
  Divider,
  makeStyles,
  Grid
} from "@material-ui/core";

import MessagesContainer from "../chat/MessagesContainer";
import MessageSender from "../chat/MessageSender";
import MembersOnlineList from "../chat/MembersOnlineList";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2)
  }
}));

const Chat = () => {
  // Styles
  const classes = useStyles();

  return (
    <Container componen="main" className={classes.container}>
      {/* Main Grid Container */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Typography variant="h5" gutterBottom>
            Group Chat
          </Typography>
          <Divider />
          <MessagesContainer />
          <MessageSender />
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h5" gutterBottom>
            Online Members
          </Typography>
          <Divider />
          <MembersOnlineList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
