import React, { Fragment, Suspense } from "react";
import Header from "../layout/Header";
import TabPanel from "../layout/TabPanel";
import { AppBar, Tabs, Tab, makeStyles } from "@material-ui/core";

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
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <Header />
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab
              icon={<BooksIcon />}
              label="Study Material"
              {...a11yProps(0)}
            />
            <Tab icon={<TaskIcon />} label="Tasks" {...a11yProps(1)} />
            <Tab icon={<StudentsIcon />} label="Students" {...a11yProps(2)} />
            <Tab icon={<ChatIcon />} label="Chat" {...a11yProps(3)} />
            <Tab icon={<AboutIcon />} label="About" {...a11yProps(4)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>
          <Suspense fallback={<h1>Loading..</h1>}>
            <Material />
          </Suspense>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Suspense fallback={<h1>Loading..</h1>}>
            <Tasks />
          </Suspense>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Suspense fallback={<h1>Loading..</h1>}>
            <Students />
          </Suspense>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Suspense fallback={<h1>Loading..</h1>}>
            <Chat />
          </Suspense>
        </TabPanel>

        <TabPanel value={value} index={4}>
          <Suspense fallback={<h1>Loading..</h1>}>
            <About />
          </Suspense>
        </TabPanel>
      </div>
    </Fragment>
  );
};

export default Room;
