import React from "react";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Divider,
  List
} from "@material-ui/core";
import StudentItem from "../students/StudentItem";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2)
  },
  list: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

const Students = () => {
  const classes = useStyles();

  const students = [
    "Muhammad Yaqoob",
    "Kashif Hussain",
    "Khalil Ahmed",
    "Tahir Ali Tunio"
  ];

  return (
    <Container component="main" className={classes.container}>
      <Typography variant="h5" gutterBottom>
        Students
      </Typography>
      <Divider />
      <List className={classes.list}>
        <Grid container spacing={2}>
          {students.length > 0
            ? students.map((student, index) => (
                <StudentItem key={index} student={student} />
              ))
            : null}
        </Grid>
      </List>
    </Container>
  );
};

export default Students;
