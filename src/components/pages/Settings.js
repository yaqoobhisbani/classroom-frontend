import React, { Fragment } from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";
import Header from "../layout/Header";
import RoomsContext from "../../context/rooms/roomsContext";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(4)
  }
}));

const Settings = () => {
  const roomsContext = React.useContext(RoomsContext);
  React.useEffect(() => {
    document.title = "Settings | Classroom";
    roomsContext.clearCurrent();
    // eslint-disable-next-line
  }, []);
  const classes = useStyles();

  return (
    <Fragment>
      <Header />
      <Container component="main" className={classes.container}>
        <Typography variant="h3" gutterBottom>
          Settings Page
        </Typography>
      </Container>
    </Fragment>
  );
};

export default Settings;
