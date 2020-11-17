/* Icons */
import hotIcon from "./assets/icons/hot.svg";
import likeHomeIcon from "./assets/icons/likeHome.svg";
import freshIngredientsIcon from "./assets/icons/freshIngredients.svg";

/* png images */
import hotFood1 from "./assets/images/hotFood/hotFood1.png";
import hotFood2 from "./assets/images/hotFood/hotFood3.png";
import likeHome1 from "./assets/images/likeHome/likeHome1.png";
import likeHome2 from "./assets/images/likeHome/likeHome3.png";
import freshIngredients1 from "./assets/images/freshIngredients/freshIngredients1.png";
import freshIngredients2 from "./assets/images/freshIngredients/freshIngredients3.png";

export const hotIconScene = {
  icon: { src: hotIcon, alt: "Hot food icon" },
  text: "Comida caliente",
  image1: { src: hotFood1, alt: "Picture of hotFood" },
  image2: { src: hotFood2, alt: "Picture of hotFood" },
};

export const likeHomeScene = {
  icon: { src: likeHomeIcon, alt: "likeHome icon" },
  text: "Comida casera",
  image1: { src: likeHome1, alt: "Picture of like home" },
  image2: { src: likeHome2, alt: "Picture of like home" },
};

export const freshIngredientsScene = {
  icon: { src: freshIngredientsIcon, alt: "fresh ingredients icon" },
  text: "Ingredientes frescos",
  image1: { src: freshIngredients1, alt: "Picture of fresh ingredients" },
  image2: { src: freshIngredients2, alt: "Picture of fresh ingredients" },
};