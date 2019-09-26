import React, { Fragment, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import FabMenu from "../dashboard/FabMenu";
import { Typography, Grid } from "@material-ui/core";

const Dashboard = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Grid container component="main">
        <Grid item xs={12}>
          <Typography variant="h5">Your Classrooms</Typography>
        </Grid>
      </Grid>

      <FabMenu />
    </Fragment>
  );
};

export default Dashboard;
