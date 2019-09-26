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

const LoginForm = withRouter(({ history }) => {
  const authContext = useContext(AuthContext);

  const { loginUser, isAuthenticated } = authContext;

  // Intializing Local Component State
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  // Component Effects
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated, history]);

  const classes = useStyles();

  // Setting State onChange Function
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  // Submit Function
  const onSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      // Show Error When Email & Password Are Empty
    } else {
      // Run Login Function From State
      loginUser({
        email,
        password
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
        label="Email Address"
        name="email"
        value={email}
        onChange={onChange}
        autoComplete="email"
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        value={password}
        onChange={onChange}
        autoComplete="current-password"
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link to="/register" component={RouterLink} variant="body2">
            Don't have an account? Sign Up
          </Link>
        </Grid>
      </Grid>
    </form>
  );
});

export default LoginForm;
