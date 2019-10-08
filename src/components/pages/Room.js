import React, { Fragment, useContext } from "react";
import Header from "../layout/Header";
import { Container, makeStyles, Typography } from "@material-ui/core";
import RoomsContext from "../../context/rooms/roomsContext";
import NotFound from "../pages/NotFound";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2)
  }
}));

const Room = () => {
  const roomsContext = useContext(RoomsContext);
  const { current, clearCurrent } = roomsContext;

  React.useEffect(() => {
    if (current) {
      document.title = current.classname + " | Classroom";
    }

    return () => {
      clearCurrent();
    };
    // eslint-disable-next-line
  }, []);

  const classes = useStyles();

  if (current === null) return <NotFound />;

  return (
    <Fragment>
      <Header />
      <Container component="main" className={classes.container}>
        <Typography>This is room</Typography>
      </Container>
    </Fragment>
  );
};

export default Room;
