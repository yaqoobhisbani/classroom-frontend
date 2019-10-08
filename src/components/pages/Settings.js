import React, { Fragment } from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";
import Header from "../layout/Header";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(4)
  }
}));

const Settings = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Header />
      <Container component="main" className={classes.container}>
        <Typography variant="h3" gutterBottom>
          Settings Page
        </Typography>
      </Container>
    </Fragment>
  );
};

export default Settings;
