import React, { Fragment, useState, useContext, useEffect } from "react";
import { Snackbar } from "@material-ui/core";
import AlertWrapper from "./AlertWrapper";
import AlertContext from "../../context/alerts/alertContext";

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  const { alert, isAvailable } = alertContext;

  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (isAvailable) {
      handleClick();
    }
  }, [isAvailable]);

  return (
    <Fragment>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        autoHideDuration={2500}
        open={open}
        onClose={handleClose}
      >
        <AlertWrapper
          onClose={handleClose}
          variant={alert.variant}
          message={alert.msg}
        />
      </Snackbar>
    </Fragment>
  );
};

export default Alerts;
