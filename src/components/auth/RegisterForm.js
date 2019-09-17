import React from "react";
import { Link as RouterLink } from "react-router-dom";
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

const RegisterForm = () => {
  const classes = useStyles();

  return (
    <form className={classes.form}>
      <TextField
        variant="outlined"
        required
        margin="normal"
        fullWidth
        id="name"
        label="Full Name"
        name="name"
        autoFocus
      />
      <TextField
        variant="outlined"
        required
        margin="normal"
        fullWidth
        id="email"
        label="Email Address"
        name="email"
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
        id="password"
        autoComplete="current-password"
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password2"
        label="Confirm Password"
        type="password"
        id="password2"
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
          <Link to="/" component={RouterLink} variant="body2">
            Already have an account? Login
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};

export default RegisterForm;
