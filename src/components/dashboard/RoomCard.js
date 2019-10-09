import React, { useContext } from "react";
import GroupIcon from "@material-ui/icons/Group";
import CodeIcon from "@material-ui/icons/Code";
import { withRouter } from "react-router-dom";
import RoomsContext from "../../context/rooms/roomsContext";

import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    maxWidth: "100%"
  },
  media: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 140,
    background: "#263238",
    color: "white"
  },
  mediaIcon: {
    marginRight: 10
  },
  mediaText: {},
  mediaContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

const RoomCard = props => {
  const roomsContext = useContext(RoomsContext);
  const classes = useStyles();
  const { classname, description, code, students } = props.room;

  const onClick = () => {
    roomsContext.loadRoom(code);
    props.history.push(`/room/${code}`);
  };

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card onClick={onClick} className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media}>
            <div className={classes.mediaContainer}>
              <CodeIcon className={classes.mediaIcon} fontSize="large" />
              <Typography className={classes.mediaText}>
                {" "}
                Code: {code}
              </Typography>
            </div>

            <div className={classes.mediaContainer}>
              <GroupIcon className={classes.mediaIcon} fontSize="large" />
              <Typography className={classes.mediaText}>
                {" "}
                Students: {students.length}
              </Typography>
            </div>
          </CardMedia>

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {classname}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default withRouter(RoomCard);
