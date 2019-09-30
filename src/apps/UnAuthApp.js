import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";

const AuthApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default AuthApp;
