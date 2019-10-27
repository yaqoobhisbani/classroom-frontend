import React from "react";
import {
  ExpansionPanelDetails,
  Grid,
  TextField,
  Button,
  Typography
} from "@material-ui/core";

import SendIcon from "@material-ui/icons/Send";

const PasswordExpanded = () => {
  return (
    <ExpansionPanelDetails>
      <Grid container spacing={2} alignItems="center">
        <Grid item sm={3} xs={12}>
          <Typography variant="subtitle2">Change Password:</Typography>
        </Grid>

        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <TextField
                type="password"
                variant="outlined"
                margin="dense"
                label="Old Password"
              />
            </Grid>

            <Grid item>
              <TextField
                type="password"
                variant="outlined"
                margin="dense"
                label="New Password"
              />
            </Grid>

            <Grid item>
              <TextField
                type="password"
                variant="outlined"
                margin="dense"
                label="Confirm Password"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Button variant="contained" color="primary" endIcon={<SendIcon />}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </ExpansionPanelDetails>
  );
};

export default PasswordExpanded;
