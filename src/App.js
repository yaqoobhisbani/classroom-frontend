import React from "react";
import Header from "./components/layout/Header";
import CSSBaseline from "@material-ui/core/CssBaseline";
import Login from "./components/pages/Login";
import "./App.css";

const App = () => (
  <div className="App">
    <CSSBaseline />
    <Header />
    <Login />
  </div>
);

export default App;
