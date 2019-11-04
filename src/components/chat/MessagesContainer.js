import React from "react";
import { Container, makeStyles } from "@material-ui/core";

import MessageReceived from "./MessageReceived";
import MessageSent from "./MessageSent";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2)
  },
  messagesContainer: {
    height: "47vh",
    overflow: "auto",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

const MessagesContainer = () => {
  // Styles
  const classes = useStyles();

  return (
    <Container component="section" className={classes.messagesContainer}>
      <MessageReceived />
      <MessageReceived />
      <MessageReceived />
      <MessageSent />
      <MessageSent />
      <MessageSent />
    </Container>
  );
};

export default MessagesContainer;
