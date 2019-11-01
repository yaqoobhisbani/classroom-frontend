import React from "react";
import { Container, Paper, Typography, makeStyles } from "@material-ui/core";

// Panels
import ClassNamePanel from "../about/panels/ClassNamePanel";
import SubjectPanel from "../about/panels/SubjectPanel";
import DescriptionPanel from "../about/panels/DescriptionPanel";
import CodePanel from "../about/panels/CodePanel";
import StudentsPanel from "../about/panels/StudentsPanel";

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
