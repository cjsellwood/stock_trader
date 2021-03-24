import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import AuthShow from "./AuthShow";
import AuthHide from "./AuthHide";
import * as actions from "../store/actions/index";
import classes from "./Nav.module.css";

const Nav = (props) => {
  let history = useHistory();
  const logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("jwtExpires");
    localStorage.removeItem("cash");
    history.push("/");
    props.onDeauthorize();
  };

  return (
    <nav className={classes.Nav}>
      <ul className={classes.top}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <AuthHide>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </AuthHide>
        <AuthHide>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </AuthHide>
        <AuthShow>
          <li>
            <Link to="/transactions">Transactions</Link>
          </li>
        </AuthShow>
        <AuthShow>
          <li>
            <Link to="/stocks">Stocks</Link>
          </li>
        </AuthShow>
        <AuthShow>
          <li>
            <Link to="/owned">Owned</Link>
          </li>
        </AuthShow>
        <AuthShow>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </AuthShow>
        <AuthShow>
          <li>
            <button onClick={logout}>Log out</button>
          </li>
        </AuthShow>
      </ul>
        <ul className={classes.bottom}>
          <AuthShow>
            <li>Cash: ${props.cash}</li>
          </AuthShow>
          <li>
            <h2>{props.errorMessage}</h2>
          </li>
          <li></li>
        </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cash: state.auth.cash,
    errorMessage: state.auth.errorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeauthorize: () => {
      dispatch(actions.deauthorize());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
