import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { Link, withRouter } from "react-router-dom";
import "./Menu.css";

import basics from "../../assets/dummyData/basics.json";
import RenderPCMenu from "./RenderPCMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  offset: theme.mixins.toolbar,
}));

const PCMenu = props => {
  const { history } = props;
  const classes = useStyles();
  const auth = false;

    return (
    <div className={classes.root}>
      <div className={classes.offset}></div>
      <AppBar position="fixed" style={{ background: 'white' }}>
        <Toolbar>
          <Typography variant="h4" className="title">
            <Link to="/" style={{ textDecoration: 'none', color: 'unset' }}>
              {basics.title}
            </Link>
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