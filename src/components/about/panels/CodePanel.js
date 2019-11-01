import React from "react";
import {
  Typography,
  makeStyles,
  ExpansionPanel,
  ExpansionPanelSummary
} from "@material-ui/core";

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

const CodePanel = () => {
  // Context
  const roomsContext = React.useContext(RoomsContext);
  const { current } = roomsContext;

  // Styles
  const classes = useStyles();

  // State
  const [expanded] = React.useState(false);

  return (
    <ExpansionPanel expanded={expanded === "panel1"}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography className={classes.heading}>Room Code</Typography>
        <Typography className={classes.secondaryHeading}>
          {current.code}
        </Typography>
      </ExpansionPanelSummary>
    </ExpansionPanel>
  );
};

export default CodePanel;
