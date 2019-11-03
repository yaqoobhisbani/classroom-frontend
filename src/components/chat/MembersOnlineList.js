import React from "react";
import { Container, List, makeStyles } from "@material-ui/core";
import MemberOnline from "./MemberOnline";

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    height: "65vh",
    overflow: "auto",
    padding: 0
  }
}));

const MembersOnlineList = () => {
  // Styles
  const classes = useStyles();

  return (
    <Container component="aside" className={classes.container}>
      <List>
        <MemberOnline />
        <MemberOnline />
        <MemberOnline />
        <MemberOnline />
        <MemberOnline />
        <MemberOnline />
      </List>
    </Container>
  );
};

export default MembersOnlineList;
