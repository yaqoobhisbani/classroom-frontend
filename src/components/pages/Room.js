import React, { Fragment, Suspense } from "react";
import { AppBar, Tabs, Tab, makeStyles } from "@material-ui/core";
import Header from "../layout/Header";
import TabPanel from "../layout/TabPanel";
import Loader from "../layout/Loader";
import NotFound from "../pages/NotFound";
import RoomsContext from "../../context/rooms/roomsContext";

// Icons
import BooksIcon from "@material-ui/icons/LibraryBooks";
import TaskIcon from "@material-ui/icons/AssignmentTurnedIn";
import StudentsIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import AboutIcon from "@material-ui/icons/Info";

// Room Pages
const Material = React.lazy(() => import("../room/Material"));
const Tasks = React.lazy(() => import("../room/Tasks"));
const Students = React.lazy(() => import("../room/Students"));
const Chat = React.lazy(() => import("../room/Chat"));
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

const Room = () => {
  const roomsContext = React.useContext(RoomsContext);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (roomsContext.current === null) return <NotFound />;

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

      <TabPanel value={value} index={4}>
        <Suspense fallback={<Loader />}>
          <About />
        </Suspense>
      </TabPanel>
    </Fragment>
  );
};

export default Room;
