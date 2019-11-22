import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  makeStyles,
  Grid
} from "@material-ui/core";

import RoomsContext from "../../../context/rooms/roomsContext";
import TaskContext from "../../../context/tasks/taskContext";
import ModalTitle from "../../dashboard/ModalTitle";
import DueDateChooser from "./DueDateChooser";
import moment from "moment";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: -10
  },
  textField: {
    width: 170
  },
  menu: {
    width: 180
  }
}));

const AddTaskModal = ({ open, onClose }) => {
  // Context
  const roomsContext = React.useContext(RoomsContext);
  const taskContext = React.useContext(TaskContext);
  const { current } = roomsContext;
  const { createTask } = taskContext;

  // Initial Task State
  const initialState = {
    title: "",
    description: "",
    taskType: "",
    dueDate: moment(new Date()).format()
  };

  // State
  const [task, setTask] = React.useState(initialState);

  const { title, description, taskType, dueDate } = task;

  // On Change Methods
  const onTitleChange = e => setTask({ ...task, title: e.target.value });
  const onDescChange = e => setTask({ ...task, description: e.target.value });
  const onTaskTypeChange = e => setTask({ ...task, taskType: e.target.value });
  const onDueDate = date => setTask({ ...task, dueDate: date });

  // Classes
  const classes = useStyles();

  // on Closing
  const onClosing = () => {
    setTask(initialState);
    onClose();
  };

  // On Submit
  const onSubmit = e => {
    e.preventDefault();

    // Check For Errors
    if (
      title.length > 0 &&
      description.length > 0 &&
      taskType.length > 0 &&
      dueDate !== "Invalid Date"
    ) {
      createTask(current.code, task);
      onClosing();
    }
  };

  return (
    <Dialog onClose={onClosing} open={open}>
      <ModalTitle onClose={onClosing}>Create New Task</ModalTitle>
      <DialogContent dividers>
        <form
          onSubmit={onSubmit}
          id="create-task"
          className={classes.container}
        >
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            required
            label="Title"
            value={title}
            onChange={onTitleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            required
            label="Description"
            value={description}
            onChange={onDescChange}
          />

          <Grid container justify="space-between" spacing={2}>
            <Grid item>
              <TextField
                select
                required
                label="Task Type"
                margin="normal"
                variant="outlined"
                value={taskType}
                onChange={onTaskTypeChange}
                className={classes.textField}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
              >
                <MenuItem value="Assignment">Assignment</MenuItem>
                <MenuItem value="Presentation">Presentation</MenuItem>
              </TextField>
            </Grid>

            <Grid item>
              <DueDateChooser dueDate={dueDate} onDueDate={onDueDate} />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClosing} color="primary">
          Cancel
        </Button>
        <Button type="submit" form="create-task" color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTaskModal;
