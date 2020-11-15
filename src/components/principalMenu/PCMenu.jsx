import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { withRouter } from "react-router-dom";


import RenderPCMenu from "./RenderPCMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#000"
  },
}));

const PCMenu = props => {
  const { history } = props;
  const classes = useStyles();
  const [auth, setAuth] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: 'transparent' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Pide tu comida
          </Typography>
            <div>
              <RenderPCMenu auth = {auth} history = {history} ></RenderPCMenu>             
            </div>          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter (PCMenu);