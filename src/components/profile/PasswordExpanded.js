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

const PasswordExpanded = () => {
  // Context
  const authContext = React.useContext(AuthContext);
  const { changePassword } = authContext;

  // Empty Error
  const emptyError = {
    isInvalid: false,
    msg: null
  };

  // Initial Errors
  const initialErrors = {
    passError: emptyError,
    pass2Error: emptyError
  };

  // State
  const [oldPass, setOldPass] = React.useState("");
  const [newPass, setNewPass] = React.useState("");
  const [confirmPass, setConfirmPass] = React.useState("");
  const [errors, setErrors] = React.useState(initialErrors);
  const { passError, pass2Error } = errors;

  // Set New Password Error
  const setNewPassError = (isInvalid, msg) => {
    setErrors({ ...errors, passError: { isInvalid: isInvalid, msg: msg } });
  };

  // Set Confirm Password Error
  const setConfirmPassError = (isInvalid, msg) => {
    setErrors({ ...errors, pass2Error: { isInvalid: isInvalid, msg: msg } });
  };

  // Old Password OnChange
  const onOldPassChange = e => setOldPass(e.target.value);

  // New Password OnChange
  const onNewPassChange = e => {
    setNewPass(e.target.value);
    if (e.target.value.length < 6) {
      setNewPassError(true, "Must have 6 characters!");
    } else {
      setNewPassError(false, null);
    }
  };

  // Confirm Password OnChange
  const onConfirmPassChange = e => {
    setConfirmPass(e.target.value);
    if (e.target.value === newPass) {
      setConfirmPassError(false, null);
    } else {
      setConfirmPassError(true, "Password doesn't match!");
    }
  };

  // On Submit
  const onSubmit = e => {
    e.preventDefault();
    if (
      !passError.isInvalid &&
      !pass2Error.isInvalid &&
      newPass.length > 5 &&
      confirmPass.length > 5
    ) {
      changePassword({
        oldpass: oldPass,
        newpass: newPass,
        confirmpass: confirmPass
      });

      setOldPass("");
      setNewPass("");
      setConfirmPass("");
    }
  };

  return (
    <ExpansionPanelDetails>
      <Grid container spacing={2} alignItems="center">
        <Grid item sm={3} xs={12}>
          <Typography variant="subtitle2">Change Password:</Typography>
        </Grid>

        <Grid item>
          <Grid container direction="column">
            <form id="change-password" onSubmit={onSubmit}>
              <Grid item>
                <TextField
                  type="password"
                  variant="outlined"
                  margin="dense"
                  label="Old Password"
                  onChange={onOldPassChange}
                  value={oldPass}
                />
              </Grid>

              <Grid item>
                <TextField
                  error={passError.isInvalid}
                  type="password"
                  variant="outlined"
                  margin="dense"
                  label={passError.msg ? passError.msg : "New Password"}
                  onChange={onNewPassChange}
                  value={newPass}
                />
              </Grid>

              <Grid item>
                <TextField
                  error={pass2Error.isInvalid}
                  type="password"
                  variant="outlined"
                  margin="dense"
                  label={pass2Error.msg ? pass2Error.msg : "Confirm Password"}
                  onChange={onConfirmPassChange}
                  value={confirmPass}
                />
              </Grid>
            </form>
          </Grid>
        </Grid>

        <Grid item>
          <Button
            type="Submit"
            form="change-password"
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

export default PasswordExpanded;
