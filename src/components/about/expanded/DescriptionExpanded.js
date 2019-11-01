import React from "react";
import {
  ExpansionPanelDetails,
  Grid,
  TextField,
  Typography,
  Button
} from "@material-ui/core";

import RoomsContext from "../../../context/rooms/roomsContext";
import SendIcon from "@material-ui/icons/Send";

const DescriptionExpanded = () => {
  // Context
  const roomsContext = React.useContext(RoomsContext);
  const { changeDescription, current } = roomsContext;

  // Empty Error
  const emptyError = {
    isInvalid: false,
    msg: null
  };

  // State
  const [description, setDescription] = React.useState("");
  const [error, setError] = React.useState(emptyError);

  const onChange = e => {
    setDescription(e.target.value);
    if (e.target.value.length < 5) {
      setError({
        isInvalid: true,
        msg: "Must have 5 characters"
      });
    } else {
      setError(emptyError);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!error.isInvalid && description.length > 2) {
      changeDescription(current.code, { description: description });
      setDescription("");
    }
  };

  return (
    <ExpansionPanelDetails>
      <Grid container spacing={2} alignItems="center">
        <Grid item sm={3} xs={12}>
          <Typography variant="subtitle2">Change Description:</Typography>
        </Grid>

        <Grid item>
          <form id="change-desc" onSubmit={onSubmit}>
            <TextField
              error={error.isInvalid}
              type="text"
              variant="outlined"
              margin="dense"
              label={error.msg ? error.msg : "Description"}
              onChange={onChange}
              value={description}
              required
            />
          </form>
        </Grid>

        <Grid item>
          <Button
            type="submit"
            form="change-desc"
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </ExpansionPanelDetails>
  );
};

export default DescriptionExpanded;
