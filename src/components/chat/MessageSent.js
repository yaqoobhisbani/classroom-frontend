import React from "react";
import {
  Avatar,
  Paper,
  Divider,
  Typography,
  Grid,
  makeStyles
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2),
    background: theme.palette.primary.main,
    color: "white"
  },
  text: {
    paddingTop: theme.spacing(1)
  }
}));

const MessageSent = () => {
  // Styles
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row-reverse"
      spacing={2}
      className={classes.container}
    >
      <Grid item xs={2} sm={1}>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </Grid>

      <Grid item xs={10} sm={7}>
        <Paper className={classes.paper}>
          <Typography variant="subtitle2" align="right" gutterBottom>
            <span style={{ fontWeight: 300 }}>6 mins ago |</span> Muhammad
            Yaqoob
          </Typography>
          <Divider />
          <Typography variant="body2" className={classes.text}>
            This is some long text which is going to the message that we send
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MessageSent;
