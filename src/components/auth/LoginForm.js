import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alerts/alertContext";
import { Link as RouterLink } from "react-router-dom";
import {
  TextField,
  Link,
  Grid,
  Button,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Icons
import VisibilityOn from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const LoginForm = () => {
  const authContext = useContext(AuthContext);
  const { loginUser, error, clearErrors } = authContext;
  const alertContext = useContext(AlertContext);

  const classes = useStyles();

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

  // Password Visibility State
  const [visibile, setVisibile] = useState(false);
  const onPassToggle = () => setVisibile(!visibile);

  // Login Errors State
  const [errors, setErrors] = useState(initialErrors);
  const { emailError, passwordError } = errors;

  // Component Effect
  useEffect(() => {
    if (error === "Invalid Credientials!") {
      alertContext.showAlert("error", error);
      clearErrors();
      setUser(initialUser);
    }
    // eslint-disable-next-line
  }, [error]);

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
    if (e.target.value.length < 6) {
      setPasswordError(true, "Password must be atleast 6 characters!");
    } else {
      setPasswordError(false, null);
    }
  };

  // Submit Function
  const onSubmit = e => {
    e.preventDefault();
    if (emailError.isInvalid === false && passwordError.isInvalid === false) {
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
        required
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
        required
        name="password"
        label={passwordError.msg ? passwordError.msg : "Password"}
        type={visibile ? "text" : "password"}
        value={password}
        onChange={onPasswordChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle-password-visibility"
                onClick={onPassToggle}
              >
                {visibile ? <VisibilityOn /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }}
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
};

export default LoginForm;
