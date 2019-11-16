import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import MessageReceived from "./MessageReceived";
import MessageSent from "./MessageSent";
import Loader from "../../layout/Loader";
import AuthContext from "../../../context/auth/authContext";
import ChatContext from "../../../context/chat/chatContext";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2)
  },
  messagesContainer: {
    height: "55vh",
    overflow: "hidden",
    marginBottom: theme.spacing(2),
    "&:hover": {
      overflow: "auto"
    },
    "&::-webkit-scrollbar": {
      width: 6,
      background: "#e0e0e0"
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#bdbdbd",
      borderRadius: 5
    }
  },
  noMessages: {
    textAlign: "center",
    marginTop: 50
  }
}));

const MessagesContainer = () => {
  // Context
  const authContext = React.useContext(AuthContext);
  const chatContext = React.useContext(ChatContext);
  const { user } = authContext;
  const { messages } = chatContext;

  const mainDiv = React.useRef();

  React.useEffect(() => {
    mainDiv.current.scrollTop = mainDiv.current.scrollHeight;
    //eslint-disable-next-line
  }, [messages]);

  // Styles
  const classes = useStyles();

  // No Messages
  const NoMessages = (
    <div className={classes.noMessages}>
      <Typography style={{ marginBottom: 8 }} variant="h5">
        It's Empty Here.
      </Typography>
      <Typography>Send a message to this room below!</Typography>
    </div>
  );

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
          : NoMessages}
      </React.Fragment>
    </Container>
  );
};

export default MessagesContainer;
