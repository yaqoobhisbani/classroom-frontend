import React, { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles
} from "@material-ui/core";
import SchoolIcon from "@material-ui/icons/School";

const useStyles = makeStyles(theme => ({
  iconLogo: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
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
          <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
