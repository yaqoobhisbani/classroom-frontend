import React, { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Link
} from "@material-ui/core";
import SchoolIcon from "@material-ui/icons/School";
import { Link as RouterLink } from "react-router-dom";

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
          <Typography component="h1" variant="h6" className={classes.title}>
            Classroom
          </Typography>
          <Button>
            <Link className={classes.link} component={RouterLink} to="/">
              Login
            </Link>
          </Button>
          <Button>
            <Link
              className={classes.link}
              component={RouterLink}
              to="/register"
            >
              Register
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
