import React from "react";
import { Container, Paper, Typography, makeStyles } from "@material-ui/core";

// Panels
import ClassNamePanel from "../about/ClassNamePanel";
import SubjectPanel from "../about/SubjectPanel";
import DescriptionPanel from "../about/DescriptionPanel";
import CodePanel from "../about/CodePanel";
import StudentsPanel from "../about/StudentsPanel";

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

      <ClassNamePanel />
      <SubjectPanel />
      <DescriptionPanel />
      <CodePanel />
      <StudentsPanel />
    </Container>
  );
};

export default About;
