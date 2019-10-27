import React from "react";
import {
  ExpansionPanelDetails,
  Grid,
  TextField,
  Button,
  Typography
} from "@material-ui/core";

import SendIcon from "@material-ui/icons/Send";

const EmailExpanded = () => {
  return (
    <ExpansionPanelDetails>
      <Grid container spacing={2} alignItems="center">
        <Grid item sm={3} xs={12}>
          <Typography variant="subtitle2">Change Email:</Typography>
        </Grid>

        <Grid item>
          <TextField
            type="email"
            variant="outlined"
            margin="dense"
            label="Email"
          />
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

export default EmailExpanded;
