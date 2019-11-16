import React from "react";
import { Container, List, makeStyles } from "@material-ui/core";
import MemberOnline from "./MemberOnline";
import ChatContext from "../../../context/chat/chatContext";

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    height: "65vh",
    overflow: "auto",
    padding: 0
  }
}));

const MembersOnlineList = () => {
  // Context
  const chatContext = React.useContext(ChatContext);
  const { onlineUsers } = chatContext;

  // Styles
  const classes = useStyles();

  return (
    <Container component="aside" className={classes.container}>
      <List>
        {onlineUsers.length > 0
          ? onlineUsers.map(user => (
              <MemberOnline key={user.dbid} user={user} />
            ))
          : null}
      </List>
    </Container>
  );
};

export default MembersOnlineList;
