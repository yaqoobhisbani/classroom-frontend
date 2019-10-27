import React, { Fragment } from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  makeStyles
} from "@material-ui/core";

import AuthContext from "../../context/auth/authContext";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// Expanded Components
import NameExpanded from "./NameExpanded";
import EmailExpanded from "./EmailExpanded";
import PasswordExpanded from "./PasswordExpanded";

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
        <NameExpanded />
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
        <EmailExpanded />
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
        <PasswordExpanded />
      </ExpansionPanel>
    </Fragment>
  );
};

export default AccountInfo;
