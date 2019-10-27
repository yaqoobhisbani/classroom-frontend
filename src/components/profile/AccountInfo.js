import React, { Fragment } from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  makeStyles,
  TextField,
  Button,
  Grid
} from "@material-ui/core";

import AuthContext from "../../context/auth/authContext";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles(theme => ({
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

const AccountInfo = () => {
  // Context
  const authContext = React.useContext(AuthContext);
  const { user } = authContext;

  // Styles
  const classes = useStyles();

  // State
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Name Expanded
  const NameExpanded = (
    <ExpansionPanelDetails>
      <Grid container spacing={2} alignItems="center">
        <Grid item sm={3} xs={12}>
          <Typography variant="subtitle2">Change Name:</Typography>
        </Grid>

        <Grid item>
          <TextField
            type="text"
            variant="outlined"
            margin="dense"
            label="Full Name"
          />
        </Grid>

        <Grid item>
          <Button variant="contained" color="primary" endIcon={<SendIcon />}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </ExpansionPanelDetails>
  );

  const EmailExpanded = (
    <ExpansionPanelDetails>
      <Grid container spacing={2} alignItems="center">
        <Grid item sm={3} xs={12}>
          <Typography variant="subtitle2">Change Email:</Typography>
        </Grid>

        <Grid item>
          <TextField
            type="email"
            variant="outlined"
            margin="dense"
            label="Email"
          />
        </Grid>

        <Grid item>
          <Button variant="contained" color="primary" endIcon={<SendIcon />}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </ExpansionPanelDetails>
  );

  const PasswordExpanded = (
    <ExpansionPanelDetails>
      <Grid container spacing={2} alignItems="center">
        <Grid item sm={3} xs={12}>
          <Typography variant="subtitle2">Change Password:</Typography>
        </Grid>

        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <TextField
                type="password"
                variant="outlined"
                margin="dense"
                label="Old Password"
              />
            </Grid>

            <Grid item>
              <TextField
                type="password"
                variant="outlined"
                margin="dense"
                label="New Password"
              />
            </Grid>

            <Grid item>
              <TextField
                type="password"
                variant="outlined"
                margin="dense"
                label="Confirm Password"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Button variant="contained" color="primary" endIcon={<SendIcon />}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </ExpansionPanelDetails>
  );

  return (
    <Fragment>
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
            {user.name}
          </Typography>
        </ExpansionPanelSummary>
        {NameExpanded}
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
            {user.email}
          </Typography>
        </ExpansionPanelSummary>
        {EmailExpanded}
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
          <Typography className={classes.secondaryHeading}>********</Typography>
        </ExpansionPanelSummary>
        {PasswordExpanded}
      </ExpansionPanel>
    </Fragment>
  );
};

export default AccountInfo;
