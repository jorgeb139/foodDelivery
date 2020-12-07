import React from "react";
import { motion } from "framer-motion";

import Cards from "../components/dishesCards/Cards";
import HomeBanner from "../components/homeBanner/HomeBanner";

const Home = () => {
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
      <Cards></Cards>
    </motion.div>
  );
};

export default Home;
