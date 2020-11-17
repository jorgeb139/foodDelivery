import React from "react";
import { Route, Switch } from "react-router-dom";

import Register from "./pages/Register";
import PCMenu from "./components/principalMenu/PCMenu"
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Snackbar from "./components/Snackbar";
import MobileMenu from "./components/principalMenu/MobileMenu";
import Menu from "./components/principalMenu/Menu"

export default function App() {
  return (
    <>
      {/* <PCMenu/> */}
      {/* <MobileMenu/> */}
      <Menu/>
      <Snackbar />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/login" render={props => <Login {...props} />} />
        <Route exact path="/register" render={props => <Register {...props} />} />
      </Switch>
    </>
  );
}

