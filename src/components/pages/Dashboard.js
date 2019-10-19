import React, { Fragment } from "react";
import FabMenu from "../dashboard/FabMenu";
import Header from "../layout/Header";
import { Container, makeStyles } from "@material-ui/core";
import RoomsContext from "../../context/rooms/roomsContext";
import AlertContext from "../../context/alerts/alertContext";

const Rooms = React.lazy(() => import("../dashboard/Rooms"));

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2)
  }
}));

const Dashboard = () => {
  const roomsContext = React.useContext(RoomsContext);
  const alertContext = React.useContext(AlertContext);
  const {
    rooms,
    error,
    success,
    clearError,
    clearCurrent,
    clearSuccess
  } = roomsContext;

  const classes = useStyles();

  React.useEffect(() => {
    document.title = "Dashboard | Classroom";
    clearCurrent();
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if (error) {
      alertContext.showAlert("error", error);
      clearError();
    }
    // eslint-disable-next-line
  }, [error]);

  React.useEffect(() => {
    if (success) {
      alertContext.showAlert("success", success);
      clearSuccess();
    }
    // eslint-disable-next-line
  }, [success]);

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
