import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Dashboard from "../components/pages/Dashboard";
import NotFound from "../components/pages/NotFound";
import Alerts from "../components/layout/Alerts";

const AuthApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route exact path="/register">
          <Redirect to="/dashboard" />
        </Route>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
      <Alerts />
    </Router>
  );
};

export default AuthApp;
