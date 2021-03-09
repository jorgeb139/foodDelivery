import React, { useEffect } from "react";
import { useCycle } from "framer-motion";
import { makeStyles } from '@material-ui/core/styles';

import ImageHolder from "./ImageHolder";
import IconHolder from "./IconHolder";
import { hotIconScene, likeHomeScene, freshIngredientsScene } from "./scenes";
import "./Styles.css";

const SLIDE_CHANGE_TIME_MS = 5000;

const useStyles = makeStyles((theme) => ({
  hero: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
    minHeight: "35rem",
    backgroundColor:"#fafafa",
    overflow: "hidden",
    '@media (max-height: 750px)': {
      height: "70vh",
  },
  },
  foodImageContainer: {
    position: "absolute",
    maxWidth: "100%",
  }, 
  foodImageOne: {
    left: "-25rem",
    top: "-28rem",
    width: "80vw",
    maxWidth: "900px",
  },
  foodImageTwo: {
    bottom: "-11rem",
    right: "-11rem",
    width: "80vw",
    maxWidth: "650px",
  },
}));

function HomeBanner() {
  const classes = useStyles();

  const [currentScene, setCurrentScene] = useCycle(
    hotIconScene,
    likeHomeScene,
    freshIngredientsScene
  );

  useEffect(() => {
    const timeOut = setTimeout(setCurrentScene, SLIDE_CHANGE_TIME_MS);
    return () => clearTimeout(timeOut);
  }, [currentScene, setCurrentScene]);

  return (
    <div className={classes.hero}>
      <IconHolder icon={currentScene.icon} text={currentScene.text} />
      <ImageHolder
        img={currentScene.image1}
        className={`${classes.foodImageContainer} ${classes.foodImageOne}`}
        //className="food-image food-image_one"
      />
      <ImageHolder
        img={currentScene.image2}
        className={`${classes.foodImageContainer} ${classes.foodImageTwo}`}
        // className="food-image food-image_two"
      />
    </div>
  );
}

export default HomeBanner;