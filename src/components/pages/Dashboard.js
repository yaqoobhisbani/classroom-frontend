import React, { Fragment } from "react";
import FabMenu from "../dashboard/FabMenu";
import Header from "../layout/Header";
import { Container, makeStyles } from "@material-ui/core";
import RoomsContext from "../../context/rooms/roomsContext";
import AuthContext from "../../context/auth/authContext";

const Rooms = React.lazy(() => import("../dashboard/Rooms"));

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2)
  }
}));

const Dashboard = () => {
  const roomsContext = React.useContext(RoomsContext);
  const authContext = React.useContext(AuthContext);
  const { rooms, getRooms } = roomsContext;
  const { loading } = authContext;

  const classes = useStyles();

  React.useEffect(() => {
    if (loading === false) {
      getRooms();
    }
    // eslint-disable-next-line
  }, [loading]);

  return (
    <Fragment>
      <Header />
      <Container component="main" className={classes.container}>
        <Rooms rooms={rooms} />
      </Container>
      <FabMenu />
    </Fragment>
  );
};

export default Dashboard;
