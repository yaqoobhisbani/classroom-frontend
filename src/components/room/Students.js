import React, { Fragment } from "react";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Divider,
  List
} from "@material-ui/core";
import StudentItem from "../students/StudentItem";
import FabButton from "../students/FabButton";
import RoomsContext from "../../context/rooms/roomsContext";
import AuthContext from "../../context/auth/authContext";

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
  // Context
  const roomsContext = React.useContext(RoomsContext);
  const authContext = React.useContext(AuthContext);
  const { current } = roomsContext;
  const { isAdmin } = authContext;

  // Styles
  const classes = useStyles();

  return (
    <Fragment>
      <Container component="main" className={classes.container}>
        <Typography variant="h5" gutterBottom>
          Students
        </Typography>
        <Divider />
        <List className={classes.list}>
          <Grid container spacing={2}>
            {current.students.length > 0
              ? current.students.map((student, index) => (
                  <StudentItem key={index} student={student} />
                ))
              : null}
          </Grid>
        </List>
      </Container>
      {isAdmin ? <FabButton /> : null}
    </Fragment>
  );
};

export default Students;
