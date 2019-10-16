import React, { Fragment } from "react";
import {
  Container,
  Typography,
  Divider,
  makeStyles,
  Grid
} from "@material-ui/core";

import RoomsContext from "../../context/rooms/roomsContext";
import AuthContext from "../../context/auth/authContext";

import FileCard from "../material/FileCard";
import FabButton from "../material/FabButton";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2)
  },
  grid: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

const Material = () => {
  // Context
  const roomsContext = React.useContext(RoomsContext);
  const authContext = React.useContext(AuthContext);
  const { current } = roomsContext;
  const { user } = authContext;

  // Styles
  const classes = useStyles();

  // Local Dynamic Variables
  const isAdminLoggedIn = current.createdBy === user._id ? true : false;

  return (
    <Fragment>
      <Container component="main" className={classes.container}>
        <Typography variant="h5" gutterBottom>
          Uploaded By Teacher
        </Typography>
        <Divider />
        <Grid container className={classes.grid} spacing={2}>
          <FileCard fileType="doc" />
          <FileCard fileType="pdf" />
          <FileCard fileType="ppt" />
          <FileCard fileType="xls" />
          <FileCard fileType="pdf" />
          <FileCard fileType="doc" />
        </Grid>
      </Container>
      {isAdminLoggedIn ? <FabButton /> : null}
    </Fragment>
  );
};

export default Material;
