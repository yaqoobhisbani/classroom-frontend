import React from "react";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  makeStyles,
  withStyles,
  Badge
} from "@material-ui/core";

import RoomsContext from "../../../context/rooms/roomsContext";

const StyledBadge = withStyles(theme => ({
  badge: {
    backgroundColor: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid #44b700",
      content: '""'
    }
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0
    }
  }
}))(Badge);

const useStyles = makeStyles(theme => ({
  listItem: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    cursor: "pointer",
    transition: "all 0.4s ease-out",
    borderRadius: 5,
    "&:hover": {
      background: "#fff",
      boxShadow: "3px 5px 10px 0px #dedede"
    }
  }
}));

const MemberOnline = ({ user }) => {
  // Context
  const roomsContext = React.useContext(RoomsContext);
  const { current } = roomsContext;
  const isAdmin = current.createdBy === user.dbid ? true : false;

  // Styles
  const classes = useStyles();
  const avatarURL = `/api/users/${user.dbid}/avatar`;

  // Normal Online Avatar
  const NormalOnlineAvatar = (
    <StyledBadge
      overlap="circle"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      variant="dot"
    >
      <Avatar src={avatarURL} />
    </StyledBadge>
  );

  // Admin Online Avatar
  const AdminOnlineAvatar = (
    <StyledBadge
      overlap="circle"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      variant="dot"
    >
      <Badge
        color="secondary"
        badgeContent="Admin"
        anchorOrigin={{
          horizontal: "right",
          vertical: "top"
        }}
      >
        <Avatar src={avatarURL} />
      </Badge>
    </StyledBadge>
  );

  return (
    <ListItem className={classes.listItem}>
      <ListItemAvatar>
        {isAdmin ? AdminOnlineAvatar : NormalOnlineAvatar}
      </ListItemAvatar>
      <ListItemText primary={user.name} />
    </ListItem>
  );
};

export default MemberOnline;
