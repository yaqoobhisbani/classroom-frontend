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
import MaterialContext from "../context/material/materialContext";
import AlertContext from "../context/alerts/alertContext";
import ChatContext from "../context/chat/chatContext";

const AuthApp = () => {
  const authContext = React.useContext(AuthContext);
  const roomsContext = React.useContext(RoomsContext);
  const materialContext = React.useContext(MaterialContext);
  const alertContext = React.useContext(AlertContext);
  const chatContext = React.useContext(ChatContext);

  // Loading Classrooms From Backend
  React.useEffect(() => {
    if (authContext.loading === false) {
      roomsContext.getRooms();
    }
    // eslint-disable-next-line
  }, [authContext.loading]);

  // Displaying Rooms Context Success Alerts!
  React.useEffect(() => {
    if (roomsContext.success) {
      alertContext.showAlert("success", roomsContext.success);
      roomsContext.clearSuccess();
    }
    // eslint-disable-next-line
  }, [roomsContext.success]);

  // Displaying Rooms Context Error Alerts!
  React.useEffect(() => {
    if (roomsContext.error) {
      alertContext.showAlert("error", roomsContext.error);
      roomsContext.clearError();
    }
    // eslint-disable-next-line
  }, [roomsContext.error]);

  // Displaying Auth Context Success Alerts
  React.useEffect(() => {
    if (authContext.success) {
      alertContext.showAlert("success", authContext.success);
      authContext.clearSuccess();
    }
    // eslint-disable-next-line
  }, [authContext.success]);

  // Displaying Auth Context Error Alerts
  React.useEffect(() => {
    if (authContext.error) {
      alertContext.showAlert("error", authContext.error);
      authContext.clearErrors();
    }
    // eslint-disable-next-line
  }, [authContext.error]);

  // Displaying Material Context Success Alerts
  React.useEffect(() => {
    if (materialContext.success) {
      alertContext.showAlert("success", materialContext.success);
      materialContext.clearSuccess();
    }
    // eslint-disable-next-line
  }, [materialContext.success]);

  // Displaying Material Context Error Alerts
  React.useEffect(() => {
    if (materialContext.error) {
      alertContext.showAlert("error", materialContext.error);
      materialContext.clearError();
    }
    // eslint-disable-next-line
  }, [materialContext.error]);

  React.useEffect(() => {
    // If There is Room Set
    if (roomsContext.current) {
      // Check & Set Admin
      if (authContext.user._id === roomsContext.current.createdBy) {
        authContext.setAdmin(true);
      }

      // const room = {
      //   roomid: roomsContext.current._id,
      //   code: roomsContext.current.code
      // };

      // // Set Room in Chat
      // chatContext.setRoom(room);
    }

    if (roomsContext.current === null) {
      authContext.setAdmin(false);
      // chatContext.setRoom(null);
    }
    // eslint-disable-next-line
  }, [roomsContext.current]);

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
