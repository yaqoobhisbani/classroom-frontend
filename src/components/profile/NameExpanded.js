import React from "react";
import {
  ExpansionPanelDetails,
  Grid,
  TextField,
  Button,
  Typography
} from "@material-ui/core";

import AuthContext from "../../context/auth/authContext";
import SendIcon from "@material-ui/icons/Send";

const NameExpanded = () => {
  const authContext = React.useContext(AuthContext);
  const { changeName } = authContext;

  // Empty Error
  const emptyError = {
    isInvalid: false,
    msg: null
  };

  // State
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState(emptyError);

  const onChange = e => {
    setName(e.target.value);
    if (e.target.value.length < 4) {
      setError({
        isInvalid: true,
        msg: "Must have 4 characters"
      });
    } else {
      setError(emptyError);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!error.isInvalid && name.length > 3) {
      changeName({ name: name });
      setName("");
    }
  };

  return (
    <ExpansionPanelDetails>
      <Grid container spacing={2} alignItems="center">
        <Grid item sm={3} xs={12}>
          <Typography variant="subtitle2">Change Name:</Typography>
        </Grid>

        <Grid item>
          <form id="change-name" onSubmit={onSubmit}>
            <TextField
              error={error.isInvalid}
              type="text"
              variant="outlined"
              margin="dense"
              label={error.msg ? error.msg : "Full Name"}
              onChange={onChange}
              value={name}
            />
          </form>
        </Grid>

        <Grid item>
          <Button
            type="submit"
            form="change-name"
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

export default NameExpanded;
