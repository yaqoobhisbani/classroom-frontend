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

import ConfirmDeleteDialog from "./ConfirmDeleteDialog";

import DeleteIcon from "@material-ui/icons/Delete";
import ImageIcon from "@material-ui/icons/Image";
import UploadIcon from "@material-ui/icons/CloudUpload";

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
  // Context
  const authContext = React.useContext(AuthContext);
  const { user, uploadAvatar, removeAvatar } = authContext;

  // Dynamic Variables
  let avatarURL = `/api/users/${user._id}/avatar`;
  let previewURL;

  // State
  const [picture, setPicture] = React.useState();
  const [preview, setPreview] = React.useState(null);

  // Confirm Delete Modal State
  const [confirmModal, setConfirmModal] = React.useState(false);
  const handleOpenConfirm = () => setConfirmModal(true);
  const handleCloseConfirm = () => setConfirmModal(false);

  const onChange = e => {
    setPicture(e.target.files[0]);
    previewURL = URL.createObjectURL(e.target.files[0]);
    setPreview(previewURL);
  };

  const onSubmit = e => {
    if (picture) {
      e.preventDefault();
      const formData = new FormData();
      formData.append("avatar", picture);
      uploadAvatar(formData);
      window.URL.revokeObjectURL(previewURL);
      setPreview(null);
    }
  };

  const onRemove = () => {
    removeAvatar();
  };

  // Styles
  const classes = useStyles();

  const UploadButton = (
    <Grid item>
      <Button
        onClick={onSubmit}
        variant="contained"
        color="primary"
        startIcon={<UploadIcon />}
      >
        Upload
      </Button>
    </Grid>
  );

  const removeProfileButton = (
    <Grid item>
      <Button
        onClick={handleOpenConfirm}
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Remove Picture
      </Button>
    </Grid>
  );

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
          <Button
            variant="contained"
            startIcon={<ImageIcon />}
            component="label"
          >
            Choose Picture
            <input
              type="file"
              style={{ display: "none" }}
              accept="image/*"
              onChange={onChange}
            />
          </Button>
        </Grid>
        <Grid item>
          <Avatar
            src={preview ? preview : avatarURL}
            className={classes.avatar}
          ></Avatar>
        </Grid>
        {preview ? UploadButton : null}
        {user.hasAvatar ? removeProfileButton : null}
      </Grid>

      <ConfirmDeleteDialog
        open={confirmModal}
        handleClose={handleCloseConfirm}
        onConfirm={onRemove}
      />
    </Paper>
  );
};

export default ProfilePicture;
