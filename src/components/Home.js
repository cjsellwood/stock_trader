import classes from "./Home.module.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

const Home = (props) => {
  useEffect(() => {
    // Reset error message on page load
    props.onSetErrorMessage("");

    // eslint-disable-next-line
  }, []);
  return (
    <div className={classes.Home}>
      <h1>Stock Trader</h1>
      <p>A site to practice trading stocks</p>
      <p>With risk free simulated trades and portfolios</p>
      <p>Uses real data which is updated daily</p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetErrorMessage: (message) => {
      dispatch(actions.setErrorMessage(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Home);
