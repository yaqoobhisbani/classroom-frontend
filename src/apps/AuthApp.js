import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Dashboard from "../components/pages/Dashboard";
import NotFound from "../components/pages/NotFound";
import Settings from "../components/pages/Settings";
import Alerts from "../components/layout/Alerts";

import Room from "../components/pages/Room";

const AuthApp = () => {
  return (
    <Router>
      <Switch>
        {/* Redirected Paths */}
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route exact path="/register">
          <Redirect to="/dashboard" />
        </Route>
        {/* Normal Auth App Pages */}
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/room/:code" component={Room} />
        <Route component={NotFound} />
      </Switch>
      <Alerts />
    </Router>
  );
};

export default AuthApp;
