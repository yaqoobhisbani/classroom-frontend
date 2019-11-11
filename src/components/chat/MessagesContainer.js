import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import MessageReceived from "./MessageReceived";
import MessageSent from "./MessageSent";
import Loader from "../layout/Loader";
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

  const mainDiv = React.useRef(null);
  const endDiv = React.useRef(null);

  React.useEffect(() => {
    endDiv.current.focus();
    console.log(mainDiv.current);
    console.log(endDiv.current);
    //eslint-disable-next-line
  }, [messages]);

  // Styles
  const classes = useStyles();

  if (chatContext.loading === true) return <Loader />;

  return (
    <Container
      ref={mainDiv}
      component="section"
      className={classes.messagesContainer}
    >
      <React.Fragment>
        {messages.length > 0
          ? messages.map(message =>
              message.user.id === user._id ? (
                <MessageSent key={message._id} message={message} />
              ) : (
                <MessageReceived key={message._id} message={message} />
              )
            )
          : null}
      </React.Fragment>
      <div ref={endDiv} style={{ display: "none" }} />
    </Container>
  );
};

export default MessagesContainer;
