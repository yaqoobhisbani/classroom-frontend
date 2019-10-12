import React from "react";
import {
  Container,
  Typography,
  Divider,
  makeStyles,
  Grid
} from "@material-ui/core";

import FileCard from "../material/FileCard";

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
  const classes = useStyles();
  return (
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
  );
};

export default Material;
