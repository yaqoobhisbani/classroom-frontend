import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  makeStyles
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AuthContext from "../../../context/auth/authContext";
import RoomsContext from "../../../context/rooms/roomsContext";

// Expanded Panels
import ClassNameExpanded from "./expanded/ClassNameExpanded";
import SubjectExpanded from "./expanded/SubjectExpanded";
import DescriptionExpanded from "./expanded/DescriptionExpanded";

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

const AboutPanels = () => {
  // Context
  const authContext = React.useContext(AuthContext);
  const roomsContext = React.useContext(RoomsContext);
  const { isAdmin } = authContext;
  const { current } = roomsContext;

  // Styles
  const classes = useStyles();

  // Panels State
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <React.Fragment>
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
          <Typography className={classes.heading}>Class Name</Typography>
          <Typography className={classes.secondaryHeading}>
            {current.classname}
          </Typography>
        </ExpansionPanelSummary>
        <ClassNameExpanded />
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel2"}
        onChange={isAdmin ? handleChange("panel2") : null}
      >
        <ExpansionPanelSummary
          expandIcon={
            isAdmin ? (
              <ExpandMoreIcon />
            ) : (
              <ExpandMoreIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Subject</Typography>
          <Typography className={classes.secondaryHeading}>
            {current.subject}
          </Typography>
        </ExpansionPanelSummary>
        <SubjectExpanded />
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel3"}
        onChange={isAdmin ? handleChange("panel3") : null}
      >
        <ExpansionPanelSummary
          expandIcon={
            isAdmin ? (
              <ExpandMoreIcon />
            ) : (
              <ExpandMoreIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Description</Typography>
          <Typography className={classes.secondaryHeading}>
            {current.description}
          </Typography>
        </ExpansionPanelSummary>
        <DescriptionExpanded />
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === "panel4"}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Room Code</Typography>
          <Typography className={classes.secondaryHeading}>
            {current.code}
          </Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === "panel5"}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>Total Students</Typography>
          <Typography className={classes.secondaryHeading}>
            {current.students.length}
          </Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
    </React.Fragment>
  );
};

export default AboutPanels;
