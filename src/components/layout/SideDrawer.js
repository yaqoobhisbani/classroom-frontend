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
  Avatar
} from "@material-ui/core";

// Icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import SchoolIcon from "@material-ui/icons/School";

import AvatarImg from "../../assets/avatar.jpg";

const useStyles = makeStyles({
  sideList: {
    width: 250
  },
  sideAvatar: {
    margin: 10,
    width: 110,
    height: 110
  },
  userProfile: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
  }
});

const SideDrawer = ({ open, openDrawer, closeDrawer }) => {
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

  // User Profile
  const UserProfile = (
    <ListItem button className={classes.userProfile} divider>
      <ListItemIcon>
        <Avatar
          display="block"
          src={AvatarImg}
          className={classes.sideAvatar}
        />
      </ListItemIcon>
      <ListItemText>
        <Typography variant="h6">Muhammad Yaqoob</Typography>
        <Typography variant="body2">yaqoobm91@gmail.com</Typography>
      </ListItemText>
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
        {UserProfile}
        <ListItem component={Link} button to="/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </ListItem>
        <ListItem component={Link} button to="/settings">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
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
