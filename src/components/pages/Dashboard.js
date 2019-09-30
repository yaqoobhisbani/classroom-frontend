import React, { Fragment, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import FabMenu from "../dashboard/FabMenu";
import Header from "../layout/Header";
import {
  Typography,
  Container,
  makeStyles,
  Divider,
  Grid
} from "@material-ui/core";
import ClassroomCard from "../dashboard/ClassroomCard";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  container: {
    marginTop: theme.spacing(2)
  }
}));

const Dashboard = () => {
  // DUMMY DATA
  const [joinedRooms, setJoinedRooms] = React.useState([
    {
      classname: "OOP Java",
      subject: "Object Oriented Programming Java",
      description: "Starting Object Oriented Programming with Java",
      code: "hg5j7a",
      users: []
    },
    {
      classname: "C++ Programming",
      subject: "Programming Foundation with C++",
      description: "Beginning the World of Programming with C++",
      code: "ax65gf",
      users: []
    },
    {
      classname: "Oracle Database",
      subject: "DBA Oracle Fundamentals",
      description: "Beginning the World of Programming with C++",
      code: "kxasd5",
      users: []
    },
    {
      classname: "Computer Networks",
      subject: "Programming Foundation with C++",
      description: "Beginning the World of Programming with C++",
      code: "bhx5sd",
      users: []
    }
  ]);

  const authContext = useContext(AuthContext);
  const classes = useStyles();

  useEffect(() => {
    authContext.loadUser();
    console.log("Dashboard useEffect fired!");
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Header />
      <Container component="main" className={classes.container}>
        <Container component="section">
          <Typography variant="h5" gutterBottom>
            Your Classrooms
          </Typography>
          <Divider />
          <Grid className={classes.root} container spacing={2}>
            {joinedRooms.map(room => (
              <ClassroomCard key={room.code} room={room} />
            ))}
          </Grid>
        </Container>

        <Container component="section">
          <Typography variant="h5" gutterBottom>
            Joined Classrooms
          </Typography>
          <Divider />
          <Grid className={classes.root} container spacing={2}>
            {joinedRooms.map(room => (
              <ClassroomCard key={room.code} room={room} />
            ))}
          </Grid>
        </Container>
      </Container>
      <FabMenu />
    </Fragment>
  );
};

export default Dashboard;
