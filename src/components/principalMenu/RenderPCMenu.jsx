import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import { notAuthMenu, authMenu } from "../../assets/dummyData/itemsMenu"

const useStyles = makeStyles((theme) => ({
  cartButton: {
    marginLeft: '0.7rem',
    margin: theme.spacing(1),
  },
}));

const RenderPCMenu = (props) => {
  const classes = useStyles();
  const { history } = props;
  var items = [];

  if (props.auth) {
    items = authMenu;
  } else {
    items = notAuthMenu;
  }

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
  };

  return (
    <div>
      {items.map((menuItem) => {
        const { menuTitle, listIcon, pageURL } = menuItem;
        if (menuTitle === "Carrito") {
          return (
            <Button
              color="secondary"
              className={classes.cartButton}
              variant="contained"
              key={`${menuTitle}-${listIcon}`}
              onClick={() => handleMenuClick(pageURL)}
            >
              {listIcon}
            </Button>
          );
        }
        else{
          return (
            <Button
              key={`${menuTitle}-${listIcon}`}
              onClick={() => handleMenuClick(pageURL)}
            >
              {menuTitle}
            </Button>
          );
        };
      })}
    </div>
  );
};

export default RenderPCMenu;

