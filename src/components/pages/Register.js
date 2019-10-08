import React, { Fragment } from "react";
import { Avatar, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Header from "../layout/Header";
import RegisterForm from "../auth/RegisterForm";
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

const Register = () => {
  const classes = useStyles();

  React.useEffect(() => {
    document.title = "Register | Classroom";
  }, []);

  return (
    <Fragment>
      <Header />
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
        <Footer mb={3} mt={4} />
      </Container>
    </Fragment>
  );
};

export default Register;
