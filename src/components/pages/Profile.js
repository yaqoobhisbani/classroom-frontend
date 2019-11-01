import React, { Fragment } from "react";
import Header from "../layout/Header";
import { Container, makeStyles } from "@material-ui/core";
import Loader from "../layout/Loader";

const ProfilePicture = React.lazy(() => import("../profile/ProfilePicture"));
const AccountInfo = React.lazy(() => import("../profile/AccountInfo"));

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
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
        <React.Suspense fallback={<Loader />}>
          <ProfilePicture />
          <AccountInfo />
        </React.Suspense>
      </Container>
    </Fragment>
  );
};

export default Profile;
