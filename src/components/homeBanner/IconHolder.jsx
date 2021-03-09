import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { makeStyles } from '@material-ui/core/styles';

const ANIMATION_DURATION_S = 0.8;

const useStyles = makeStyles((theme) => ({
  iconHolder: {
    position: "relative",
    zIndex: "1",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 0 10px 10px rgba(255, 253, 247, 0.5)",
    backgroundColor: "rgba(255, 253, 247, 0.5)",
  },
}));

const getVariants = (direction) => ({
  initial: {
    y: direction === "top" ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: ANIMATION_DURATION_S, ease: "easeInOut" },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: ANIMATION_DURATION_S, ease: "easeInOut" },
  },
});

function IconHolder({ icon, text }) {
  const classes = useStyles();

  return (
    <div className="icon-holder">
      <AnimatePresence>
        <motion.div
          className="icon-holder__icon"
          key={text + "icon"}
          variants={getVariants("top")}
          initial={"initial"}
          exit={"initial"}
          animate={"animate"}
        >
          <img src={icon.src} alt={icon.alt} />
        </motion.div>
        <motion.h1
          className="icon-holder__text"
          key={text}
          variants={getVariants("bottom")}
          initial={"initial"}
          exit={"initial"}
          animate={"animate"}
        >
          {text}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}

export default IconHolder;