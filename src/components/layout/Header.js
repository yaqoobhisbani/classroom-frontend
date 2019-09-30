import React, { Fragment, useContext, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Link,
  IconButton,
  makeStyles
} from "@material-ui/core";

// Icons
import SchoolIcon from "@material-ui/icons/School";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";

import SideDrawer from "./SideDrawer";
import AuthContext from "../../context/auth/authContext";

const useStyles = makeStyles(theme => ({
  iconLogo: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    display: "flex",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      textDecoration: "none"
    }
  },
  logoutIcon: {
    marginLeft: 5
  }
}));

const Header = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logoutUser, user } = authContext;

  // Side Drawer State & Methods
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  // Logout Method
  const onLogout = () => {
    logoutUser();
  };

  const classes = useStyles();

  const LoggedOutLinks = (
    <Fragment>
      <Button>
        <Link className={classes.link} component={RouterLink} to="/">
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
        <span>Logout</span>
        <LogoutIcon className={classes.logoutIcon} />
      </Link>
    </Button>
  );

  const loggedOutHeader = (
    <Fragment>
      <SchoolIcon fontSize="large" className={classes.iconLogo} />
      <Typography component="h2" variant="h6" className={classes.title}>
        Classroom
      </Typography>
    </Fragment>
  );

  const loggedInHeader = (
    <Fragment>
      <SideDrawer
        open={isDrawerOpen}
        openDrawer={openDrawer}
        closeDrawer={closeDrawer}
        user={user}
      />
      <IconButton
        onClick={openDrawer}
        color="inherit"
        className={classes.iconLogo}
      >
        <MenuIcon />
      </IconButton>
      <Typography component="h2" variant="h6" className={classes.title}>
        Dashboard
      </Typography>
    </Fragment>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        {isAuthenticated ? loggedInHeader : loggedOutHeader}
        {isAuthenticated ? LoggedInLinks : LoggedOutLinks}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
