import React, { useContext } from "react";
import {
  Container,
  Typography,
  Divider,
  Grid,
  makeStyles
} from "@material-ui/core";
import RoomCard from "./RoomCard";
import RoomsContext from "../../context/rooms/roomsContext";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

const Rooms = ({ rooms, loader }) => {
  const roomsContext = useContext(RoomsContext);
  const classes = useStyles();

  if (roomsContext.loading === true) return loader;

  return (
    <Container component="section">
      <Typography variant="h5" gutterBottom>
        Classrooms
      </Typography>
      <Divider />
      <Grid className={classes.root} container spacing={2}>
        {rooms.map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
      </Grid>
    </Container>
  );
};

export default Rooms;
