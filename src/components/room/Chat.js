import React, { Fragment } from "react";
import {
  Container,
  Typography,
  Divider,
  makeStyles,
  Grid
} from "@material-ui/core";

import ChatContext from "../../context/chat/chatContext";
import MessagesContainer from "./chat/MessagesContainer";
import MessageSender from "./chat/MessageSender";
import MembersOnlineList from "./chat/MembersOnlineList";
import Loader from "../layout/Loader";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2)
  }
}));

const Chat = () => {
  // Context
  const chatContext = React.useContext(ChatContext);

  // Styles
  const classes = useStyles();

  // Effects
  React.useEffect(() => {
    // Init Chat
    chatContext.initChat();

    return () => {
      chatContext.disconnect();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Container component="main" className={classes.container}>
      {/* Main Grid Container */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Typography variant="h5" gutterBottom>
            Group Chat
          </Typography>
          <Divider />
          {chatContext.loading === true ? (
            <Loader />
          ) : (
            <Fragment>
              <MessagesContainer />
              <MessageSender />
            </Fragment>
          )}
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
