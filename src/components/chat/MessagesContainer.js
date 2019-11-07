import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import MessageReceived from "./MessageReceived";
import MessageSent from "./MessageSent";

import AuthContext from "../../context/auth/authContext";
import ChatContext from "../../context/chat/chatContext";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2)
  },
  messagesContainer: {
    height: "50vh",
    overflow: "auto",
    marginBottom: theme.spacing(2)
  }
}));

const MessagesContainer = () => {
  // Context
  const authContext = React.useContext(AuthContext);
  const chatContext = React.useContext(ChatContext);
  const { user } = authContext;
  const { messages } = chatContext;

  // Styles
  const classes = useStyles();

  return (
    <Container component="section" className={classes.messagesContainer}>
      {messages.length > 0
        ? messages.map(message =>
            message.user.id === user._id ? (
              <MessageSent key={message._id} message={message} />
            ) : (
              <MessageReceived key={message._id} message={message} />
            )
          )
        : null}
    </Container>
  );
};

export default MessagesContainer;
