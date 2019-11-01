import React from "react";
import { Container, Paper, Typography, makeStyles } from "@material-ui/core";

import AboutPanels from "../about/AboutPanels";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2)
  }
}));

const About = () => {
  // Styles
  const classes = useStyles();

  return (
    <Container component="main" className={classes.container}>
      <Paper className={classes.paper}>
        <Typography variant="h5">About This Classroom</Typography>
      </Paper>

      <AboutPanels />
    </Container>
  );
};

export default About;
