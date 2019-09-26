import React, { Fragment, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SchoolIcon from "@material-ui/icons/School";
import AuthContext from "../../context/auth/authContext";

const useStyles = makeStyles(theme => ({
  iconLogo: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      textDecoration: "none"
    }
  }
}));

const Header = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logoutUser } = authContext;

  const onLogout = () => {
    logoutUser();
  };

  const classes = useStyles();

  const LoggedOutLinks = (
    <Fragment>
      <Button>
        <Link className={classes.link} component={RouterLink} to="/login">
          Sign in
        </Link>
      </Button>
      <Button>
        <Link className={classes.link} component={RouterLink} to="/register">
          Register
        </Link>
      </Button>
    </Fragment>
  );

  const LoggedInLinks = (
    <Button>
      <Link
        className={classes.link}
        component={RouterLink}
        onClick={onLogout}
        to="/"
      >
        Logout
      </Link>
    </Button>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <SchoolIcon fontSize="large" className={classes.iconLogo} />
        <Typography component="h2" variant="h6" className={classes.title}>
          {isAuthenticated ? "Dashboard" : "Classroom"}
        </Typography>
        {isAuthenticated ? LoggedInLinks : LoggedOutLinks}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
