import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Dashboard from "../components/pages/Dashboard";
import Room from "../components/pages/Room";
import NotFound from "../components/pages/NotFound";
import Settings from "../components/pages/Settings";
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
        <Route exact path="/room/:code" component={Room} />
        <Route exact path="/settings" component={Settings} />
        <Route component={NotFound} />
      </Switch>
      <Alerts />
    </Router>
  );
};

export default AuthApp;
