import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CSSBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/layout/Header";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import "./App.css";

const App = () => (
  <Fragment>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
    <CSSBaseline />
  </Fragment>
);

export default App;
