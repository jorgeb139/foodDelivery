import React from "react";
import Cards from "../components/dishesCards/Cards";
import HomeBanner from "../components/homeBanner/HomeBanner";

const Home = () => {
  //const { history } = props;

  return (
    <div>
      <HomeBanner></HomeBanner>
      <Cards></Cards>
    </div>
  );
};

export default Home;
