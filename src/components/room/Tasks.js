import React, { Fragment } from "react";
import {
  Container,
  Typography,
  Divider,
  Grid,
  makeStyles
} from "@material-ui/core";
import FabButton from "./tasks/FabButton";
import TaskItem from "./tasks/TaskItem";
import Loader from "../layout/Loader";

import AuthContext from "../../context/auth/authContext";
import RoomsContext from "../../context/rooms/roomsContext";
import TaskContext from "../../context/tasks/taskContext";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2)
  },
  grid: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  noTasks: {
    textAlign: "center",
    marginTop: 20
  }
}));

const Tasks = () => {
  // Context
  const authContext = React.useContext(AuthContext);
  const roomsContext = React.useContext(RoomsContext);
  const taskContext = React.useContext(TaskContext);
  const { isAdmin } = authContext;
  const { current } = roomsContext;
  const { tasks, getTasks, resetTasks } = taskContext;

  // Styles
  const classes = useStyles();

  // Effects
  React.useEffect(() => {
    getTasks(current.code);

    // Cleanup
    return () => {
      resetTasks();
    };
    // eslint-disable-next-line
  }, []);

  if (taskContext.loading === true) return <Loader />;

  const TasksTitle = (
    <Fragment>
      <Typography variant="h5" gutterBottom>
        Tasks
      </Typography>
      <Divider />
    </Fragment>
  );

  const NoTasks = (
    <div className={classes.noTasks}>
      <Typography style={{ marginBottom: 8 }} variant="h5">
        No Tasks Available.
      </Typography>
      <Typography>Comeback later until admin adds tasks!</Typography>
    </div>
  );

  return (
    <Fragment>
      <Container component="main" className={classes.container}>
        {tasks.length > 0 ? TasksTitle : null}
        <Grid container spacing={2} className={classes.grid}>
          {tasks.length > 0
            ? tasks.map(task => <TaskItem task={task} key={task._id} />)
            : null}
        </Grid>
        {tasks.length === 0 ? NoTasks : null}
      </Container>
      {isAdmin ? <FabButton /> : null}
    </Fragment>
  );
};

export default Tasks;
