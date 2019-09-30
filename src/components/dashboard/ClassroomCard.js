import React from "react";
import GroupIcon from "@material-ui/icons/Group";
import CodeIcon from "@material-ui/icons/Code";

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
    maxWidth: 275
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

const ClassroomCard = ({ room }) => {
  const classes = useStyles();
  const { classname, description, code, users } = room;

  return (
    <Grid item>
      <Card className={classes.card}>
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
                Students: {users.length}
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

export default ClassroomCard;
