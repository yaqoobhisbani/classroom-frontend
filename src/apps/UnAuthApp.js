import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import NotFound from "../components/pages/NotFound";
import Alerts from "../components/layout/Alerts";

const AuthApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard">
          <Redirect to="/" />
        </Route>
        <Route exact path="/profile">
          <Redirect to="/" />
        </Route>
        <Route exact path="/room/:code">
          <Redirect to="/" />
        </Route>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
      <Alerts />
    </Router>
  );
};

export default AuthApp;
