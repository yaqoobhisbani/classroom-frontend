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

const EmailExpanded = () => {
  const authContext = React.useContext(AuthContext);
  const { changeEmail } = authContext;

  // Empty Error
  const emptyError = {
    isInvalid: false,
    msg: null
  };

  // State
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(emptyError);

  const onChange = e => {
    setEmail(e.target.value);
    if (e.target.value.includes("@") && e.target.value.includes(".")) {
      setError(emptyError);
    } else {
      setError({ isInvalid: true, msg: "Invalid Email Address!" });
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!error.isInvalid && email.length > 3) {
      changeEmail({ email: email });
      setEmail("");
    }
  };

  return (
    <ExpansionPanelDetails>
      <Grid container spacing={2} alignItems="center">
        <Grid item sm={3} xs={12}>
          <Typography variant="subtitle2">Change Email:</Typography>
        </Grid>

        <Grid item>
          <form id="change-email" onSubmit={onSubmit}>
            <TextField
              error={error.isInvalid}
              type="email"
              variant="outlined"
              margin="dense"
              label={error.msg ? error.msg : "Email Address"}
              onChange={onChange}
              value={email}
            />
          </form>
        </Grid>

        <Grid item>
          <Button
            type="submit"
            form="change-email"
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

export default EmailExpanded;
