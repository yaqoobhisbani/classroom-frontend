import React from "react";
import {
  Paper,
  Typography,
  Divider,
  Grid,
  Avatar,
  Button,
  makeStyles
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import ImageIcon from "@material-ui/icons/Image";

import AuthContext from "../../context/auth/authContext";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2)
  },
  grid: {
    marginTop: theme.spacing(1)
  },
  avatar: {
    width: 130,
    height: 130
  }
}));

const ProfilePicture = () => {
  // Context & State
  const authContext = React.useContext(AuthContext);
  const { user } = authContext;

  // Dynamic Variables
  const avatarURL = `/api/users/${user._id}/avatar`;

  // Styles
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Typography variant="h5" gutterBottom>
        Profile Picture
      </Typography>
      <Divider />

      <Grid
        container
        spacing={2}
        className={classes.grid}
        alignItems="center"
        justify="center"
      >
        <Grid item>
          <Button variant="contained" startIcon={<ImageIcon />}>
            Choose Picture
          </Button>
        </Grid>
        <Grid item>
          <Avatar src={avatarURL} className={classes.avatar}></Avatar>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
          >
            Remove Picture
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProfilePicture;
