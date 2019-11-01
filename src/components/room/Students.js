import React, { Fragment, Suspense } from "react";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Divider,
  List
} from "@material-ui/core";

import RoomsContext from "../../context/rooms/roomsContext";
import AuthContext from "../../context/auth/authContext";
import Loader from "../layout/Loader";

// Lazy Loaded Components
const StudentItem = React.lazy(() => import("../students/StudentItem"));
const FabButton = React.lazy(() => import("../students/FabButton"));

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
        <Suspense fallback={<Loader />}>
          <List className={classes.list}>
            <Grid container spacing={2}>
              {current.students.length > 0
                ? current.students.map((student, index) => (
                    <StudentItem key={index} student={student} />
                  ))
                : null}
            </Grid>
          </List>
          {isAdmin ? <FabButton /> : null}
        </Suspense>
      </Container>
    </Fragment>
  );
};

export default Students;
