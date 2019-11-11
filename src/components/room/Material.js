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
  noMaterial: {
    textAlign: "center",
    marginTop: 20
  }
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
      <Typography style={{ marginBottom: 8 }} variant="h5">
        No Material Available.
      </Typography>
      <Typography>Comeback later until admin uploads material!</Typography>
    </div>
  );

  const MaterialTitle = (
    <Fragment>
      <Typography variant="h5" gutterBottom>
        Study Material
      </Typography>
      <Divider />
    </Fragment>
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
        {material.length > 0 ? MaterialTitle : null}
        <Grid container className={classes.grid} spacing={2}>
          {material.length > 0
            ? material.map((file, index) => (
                <FileCard file={file} key={index} fileType={file.fileType} />
              ))
            : null}
        </Grid>
        {material.length === 0 ? NoMaterial : null}
      </Container>
      {isAdmin ? <FabButton /> : null}
    </Fragment>
  );
};

export default Material;
