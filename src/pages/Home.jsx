import React from "react";
import { motion } from "framer-motion";
import { 
  Typography, 
  makeStyles 
} from "@material-ui/core";

import Cards from "../components/dishesCards/Cards";
import HomeBanner from "../components/homeBanner/HomeBanner";
import { PagesTransition } from "../assets/dummyData/PagesTransition";

const useStyles = makeStyles ((theme)=>({
  textBox:{
    paddingTop: "12vh",
    paddingBottom: "12vh",
    paddingLeft: "6vw",
    paddingRight: "7  vw",
    [theme.breakpoints.down("xs")]: {
      paddingTop:"6vh",
      paddingBottom:"6vh",
      paddingLeft: "3vw",
      paddingRight: "8vw",
    },
    backgroundColor: "#ffd54f",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  tittle:{
    fontFamily:"Lobster",
    [theme.breakpoints.down("xs")]: {
      fontSize:"2rem",
    },
  },
  text:{
    paddingTop:"1vh",
    paddingLeft: "2vw",
    paddingRight: "2vw",
    [theme.breakpoints.down("xs")]: {
      fontSize:"0.9rem",
    },
  },
}))

const Home = () => {
  const classes = useStyles();

  return (
    <motion.div
      variants = {PagesTransition}
      initial= "hidden"
      animate= "visible"
      exit="exit"
    >
      <HomeBanner></HomeBanner>
      <div className={classes.textBox} align="center">
        <Typography variant="h2" paragraph className={classes.tittle}> ¡No te quedes sin tu almuerzo! </Typography>
        <Typography variant="body1" paragraph className={classes.text}>En <strong><i>La Cocina de Ismelda</i></strong> día a día tenemos para ti una variedad de platillos para que puedas disfrutar de comida fresca, caliente y con el gusto de la comida hecha en casa, no vas a tener excusa de estar en la oficina y que no te da tiempo de comer balanceado.</Typography>
      </div>
      <Cards></Cards>
    </motion.div>
  );
};

export default Home;
