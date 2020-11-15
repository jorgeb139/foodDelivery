import React from "react";
import { Button, ListItemIcon } from "@material-ui/core";

import { notAuthMenu, authMenu } from "../../const/itemsMenu"

const RenderPCMenu = (props) => {
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
        return (
          <Button
            key={`${menuTitle}-${listIcon}`}
            onClick={() => handleMenuClick(pageURL)}
          >
            <ListItemIcon>{listIcon}</ListItemIcon> 
            {menuTitle}
          </Button>
        );
      })}
    </div>
  );
};

export default RenderPCMenu;