import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import { Link as RouterLink, withRouter } from "react-router-dom";
import { TextField, Link, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const RegisterForm = withRouter(({ history }) => {
  const authContext = useContext(AuthContext);
  const { registerUser, isAuthenticated } = authContext;

  // Initial Local Component State
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = user;

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated, history]);

  const classes = useStyles();

  // Setting State on Change Function
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  // On Form Submit Function
  const onSubmit = e => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      // All Fields Are Required
    } else if (password !== password2) {
      // Password Don't Match
    } else {
      // Register The User
      registerUser({
        name,
        email,
        password,
        password2
      });
    }
  };

  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        required
        label="Full Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        required
        label="Email Address"
        name="email"
        autoComplete="email"
        value={email}
        onChange={onChange}
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        required
        name="password"
        label="Password"
        type="password"
        value={password}
        onChange={onChange}
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        required
        name="password2"
        label="Confirm Password"
        type="password"
        value={password2}
        onChange={onChange}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Register Account
      </Button>
      <Grid container>
        <Grid item xs>
          <Link to="/login" component={RouterLink} variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </form>
  );
});

export default RegisterForm;
