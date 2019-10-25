import React, { Fragment } from "react";
import Header from "../layout/Header";
import {
  Container,
  Typography,
  makeStyles,
  Paper,
  Divider,
  Avatar,
  Grid,
  Button,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from "@material-ui/core";

import AuthContext from "../../context/auth/authContext";
import DeleteIcon from "@material-ui/icons/Delete";
import ImageIcon from "@material-ui/icons/Image";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2)
  },
  grid: {
    marginTop: theme.spacing(1)
  },
  avatar: {
    width: 130,
    height: 130
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

const Profile = () => {
  const authContext = React.useContext(AuthContext);
  const { user } = authContext;
  const avatarURL = `/api/users/${user._id}/avatar`;

  React.useEffect(() => {
    document.title = "Profile | Classroom";
    // eslint-disable-next-line
  }, []);

  // Styles
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Fragment>
      <Header />
      <Container component="main" className={classes.container}>
        <Paper className={classes.paper}>
          <Typography variant="h5" gutterBottom>
            Profile Picture
          </Typography>
          <Divider />

          <Grid
            container
            spacing={2}
            className={classes.grid}
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <Button variant="contained" startIcon={<ImageIcon />}>
                Choose Picture
              </Button>
            </Grid>
            <Grid item>
              <Avatar src={avatarURL} className={classes.avatar}></Avatar>
            </Grid>

            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
              >
                Remove Picture
              </Button>
            </Grid>
          </Grid>
        </Paper>

        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>Name</Typography>
            <Typography className={classes.secondaryHeading}>
              Muhammad Yaqoob
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>Email</Typography>
            <Typography className={classes.secondaryHeading}>
              yaqoobm91@gmail.com
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat
              lectus, varius pulvinar diam eros in elit. Pellentesque convallis
              laoreet laoreet.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>Password</Typography>
            <Typography className={classes.secondaryHeading}>
              ********
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Container>
    </Fragment>
  );
};

export default Profile;
