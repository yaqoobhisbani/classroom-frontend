import React from "react";
import {
  Grid,
  ListItem,
  ListItemAvatar,
  Badge,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  makeStyles,
  Tooltip
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ConfirmRemoveDialog from "./ConfirmRemoveDialog";
import RoomsContext from "../../../context/rooms/roomsContext";
import AuthContext from "../../../context/auth/authContext";

const useStyles = makeStyles(theme => ({
  listItem: {
    cursor: "pointer",
    transition: "all 0.4s ease-out",
    borderRadius: 5,
    "&:hover": {
      background: "#fff",
      boxShadow: "3px 5px 10px 0px #dedede"
    }
  }
}));

const StudentItem = ({ student }) => {
  // Context
  const roomsContext = React.useContext(RoomsContext);
  const authContext = React.useContext(AuthContext);
  const { current } = roomsContext;
  const { isAdmin } = authContext;

  // Remove Student Modal State
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  // Props
  const { name, id } = student;

  // Dynamic Local Variables
  const avatarURL = `/api/users/${id}/avatar`;
  const isStudentAdmin = current.createdBy === id ? true : false;

  // Styles
  const classes = useStyles();

  // On Remove
  const onRemove = () => {
    handleOpenModal();
  };

  // Avatar With Admin Badge
  const AdminAvatar = (
    <Badge
      color="secondary"
      badgeContent="Admin"
      anchorOrigin={{
        horizontal: "right",
        vertical: "top"
      }}
    >
      <Avatar src={avatarURL} />
    </Badge>
  );

  // Normal Avatar
  const NormalAvatar = <Avatar src={avatarURL} />;

  // Delete Button
  const DeleteButton = (
    <ListItemSecondaryAction>
      <Tooltip title="Remove Student" placement="top">
        <IconButton onClick={onRemove} edge="end" aria-label="remove">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </ListItemSecondaryAction>
  );

  return (
    <Grid item className={classes.listItem} xs={12} sm={4} md="auto">
      <ListItem>
        <ListItemAvatar>
          {isStudentAdmin ? AdminAvatar : NormalAvatar}
        </ListItemAvatar>
        <ListItemText>
          <Typography variant="subtitle2">{name}</Typography>
        </ListItemText>
        {isAdmin && !isStudentAdmin ? DeleteButton : null}
      </ListItem>
      <ConfirmRemoveDialog
        student={student}
        open={openModal}
        handleClose={handleCloseModal}
      />
    </Grid>
  );
};

export default StudentItem;
