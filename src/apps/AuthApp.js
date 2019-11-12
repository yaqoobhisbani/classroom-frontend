import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Dashboard from "../components/pages/Dashboard";
import NotFound from "../components/pages/NotFound";
import Profile from "../components/pages/Profile";
import Alerts from "../components/layout/Alerts";

import Room from "../components/pages/Room";

import AuthContext from "../context/auth/authContext";
import RoomsContext from "../context/rooms/roomsContext";
import ChatContext from "../context/chat/chatContext";

const AuthApp = () => {
  const authContext = React.useContext(AuthContext);
  const roomsContext = React.useContext(RoomsContext);
  const chatContext = React.useContext(ChatContext);

  // Loading Classrooms From Backend
  React.useEffect(() => {
    if (authContext.loading === false) {
      roomsContext.getRooms();
    }
    // eslint-disable-next-line
  }, [authContext.loading]);

  // Setting Admin Property in Auth State
  React.useEffect(() => {
    if (roomsContext.current) {
      if (authContext.user._id === roomsContext.current.createdBy) {
        authContext.setAdmin(true);
      }
    }

    if (roomsContext.current === null) {
      authContext.setAdmin(false);
    }
    // eslint-disable-next-line
  }, [roomsContext.current]);

  // Setting Logged in User in Chat State
  React.useEffect(() => {
    if (authContext.user) {
      const user = {
        name: authContext.user.name,
        id: authContext.user._id
      };

      chatContext.setUser(user);
    }
    // eslint-disable-next-line
  }, [authContext.user]);

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
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/room/:code" component={Room} />
        <Route component={NotFound} />
      </Switch>
      <Alerts />
    </Router>
  );
};

export default AuthApp;
