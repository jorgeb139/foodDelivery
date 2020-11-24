import React from "react";
import AssignmentIcon from "@material-ui/icons/Assignment";
import HistoryIcon from "@material-ui/icons/History";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const notAuthMenu = [
    {
      menuTitle: "Inicio",
      listIcon: <HomeIcon />,
      pageURL: "/",
    },
    {
      menuTitle: "Mi sesión",
      listIcon: <AssignmentIcon />,
      pageURL: "/register",
    },
    {
      menuTitle: "Carrito",
      listIcon: <ShoppingCartIcon />,
      pageURL: "/",
    },
  ];
  
export const authMenu = [
    {
      menuTitle: "Inicio",
      listIcon: <HomeIcon />,
      pageURL: "/",
    },
    {
      menuTitle: "Mi perfil",
      listIcon: <AccountCircleIcon />,
      pageURL: "/",
    },
    {
      menuTitle: "Mis pedidos",
      listIcon: <HistoryIcon />,
      pageURL: "/",
    },
    {
      menuTitle: "Cerrar sesión",
      listIcon: <ExitToAppIcon />,
      pageURL: "/",
    },
    {
      menuTitle: "Carrito",
      listIcon: <ShoppingCartIcon />,
      pageURL: "/",
    },
  ];