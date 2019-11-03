import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";

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
      <Typography>Messages here..</Typography>
      <Typography>Messages here..</Typography>
      <Typography>Messages here..</Typography>
      <Typography>Messages here..</Typography>
      <Typography>Messages here..</Typography>
      <Typography>Messages here..</Typography>
      <Typography>Messages here..</Typography>
      <Typography>Messages here..</Typography>
      <Typography>Messages here..</Typography>
      <Typography>Messages here..</Typography>
      <Typography>Messages here..</Typography>
      <Typography>Messages here..</Typography>
      <Typography>Messages here..</Typography>
      <Typography>Messages here..</Typography>
      <Typography>Messages here..</Typography>
      <Typography>Messages here..</Typography>
      <Typography>Messages here..</Typography>
      <Typography>Messages here..</Typography>
    </Container>
  );
};

export default MessagesContainer;
