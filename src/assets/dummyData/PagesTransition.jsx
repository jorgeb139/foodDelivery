export const PagesTransition = {
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
      y: "-10vh",
      transition:{ ease: "easeInOut" },
    },
  };
