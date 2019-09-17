import React from "react";
import { Avatar, Box, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonAdd from "@material-ui/icons/PersonAdd";
import RegisterForm from "../auth/RegisterForm";

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

const Register = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonAdd />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register Account
        </Typography>
        <RegisterForm />
      </div>
      <Box mt={4}>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          {new Date().getFullYear()}
          {" Classroom."}
        </Typography>
      </Box>
    </Container>
  );
};

export default Register;
