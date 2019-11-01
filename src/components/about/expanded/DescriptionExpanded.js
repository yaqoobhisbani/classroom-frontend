import React from "react";
import {
  ExpansionPanelDetails,
  Grid,
  TextField,
  Typography,
  Button
} from "@material-ui/core";

import SendIcon from "@material-ui/icons/Send";

const DescriptionExpanded = () => {
  return (
    <ExpansionPanelDetails>
      <Grid container spacing={2} alignItems="center">
        <Grid item sm={3} xs={12}>
          <Typography variant="subtitle2">Change Description:</Typography>
        </Grid>

        <Grid item>
          <TextField
            type="text"
            variant="outlined"
            margin="dense"
            label="Description"
          ></TextField>
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

export default DescriptionExpanded;
