import React from "react";
import {
  Container,
  Typography,
  Divider,
  makeStyles,
  List,
  Grid
} from "@material-ui/core";

import StudentItem from "../admin/StudentItem";
import RoomsContext from "../../context/rooms/roomsContext";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2)
  },
  list: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

const Admin = () => {
  // Context
  const roomsContext = React.useContext(RoomsContext);
  const { current } = roomsContext;

  // Styles
  const classes = useStyles();

  const approvals = [
    { name: "Muhammad Yaqoob", id: "iuhaisdf" },
    { name: "Kashif Hussain", id: "asdf" },
    { name: "Khalil Ahmed", id: "kjh" },
    { name: "Zeeshan Muneer", id: "opjoj" },
    { name: "Tahir Ali Tunio", id: "adasd" },
    { name: "Ameer Muhammad", id: "aoijoi" }
  ];

  return (
    <Container component="main" className={classes.container}>
      <Typography variant="h5" gutterBottom>
        Pending Approvals
      </Typography>
      <Divider />
      <List className={classes.list}>
        <Grid container spacing={2}>
          {approvals.length > 0
            ? approvals.map(student => (
                <StudentItem student={student} key={student.id} />
              ))
            : null}
        </Grid>
      </List>
    </Container>
  );
};

export default Admin;
