import React, { Fragment } from "react";
import { Container, Typography, Divider, makeStyles } from "@material-ui/core";
import FabButton from "./tasks/FabButton";
import AuthContext from "../../context/auth/authContext";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2)
  }
}));

const Tasks = () => {
  // Context
  const authContext = React.useContext(AuthContext);
  const { isAdmin } = authContext;

  // Styles
  const classes = useStyles();

  return (
    <Fragment>
      <Container component="main" className={classes.container}>
        <Typography variant="h5" gutterBottom>
          Tasks
        </Typography>
        <Divider />
      </Container>
      {isAdmin ? <FabButton /> : null}
    </Fragment>
  );
};

export default Tasks;
