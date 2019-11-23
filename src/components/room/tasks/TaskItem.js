import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
  Chip,
  Tooltip,
  makeStyles
} from "@material-ui/core";
import ConfirmRemoveDialog from "./ConfirmRemoveDialog";

// Context
import AuthContext from "../../../context/auth/authContext";
import RoomsContext from "../../../context/rooms/roomsContext";
import TaskContext from "../../../context/tasks/taskContext";

// Icons
import EditIcon from "@material-ui/icons/Edit";
import RemoveIcon from "@material-ui/icons/Delete";
import DeadlineIcon from "@material-ui/icons/Schedule";
import AssignmentIcon from "@material-ui/icons/AssignmentRounded";
import PresentationIcon from "@material-ui/icons/SlideshowRounded";

const EditTaskModal = React.lazy(() => import("./EditTaskModal"));

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "100%"
  },
  tag: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(1)
  },
  deadline: {
    marginTop: 10
  }
}));

const TaskItem = ({ task }) => {
  // Context
  const authContext = React.useContext(AuthContext);
  const roomsContext = React.useContext(RoomsContext);
  const taskContext = React.useContext(TaskContext);
  const { isAdmin } = authContext;
  const { current } = roomsContext;
  const { removeTask, getTasks } = taskContext;

  // Styles
  const classes = useStyles();

  // Values
  const { title, description, taskType, shortDate, fullDate } = task;
  const TagIcon = taskType === "Assignment" ? AssignmentIcon : PresentationIcon;

  // On Remove
  const onRemove = () => {
    removeTask(current.code, task._id);
    getTasks(current.code);
  };

  // Confirm Delete Modal State
  const [confirmModal, setConfirmModal] = React.useState(false);
  const handleOpenConfirm = () => setConfirmModal(true);
  const handleCloseConfirm = () => setConfirmModal(false);

  // State
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.tag}>
            <Chip icon={<TagIcon />} label={taskType} color="primary" />
          </div>
          <Typography gutterBottom variant="h6">
            {title}
          </Typography>
          <Typography gutterBottom variant="body2">
            {description}
          </Typography>
          <div className={classes.deadline}>
            <Typography variant="subtitle2">
              Due Date:{" "}
              <Tooltip title={fullDate} placement="top">
                <span style={{ fontWeight: 400 }}>
                  <Chip
                    icon={<DeadlineIcon />}
                    size="small"
                    label={shortDate}
                    color="secondary"
                  />
                </span>
              </Tooltip>
            </Typography>
          </div>
        </CardContent>
        {isAdmin ? (
          <CardActions className={classes.cardActions}>
            <Grid container justify="space-between">
              <Grid item>
                <Tooltip title="Remove Task" placement="top">
                  <Button
                    onClick={handleOpenConfirm}
                    startIcon={<RemoveIcon />}
                  >
                    Remove
                  </Button>
                </Tooltip>
              </Grid>

              <Grid item>
                <Tooltip title="Edit Task" placement="top">
                  <Button onClick={handleOpen} startIcon={<EditIcon />}>
                    Edit
                  </Button>
                </Tooltip>
              </Grid>
            </Grid>
          </CardActions>
        ) : null}
      </Card>

      <ConfirmRemoveDialog
        open={confirmModal}
        handleClose={handleCloseConfirm}
        task={task}
        onConfirm={onRemove}
      />

      <React.Suspense>
        <ConfirmRemoveDialog
          open={confirmModal}
          handleClose={handleCloseConfirm}
          task={task}
          onConfirm={onRemove}
        />
        <EditTaskModal open={open} onClose={handleClose} currentTask={task} />
      </React.Suspense>
    </Grid>
  );
};

export default TaskItem;
