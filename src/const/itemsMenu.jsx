import React from "react";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import HistoryIcon from "@material-ui/icons/History";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export const notAuthMenu = [
    {
      menuTitle: "Inicio",
      listIcon: <HomeIcon />,
      pageURL: "/",
    },
    {
      menuTitle: "Registro",
      listIcon: <AssignmentIcon />,
      pageURL: "/register",
    },
    {
      menuTitle: "Inicia sesión",
      listIcon: <AssignmentTurnedInIcon />,
      pageURL: "/login",
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
  ];