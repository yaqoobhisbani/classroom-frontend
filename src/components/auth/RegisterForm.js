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
    margin: theme.spacing(2, 0, 2)
  }
}));

const RegisterForm = () => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const { registerUser, error, clearErrors } = authContext;
  const classes = useStyles();

  // Initial User State
  const initialUser = {
    name: "",
    email: "",
    password: "",
    password2: ""
  };

  // Empty Error Object
  const emptyError = {
    isInvalid: false,
    msg: null
  };

  // Initial Error State
  const initialErrors = {
    nameError: emptyError,
    emailError: emptyError,
    passError: emptyError,
    pass2Error: emptyError
  };

  // User State
  const [user, setUser] = useState(initialUser);
  const { name, email, password, password2 } = user;

  // Password Visibility State
  const [visibile, setVisibile] = useState(false);
  const onPassToggle = () => setVisibile(!visibile);

  // Errors State
  const [errors, setErrors] = useState(initialErrors);
  const { nameError, emailError, passError, pass2Error } = errors;

  // Component Effect
  useEffect(() => {
    if (error === "Email Address is already registered!") {
      alertContext.showAlert("error", error);
      clearErrors();
      setUser(initialUser);
    }
    // eslint-disable-next-line
  }, [error]);

  // Name Error Setter
  const setNameError = (isInvalid, msg) =>
    setErrors({ ...errors, nameError: { isInvalid: isInvalid, msg: msg } });

  // Email Error Setter
  const setEmailError = (isInvalid, msg) =>
    setErrors({ ...errors, emailError: { isInvalid: isInvalid, msg: msg } });

  // Password Error Setter
  const setPassError = (isInvalid, msg) =>
    setErrors({ ...errors, passError: { isInvalid: isInvalid, msg: msg } });

  // Confirm Password Error Setter
  const setPass2Error = (isInvalid, msg) =>
    setErrors({ ...errors, pass2Error: { isInvalid: isInvalid, msg: msg } });

  // On Name Change
  const onNameChange = e => {
    // Update State Values
    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.value.length < 4) {
      setNameError(true, "Full Name must be at least 4 characters!");
    } else {
      setNameError(false, null);
    }
  };

  // On Email Change
  const onEmailChange = e => {
    // Update State Values
    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.value.includes("@") && e.target.value.includes(".")) {
      setEmailError(false, null);
    } else {
      setEmailError(true, "Invalid Email Address");
    }
  };

  // On Password Change
  const onPassChange = e => {
    // Update State Values
    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.value.length < 6) {
      setPassError(true, "Password must be atleast 6 characters!");
    } else {
      setPassError(false, null);
    }
  };

  // On Confirm Password Change
  const onPass2Change = e => {
    // Update State Values
    setUser({ ...user, [e.target.name]: e.target.value });
    if (password === e.target.value) {
      setPass2Error(false, null);
    } else {
      setPass2Error(true, "Password Does Not Match!");
    }
  };

  // On Form Submit Function
  const onSubmit = e => {
    e.preventDefault();
    if (
      nameError.isInvalid === false &&
      emailError.isInvalid === false &&
      passError.isInvalid === false &&
      pass2Error.isInvalid === false
    ) {
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
        error={nameError.isInvalid}
        variant="outlined"
        margin="normal"
        fullWidth
        required
        label={nameError.msg ? nameError.msg : "Full Name"}
        name="name"
        value={name}
        onChange={onNameChange}
      />
      <TextField
        error={emailError.isInvalid}
        variant="outlined"
        margin="normal"
        fullWidth
        required
        label={emailError.msg ? emailError.msg : "Email Address"}
        name="email"
        onChange={onEmailChange}
        value={email}
      />
      <TextField
        error={passError.isInvalid}
        variant="outlined"
        margin="normal"
        fullWidth
        required
        name="password"
        label={passError.msg ? passError.msg : "Password"}
        type={visibile ? "text" : "password"}
        onChange={onPassChange}
        value={password}
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
      <TextField
        error={pass2Error.isInvalid}
        variant="outlined"
        margin="normal"
        fullWidth
        required
        name="password2"
        label={pass2Error.msg ? pass2Error.msg : "Confirm Password"}
        type={visibile ? "text" : "password"}
        onChange={onPass2Change}
        value={password2}
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
    </form>
  );
};

export default RegisterForm;
