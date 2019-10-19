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

import AuthContext from "../context/auth/authContext";
import RoomsContext from "../context/rooms/roomsContext";

const AuthApp = () => {
  const authContext = React.useContext(AuthContext);
  const roomsContext = React.useContext(RoomsContext);

  // Loading Classrooms From Backend
  React.useEffect(() => {
    if (authContext.loading === false) {
      roomsContext.getRooms();
    }
    // eslint-disable-next-line
  }, [authContext.loading]);

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
