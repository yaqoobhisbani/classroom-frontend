import React from "react";
import { Avatar, Box, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import LoginForm from "../auth/LoginForm";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  }
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <LoginForm />
      </div>
      <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          {new Date().getFullYear()}
          {" Classroom."}
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
