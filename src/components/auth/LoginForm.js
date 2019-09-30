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
  const classes = useStyles();

  // Component Effects
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/dashboard");
    }
  }, [isAuthenticated, history]);

  // Initial User State
  const initialUser = {
    email: "",
    password: ""
  };

  // Empty Error Object
  const emptyError = {
    isInvalid: false,
    msg: null
  };

  // Initial Error State
  const initialErrors = {
    emailError: emptyError,
    passwordError: emptyError
  };

  // User State
  const [user, setUser] = useState(initialUser);
  const { email, password } = user;

  // Login Errors State
  const [errors, setErrors] = useState(initialErrors);
  const { emailError, passwordError } = errors;

  // Email Error Setter
  const setEmailError = (isInvalid, msg) =>
    setErrors({ ...errors, emailError: { isInvalid: isInvalid, msg: msg } });

  // Password Error Setter
  const setPasswordError = (isInvalid, msg) =>
    setErrors({ ...errors, passwordError: { isInvalid: isInvalid, msg: msg } });

  // On Email Change
  const onEmailChange = e => {
    // Update User State
    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.value.includes("@") && e.target.value.includes(".")) {
      setEmailError(false, null);
    } else {
      setEmailError(true, "Invalid Email Address!");
    }
  };

  // On Password Change
  const onPasswordChange = e => {
    // Update User State
    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.value.length < 5) {
      setPasswordError(true, "Password must be atleast 6 characters!");
    } else {
      setPasswordError(false, null);
    }
  };

  // Submit Function
  const onSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      // All Errors
    } else {
      loginUser({
        email,
        password
      });
    }
  };

  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <TextField
        error={emailError.isInvalid}
        variant="outlined"
        margin="normal"
        fullWidth
        label={emailError.msg ? emailError.msg : "Email Address"}
        name="email"
        value={email}
        onChange={onEmailChange}
      />
      <TextField
        error={passwordError.isInvalid}
        variant="outlined"
        margin="normal"
        fullWidth
        name="password"
        label={passwordError.msg ? passwordError.msg : "Password"}
        type="password"
        value={password}
        onChange={onPasswordChange}
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
