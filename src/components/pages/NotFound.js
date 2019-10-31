import React, { Fragment } from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";
import Header from "../layout/Header";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(4)
  }
}));

const NotFound = () => {
  const classes = useStyles();

  React.useEffect(() => {
    document.title = "404 Not Found | Classroom";
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Header />
      <Container component="main" className={classes.container}>
        <Typography variant="h3" gutterBottom>
          404 Not Found
        </Typography>
        <Typography variant="body1">
          The page you were looking for does not exist!
        </Typography>
      </Container>
    </Fragment>
  );
};

export default NotFound;
