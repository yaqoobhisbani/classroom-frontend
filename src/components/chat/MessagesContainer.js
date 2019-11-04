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

  const longMessage = {
    user: "Muhammad Yaqoob",
    text:
      "This is some very long message which is being displayed in the chat section and it must be long enough cover first line and fall on second line. This is enough I think."
  };

  const medMessage = {
    user: "KH Solangi",
    text: "This is medium message which should cover half of the area!"
  };

  const shortMessage = {
    user: "Kashif Hussain",
    text: "This is a short message!"
  };

  return (
    <Container component="section" className={classes.messagesContainer}>
      <MessageReceived message={longMessage} />
      <MessageReceived message={medMessage} />
      <MessageReceived message={shortMessage} />
      <MessageSent message={longMessage} />
      <MessageSent message={medMessage} />
      <MessageSent message={shortMessage} />
    </Container>
  );
};

export default MessagesContainer;
