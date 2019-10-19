import React, { Fragment } from "react";
import {
  Container,
  Typography,
  Divider,
  makeStyles,
  Grid
} from "@material-ui/core";

import Loader from "../layout/Loader";
import RoomsContext from "../../context/rooms/roomsContext";
import AuthContext from "../../context/auth/authContext";
import MaterialContext from "../../context/material/materialContext";

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
  const materialContext = React.useContext(MaterialContext);
  const { current } = roomsContext;
  const { user } = authContext;
  const { material } = materialContext;

  // Styles
  const classes = useStyles();

  // Local Dynamic Variables
  const isAdminLoggedIn = current.createdBy === user._id ? true : false;

  React.useEffect(() => {
    materialContext.getMaterial(current.code);
    // eslint-disable-next-line
  }, []);

  if (materialContext.loading === true) return <Loader />;

  return (
    <Fragment>
      <Container component="main" className={classes.container}>
        <Typography variant="h5" gutterBottom>
          Study Material
        </Typography>
        <Divider />
        <Grid container className={classes.grid} spacing={2}>
          {material.length > 0
            ? material.map(file => (
                <FileCard file={file} fileType={file.fileType} />
              ))
            : null}
        </Grid>
      </Container>
      {isAdminLoggedIn ? <FabButton /> : null}
    </Fragment>
  );
};

export default Material;
