import React from "react";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const DueDateChooser = ({ dueDate, onDueDate }) => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDatePicker
        required
        disableToolbar
        variant="dialog"
        inputVariant="outlined"
        margin="normal"
        id="date-picker-dialog"
        label="Due Date"
        format="DD/MM/YYYY"
        minDate={new Date()}
        value={dueDate}
        onChange={date => {
          onDueDate(moment(date).format());
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DueDateChooser;
