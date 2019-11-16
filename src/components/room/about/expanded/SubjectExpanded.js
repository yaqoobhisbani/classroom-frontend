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

const SubjectExpanded = () => {
  const roomsContext = React.useContext(RoomsContext);
  const { changeSubject, current } = roomsContext;

  // Empty Error
  const emptyError = {
    isInvalid: false,
    msg: null
  };

  // State
  const [subject, setSubject] = React.useState("");
  const [error, setError] = React.useState(emptyError);

  const onChange = e => {
    setSubject(e.target.value);
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
    if (!error.isInvalid && subject.length > 2) {
      changeSubject(current.code, { subject: subject });
      setSubject("");
    }
  };

  return (
    <ExpansionPanelDetails>
      <Grid container spacing={2} alignItems="center">
        <Grid item sm={3} xs={12}>
          <Typography variant="subtitle2">Change Subject:</Typography>
        </Grid>

        <Grid item>
          <form id="change-subject" onSubmit={onSubmit}>
            <TextField
              error={error.isInvalid}
              type="text"
              variant="outlined"
              margin="dense"
              label={error.msg ? error.msg : "Subject"}
              onChange={onChange}
              value={subject}
              required
            />
          </form>
        </Grid>

        <Grid item>
          <Button
            type="submit"
            form="change-subject"
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

export default SubjectExpanded;
