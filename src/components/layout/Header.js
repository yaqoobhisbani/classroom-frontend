import React, { Fragment } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SchoolIcon from "@material-ui/icons/School";

const useStyles = makeStyles(theme => ({
  iconLogo: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    color: "white",
    "&:hover": {
      textDecoration: "none"
    }
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <SchoolIcon fontSize="large" className={classes.iconLogo} />
          <Typography component="h2" variant="h6" className={classes.title}>
            Classroom
          </Typography>
          <Button>
            <Link className={classes.link} component={RouterLink} to="/">
              Sign in
            </Link>
          </Button>
          <Button>
            <Link
              className={classes.link}
              component={RouterLink}
              to="/register"
            >
              Register Account
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
