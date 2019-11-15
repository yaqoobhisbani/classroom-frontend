import React, { Fragment, Suspense } from "react";
import { AppBar, Tabs, Tab, makeStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import Header from "../layout/Header";
import TabPanel from "../layout/TabPanel";
import Loader from "../layout/Loader";
import RoomsContext from "../../context/rooms/roomsContext";
import AuthContext from "../../context/auth/authContext";
import ChatContext from "../../context/chat/chatContext";

// Icons
import BooksIcon from "@material-ui/icons/LibraryBooks";
import TaskIcon from "@material-ui/icons/AssignmentTurnedIn";
import StudentsIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import AdminIcon from "@material-ui/icons/Settings";
import AboutIcon from "@material-ui/icons/Info";

// Room Pages
const Material = React.lazy(() => import("../room/Material"));
const Students = React.lazy(() => import("../room/Students"));
const Tasks = React.lazy(() => import("../room/Tasks"));
const Chat = React.lazy(() => import("../room/Chat"));
const Admin = React.lazy(() => import("../room/Admin"));
const About = React.lazy(() => import("../room/About"));

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
  const authContext = React.useContext(AuthContext);
  const chatContext = React.useContext(ChatContext);
  const { current } = roomsContext;
  const { isAdmin } = authContext;
  const code = props.match.params.code;

  // Styles
  const classes = useStyles();

  // Tab Panels State
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Component Effects
  // Set Room in Current Object By Getting Code from URL
  React.useEffect(() => {
    if (roomsContext.loading === false) {
      roomsContext.loadRoom(code);
    }
    // eslint-disable-next-line
  }, [roomsContext.loading]);

  // Set Room in Chat Context
  React.useEffect(() => {
    if (current) {
      const room = {
        roomid: current._id,
        code: current.code
      };

      chatContext.setRoom(room);
    }
    // eslint-disable-next-line
  }, [current]);

  // Clear Clear Room in RoomsContext & Disconnect Chat Connection
  // When Room Component Unmounts!
  React.useEffect(() => {
    return () => {
      roomsContext.clearCurrent();
      chatContext.resetMessages();
    };
    // eslint-disable-next-line
  }, []);

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
          {isAdmin ? (
            <Tab icon={<AdminIcon />} label="Admin" {...a11yProps(4)} />
          ) : null}
          <Tab icon={<AboutIcon />} label="About" {...a11yProps(5)} />
        </Tabs>
      </AppBar>

      {current === null ? (
        <Loader />
      ) : (
        <Fragment>
          <TabPanel value={value} index={0}>
            <Suspense fallback={<Loader />}>
              <Material />
            </Suspense>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Suspense fallback={<Loader />}>
              <Tasks />
            </Suspense>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <Suspense fallback={<Loader />}>
              <Students />
            </Suspense>
          </TabPanel>

          <TabPanel value={value} index={3}>
            <Suspense fallback={<Loader />}>
              <Chat />
            </Suspense>
          </TabPanel>

          {isAdmin ? (
            <TabPanel value={value} index={4}>
              <Suspense fallback={<Loader />}>
                <Admin />
              </Suspense>
            </TabPanel>
          ) : null}

          <TabPanel value={value} index={isAdmin ? 5 : 4}>
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          </TabPanel>
        </Fragment>
      )}
    </Fragment>
  );
};

export default withRouter(Room);
