import React, { Fragment } from "react";
import Header from "../layout/Header";
import { Container, makeStyles } from "@material-ui/core";

import ProfilePicture from "../profile/ProfilePicture";
import AccountInfo from "../profile/AccountInfo";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(4)
  }
}));

const Profile = () => {
  React.useEffect(() => {
    document.title = "Profile | Classroom";
    // eslint-disable-next-line
  }, []);

  // Styles
  const classes = useStyles();

  return (
    <Fragment>
      <Header />
      <Container component="main" className={classes.container}>
        <ProfilePicture />
        <AccountInfo />
      </Container>
    </Fragment>
  );
};

export default Profile;
