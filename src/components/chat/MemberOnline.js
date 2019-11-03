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
import FolderIcon from "@material-ui/icons/Folder";

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
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
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

const MemberOnline = () => {
  // Styles
  const classes = useStyles();

  // Online Badge
  const OnlineBadge = (
    <StyledBadge
      overlap="circle"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      variant="dot"
    >
      <Avatar>
        <FolderIcon />
      </Avatar>
    </StyledBadge>
  );

  return (
    <ListItem className={classes.listItem}>
      <ListItemAvatar>{OnlineBadge}</ListItemAvatar>
      <ListItemText primary="Muhammad Yaqoob" />
    </ListItem>
  );
};

export default MemberOnline;
