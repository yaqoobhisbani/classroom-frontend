import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  makeStyles,
  Typography,
  CircularProgress
} from "@material-ui/core";

// Icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import ProfileIcon from "@material-ui/icons/AccountBox";
import SchoolIcon from "@material-ui/icons/School";
import LogoutIcon from "@material-ui/icons/ExitToApp";

// Lazy Loading Profile in SideDrawer
const SideProfile = React.lazy(() => import("./SideProfile"));

const useStyles = makeStyles({
  sideList: {
    width: 250
  },
  loader: {
    display: "flex",
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});

const SideDrawer = ({ open, openDrawer, closeDrawer, logout }) => {
  const classes = useStyles();

  // Main App Title
  const AppTitle = (
    <ListItem divider>
      <ListItemIcon>
        <SchoolIcon fontSize="large" />
      </ListItemIcon>
      <ListItemText>
        <Typography component="h2" variant="h6">
          Classroom
        </Typography>
        <Typography variant="body2">The Virtual Classroom</Typography>
      </ListItemText>
    </ListItem>
  );

  // User Profile Spinner
  const profileSpinner = (
    <ListItem className={classes.loader} divider>
      <CircularProgress color="secondary" />
    </ListItem>
  );

  // Side Drawer List
  const sideList = (
    <div
      className={classes.sideList}
      role="presentation"
      onClick={closeDrawer}
      onKeyDown={closeDrawer}
    >
      <List>
        {AppTitle}
        <React.Suspense fallback={profileSpinner}>
          <SideProfile />
        </React.Suspense>
        <ListItem component={Link} button to="/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </ListItem>
        <ListItem component={Link} button to="/profile">
          <ListItemIcon>
            <ProfileIcon />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </ListItem>
        <ListItem component={Link} button to="/" onClick={logout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <SwipeableDrawer open={open} onClose={closeDrawer} onOpen={openDrawer}>
      {sideList}
    </SwipeableDrawer>
  );
};

export default SideDrawer;
