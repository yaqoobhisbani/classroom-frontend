import React from "react";
import {
  ExpansionPanelDetails,
  Grid,
  TextField,
  Typography,
  Button
} from "@material-ui/core";

import RoomsContext from "../../../../context/rooms/roomsContext";
import SendIcon from "@material-ui/icons/Send";

const ClassNameExpanded = () => {
  // Context
  const roomsContext = React.useContext(RoomsContext);
  const { changeClassName, current } = roomsContext;

  // Empty Error
  const emptyError = {
    isInvalid: false,
    msg: null
  };

  // State
  const [className, setClassName] = React.useState("");
  const [error, setError] = React.useState(emptyError);

  const onChange = e => {
    setClassName(e.target.value);
    if (e.target.value.length < 3) {
      setError({
        isInvalid: true,
        msg: "Must have 3 characters"
      });
    } else {
      setError(emptyError);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!error.isInvalid && className.length > 2) {
      changeClassName(current.code, { classname: className });
      setClassName("");
    }
  };

  return (
    <ExpansionPanelDetails>
      <Grid container spacing={2} alignItems="center">
        <Grid item sm={3} xs={12}>
          <Typography variant="subtitle2">Change Class Name:</Typography>
        </Grid>

        <Grid item>
          <form id="change-classname" onSubmit={onSubmit}>
            <TextField
              error={error.isInvalid}
              type="text"
              variant="outlined"
              margin="dense"
              label={error.msg ? error.msg : "Class Name"}
              onChange={onChange}
              value={className}
              required
            />
          </form>
        </Grid>

        <Grid item>
          <Button
            type="submit"
            form="change-classname"
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

export default ClassNameExpanded;
