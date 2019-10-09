import React, { Fragment, useContext, useState } from "react";
import { Link as RouterLink, withRouter } from "react-router-dom";
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
import MenuIcon from "@material-ui/icons/Menu";

import SideDrawer from "./SideDrawer";
import AuthContext from "../../context/auth/authContext";
import RoomsContext from "../../context/rooms/roomsContext";

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
  },
  tabs: {
    width: "100%"
  },
  noShadow: {
    boxShadow: "none!important"
  }
}));

const Header = props => {
  const authContext = useContext(AuthContext);
  const roomsContext = useContext(RoomsContext);

  const { isAuthenticated, logoutUser } = authContext;
  const { resetRooms, current } = roomsContext;

  // Side Drawer State & Methods
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  // Logout Method
  const onLogout = () => {
    logoutUser();
    resetRooms();
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
        logout={onLogout}
      />
      <IconButton
        onClick={openDrawer}
        color="inherit"
        className={classes.iconLogo}
      >
        <MenuIcon />
      </IconButton>

      <Typography component="h2" variant="h6" className={classes.title}>
        {props.match.url === "/dashboard"
          ? "Dashboard"
          : props.match.url === "/settings"
          ? "Settings"
          : current
          ? `${current.classname}`
          : "Classroom"}
      </Typography>
    </Fragment>
  );

  return (
    <AppBar className={current ? classes.noShadow : null} position="static">
      <Toolbar>
        {isAuthenticated ? loggedInHeader : loggedOutHeader}
        {!isAuthenticated ? LoggedOutLinks : null}
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);
