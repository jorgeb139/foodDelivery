import React, { useEffect } from "react";
import { useCycle } from "framer-motion";

import ImageHolder from "./ImageHolder";
import IconHolder from "./IconHolder";

import { hotIconScene, likeHomeScene, freshIngredientsScene } from "./scenes";

import "./Styles.css";
const SLIDE_CHANGE_TIME_MS = 5000;

function HomeBanner() {
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
    <div className="hero">
      <IconHolder icon={currentScene.icon} text={currentScene.text} />
      <ImageHolder
        img={currentScene.image1}
        className="food-image food-image_one"
      />
      <ImageHolder
        img={currentScene.image2}
        className="food-image food-image_two"
      />
    </div>
  );
}

export default HomeBanner;
