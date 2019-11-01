import React from "react";
import {
  Typography,
  makeStyles,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";

import AuthContext from "../../../context/auth/authContext";
import RoomsContext from "../../../context/rooms/roomsContext";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

const SubjectPanel = () => {
  // Context
  const authContext = React.useContext(AuthContext);
  const roomsContext = React.useContext(RoomsContext);
  const { isAdmin } = authContext;
  const { current } = roomsContext;

  // Styles
  const classes = useStyles();

  // State
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ExpansionPanel
      expanded={expanded === "panel1"}
      onChange={isAdmin ? handleChange("panel1") : null}
    >
      <ExpansionPanelSummary
        expandIcon={
          isAdmin ? (
            <ExpandMoreIcon />
          ) : (
            <ExpandMoreIcon style={{ color: "white" }} />
          )
        }
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography className={classes.heading}>Subject</Typography>
        <Typography className={classes.secondaryHeading}>
          {current.subject}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>Empty For now!</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default SubjectPanel;
