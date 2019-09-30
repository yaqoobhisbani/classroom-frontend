import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Avatar,
  Typography
} from "@material-ui/core";
import AvatarImg from "../../assets/avatar.jpg";

import AuthContext from "../../context/auth/authContext";

const useStyles = makeStyles({
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

const SideProfile = () => {
  const authContext = React.useContext(AuthContext);
  const { user } = authContext;

  const classes = useStyles();

  return (
    <ListItem button className={classes.userProfile} divider>
      <ListItemIcon>
        <Avatar
          display="block"
          src={AvatarImg}
          className={classes.sideAvatar}
        />
      </ListItemIcon>
      <ListItemText>
        <Typography variant="h6">{user.name}</Typography>
        <Typography variant="body2">{user.email}</Typography>
      </ListItemText>
    </ListItem>
  );
};

export default SideProfile;
