import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import {AnimatePresence} from "framer-motion";

import "./App.css";
import Home from "./pages/Home";
import Session from "./pages/Session";
import Snackbar from "./components/Snackbar";
import Menu from "./components/principalMenu/Menu"
import { makeStyles } from '@material-ui/core/styles';
import { mobileMenuMargin } from "./components/principalMenu/MobileMenu"

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      marginRight: mobileMenuMargin,
    },
  },
}));

export default function App() {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <Menu/>
      <Snackbar />
      <div className={classes.content}>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route exact from="/" render={props => <Home {...props} />} />
            <Route exact path="/session" render={props => <Session {...props} />} />
          </Switch>
        </AnimatePresence>
      </div>
    </>
  );
}

