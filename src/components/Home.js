import classes from "./Home.module.css";
import React from "react";

const Home = () => {
  return (
    <div className={classes.Home}>
      <h1>Stock Trader</h1>
      <p>A site to practice trading stocks</p>
      <p>With risk free simulated trades and portfolios</p>
      <p>Uses real data which is updated daily</p>
    </div>
  );
};

export default Home;
