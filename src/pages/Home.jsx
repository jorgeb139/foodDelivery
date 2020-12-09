import React from "react";
import { motion } from "framer-motion";
import { 
  Typography, 
  makeStyles 
} from "@material-ui/core";

import Cards from "../components/dishesCards/Cards";
import HomeBanner from "../components/homeBanner/HomeBanner";
import backgroundTextImage from "../assets/images/backgrounds/home-text-background.jpg";

const useStyles = makeStyles (()=>({
  textBox:{
    paddingTop: "12vh",
    paddingBottom: "12vh",
    paddingLeft: "50px",
    paddingRight: "70px",
    backgroundColor: "#ffd54f",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  text:{
    paddingTop:"15px",
    paddingLeft: "60px",
    paddingRight: "60px",
  },
  tittle:{
    //fontStyle:"italic",
    fontFamily:"Lobster",
  }
}))

const Home = () => {
  const classes = useStyles();

  const homeContainerVariant = {
    hidden: {
      opacity: 0,
    },
    visible:{
      opacity: 1,
      transition:{ 
        delay: 0.5, 
        duration: 1, 
        type: "spring", 
        stiffness: 50 
      },
    },
    exit:{
      opacity:0,
      x: "10vw",
      transition:{ ease: "easeInOut" },
    },
  };


  return (
    <motion.div
      variants = {homeContainerVariant}
      initial= "hidden"
      animate= "visible"
      exit="exit"
    >
      <HomeBanner></HomeBanner>
      <div className={classes.textBox} align="center">
        <Typography variant="h2" paragraph className={classes.tittle}> ¡No te quedes sin tu almuerzo! </Typography>
        <Typography variant="body1" paragraph className={classes.text} >En <strong><i>La Cocina de Ismelda</i></strong> día a día tenemos para ti una variedad de platillos para que puedas disfrutar de comida fresca, caliente y con el gusto de la comida hecha en casa, no vas a tener excusa de estar en la oficina y que no te da tiempo de comer balanceado.</Typography>
      </div>
      <Cards></Cards>
    </motion.div>
  );
};

export default Home;
