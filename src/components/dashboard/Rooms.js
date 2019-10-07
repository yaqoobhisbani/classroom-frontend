import React, { Fragment, useContext } from "react";
import {
  Container,
  Typography,
  Divider,
  Grid,
  makeStyles,
  CircularProgress
} from "@material-ui/core";
import RoomCard from "./RoomCard";
import RoomsContext from "../../context/rooms/roomsContext";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  noRooms: {
    textAlign: "center",
    paddingTop: 10
  }
}));

const Rooms = ({ rooms }) => {
  const roomsContext = useContext(RoomsContext);
  const classes = useStyles();

  // Loader
  const loader = (
    <div className={classes.loader}>
      <CircularProgress color="secondary" />
    </div>
  );

  // Rooms
  const Rooms = (
    <Fragment>
      <Typography variant="h5" gutterBottom>
        Classrooms
      </Typography>
      <Divider />
      <Grid className={classes.root} container spacing={2}>
        {rooms.map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
      </Grid>
    </Fragment>
  );

  // No Rooms Available
  const NoRooms = (
    <div className={classes.noRooms}>
      <Typography style={{ marginBottom: 8 }} variant="h5">
        It's lonely here.
      </Typography>
      <Typography>
        To get started, you need to create or join classrooms.
      </Typography>
    </div>
  );

  // Show Loader When Rooms are Loading
  if (roomsContext.loading === true) return loader;

  return (
    <Container component="section">
      {rooms.length > 0 ? Rooms : NoRooms}
    </Container>
  );
};

export default Rooms;
