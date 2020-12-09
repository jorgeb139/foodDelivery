import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import {ThemeProvider} from '@material-ui/core/styles'

import theme from "./services/theme"

const rootElement = document.getElementById("root");
ReactDOM.render( 
  <React.StrictMode>
    <ThemeProvider theme ={theme}>
      <Provider store={store}>
        <Router>
          <CssBaseline/>
          <App />
        </Router>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
