import React, { Fragment } from "react";
import { Avatar, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Header from "../layout/Header";
import LoginForm from "../auth/LoginForm";
import Footer from "../layout/Footer";

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
    <Fragment>
      <Header />
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
        <Footer mb={3} mt={4} />
      </Container>
    </Fragment>
  );
};

export default Login;
