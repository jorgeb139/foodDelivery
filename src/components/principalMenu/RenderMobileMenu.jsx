import React from "react";
import { List, MenuItem, ListItemIcon } from "@material-ui/core";

import { notAuthMenu, authMenu } from "../../assets/dummyData/itemsMenu"

const RenderMobileMenu = (props) => {
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
    <List>
      {items.map((menuItem) => {
        const { menuTitle, listIcon, pageURL } = menuItem;
        return (
          <MenuItem
            key={`${menuTitle}-${listIcon}`}
            onClick={() => handleMenuClick(pageURL)}
          >
            <ListItemIcon>{listIcon}</ListItemIcon>
            {menuTitle}
          </MenuItem>
        );
      })}
    </List>
  );
};

export default RenderMobileMenu;