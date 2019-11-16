import React from "react";
import {
  Container,
  Typography,
  Divider,
  makeStyles,
  List,
  Grid
} from "@material-ui/core";

import StudentItem from "./admin/StudentItem";
import RoomsContext from "../../context/rooms/roomsContext";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2)
  },
  list: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  noPending: {
    textAlign: "center"
  }
}));

const Admin = () => {
  // Context
  const roomsContext = React.useContext(RoomsContext);
  const { current } = roomsContext;

  // Styles
  const classes = useStyles();

  const NoPendingApprovals = (
    <div className={classes.noPending}>
      <Typography style={{ marginBottom: 8 }} variant="h5">
        All Good Here.
      </Typography>
      <Typography>There are no pending approvals!</Typography>
    </div>
  );

  return (
    <Container component="main" className={classes.container}>
      <Typography variant="h5" gutterBottom>
        Pending Approvals
      </Typography>
      <Divider />
      <List className={classes.list}>
        <Grid container spacing={2}>
          {current.approvals.length > 0
            ? current.approvals.map(student => (
                <StudentItem student={student} key={student.id} />
              ))
            : null}
        </Grid>
      </List>
      {current.approvals.length === 0 ? NoPendingApprovals : null}
    </Container>
  );
};

export default Admin;
