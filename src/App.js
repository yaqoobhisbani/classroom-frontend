import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Dashboard from "./components/pages/Dashboard";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import { setAuthToken } from "./utils/axios";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => (
  <Router>
    <Header />
    <Switch>
      <ProtectedRoute exact path="/" component={Dashboard} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </Router>
);

export default App;
