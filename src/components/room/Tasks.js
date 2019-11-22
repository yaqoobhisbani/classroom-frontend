import React, { Fragment } from "react";
import {
  Container,
  Typography,
  Divider,
  Grid,
  makeStyles
} from "@material-ui/core";
import FabButton from "./tasks/FabButton";
import AuthContext from "../../context/auth/authContext";
import TaskItem from "./tasks/TaskItem";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2)
  },
  grid: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

const Tasks = () => {
  // Context
  const authContext = React.useContext(AuthContext);
  const { isAdmin } = authContext;

  // Styles
  const classes = useStyles();

  const tasks = [
    {
      title: "This is task 1",
      description: "This is the description of task 1 which is long",
      taskType: "Assignment",
      dueDate: "22/11/2019"
    },
    {
      title: "This is task 2",
      description: "This is the description of task 2 which is long",
      taskType: "Presentation",
      dueDate: "25/11/2019"
    },
    {
      title: "This is task 3",
      description: "This is the description of task 3 which is long",
      taskType: "Assignment",
      dueDate: "28/11/2019"
    },
    {
      title: "This is task 4",
      description: "This is the description of task 4 which is long",
      taskType: "Assignment",
      dueDate: "10/12/2019"
    }
  ];

  return (
    <Fragment>
      <Container component="main" className={classes.container}>
        <Typography variant="h5" gutterBottom>
          Tasks
        </Typography>
        <Divider />
        <Grid container spacing={2} className={classes.grid}>
          {tasks.length > 0
            ? tasks.map(task => <TaskItem task={task} />)
            : null}
        </Grid>
      </Container>
      {isAdmin ? <FabButton /> : null}
    </Fragment>
  );
};

export default Tasks;
