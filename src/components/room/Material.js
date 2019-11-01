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
  },
  noMaterial: {}
}));

const Material = () => {
  // Context
  const roomsContext = React.useContext(RoomsContext);
  const authContext = React.useContext(AuthContext);
  const materialContext = React.useContext(MaterialContext);
  const { current } = roomsContext;
  const { isAdmin } = authContext;
  const { material, getMaterial, resetMaterial } = materialContext;

  // Styles
  const classes = useStyles();

  // No Material
  const NoMaterial = (
    <div className={classes.noMaterial}>
      <Typography variant="h5">No Files Available!</Typography>
    </div>
  );

  React.useEffect(() => {
    getMaterial(current.code);
    document.title = `${current.classname} | Classroom`;

    // Reset Material State Whenever Material Component Unmounts
    return () => {
      resetMaterial();
    };
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
            ? material.map((file, index) => (
                <FileCard file={file} key={index} fileType={file.fileType} />
              ))
            : NoMaterial}
        </Grid>
      </Container>
      {isAdmin ? <FabButton /> : null}
    </Fragment>
  );
};

export default Material;
