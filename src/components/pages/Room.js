import React, { Fragment, Suspense } from "react";
import { AppBar, Tabs, Tab, makeStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import Header from "../layout/Header";
import TabPanel from "../layout/TabPanel";
import Loader from "../layout/Loader";
import RoomsContext from "../../context/rooms/roomsContext";

// Icons
import BooksIcon from "@material-ui/icons/LibraryBooks";
import TaskIcon from "@material-ui/icons/AssignmentTurnedIn";
import StudentsIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import AboutIcon from "@material-ui/icons/Info";

// Room Pages
import Material from "../room/Material";
import Students from "../room/Students";
import Tasks from "../room/Tasks";
import Chat from "../room/Chat";
import About from "../room/About";

const a11yProps = index => {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

const Room = props => {
  const roomsContext = React.useContext(RoomsContext);
  const { current } = roomsContext;
  const code = props.match.params.code;

  // Styles
  const classes = useStyles();

  // Tab Panels State
  const [value, setValue] = React.useState(0);

  // Component Effects
  React.useEffect(() => {
    if (roomsContext.loading === false) {
      roomsContext.loadRoom(code);
    }
    // eslint-disable-next-line
  }, [roomsContext.loading]);

  React.useEffect(() => {
    // Clearing Current Object Whenenver Room Component Unmounts
    return () => {
      roomsContext.clearCurrent();
    };
    // eslint-disable-next-line
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <Header />

      <AppBar position="static" color="default" className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab icon={<BooksIcon />} label="Material" {...a11yProps(0)} />
          <Tab icon={<TaskIcon />} label="Tasks" {...a11yProps(1)} />
          <Tab icon={<StudentsIcon />} label="Students" {...a11yProps(2)} />
          <Tab icon={<ChatIcon />} label="Chat" {...a11yProps(3)} />
          <Tab icon={<AboutIcon />} label="About" {...a11yProps(4)} />
        </Tabs>
      </AppBar>

      {current === null ? (
        <Loader />
      ) : (
        <Fragment>
          <TabPanel value={value} index={0}>
            <Material />
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Tasks />
          </TabPanel>

          <TabPanel value={value} index={2}>
            <Students />
          </TabPanel>

          <TabPanel value={value} index={3}>
            <Chat />
          </TabPanel>

          <TabPanel value={value} index={4}>
            <About />
          </TabPanel>
        </Fragment>
      )}
    </Fragment>
  );
};

export default withRouter(Room);
