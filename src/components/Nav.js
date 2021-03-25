import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import AuthShow from "./AuthShow";
import AuthHide from "./AuthHide";
import * as actions from "../store/actions/index";
import classes from "./Nav.module.css";

const Nav = (props) => {
  // Logout user by removing credentials local storage
  let history = useHistory();
  const logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("jwtExpires");
    localStorage.removeItem("cash");
    history.push("/");
    props.onDeauthorize();
    props.onSetErrorMessage("Logged Out", "success");
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
            <Link to="/portfolio">Portfolio</Link>
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
        <li>
          <AuthShow>
            <span>Cash: ${props.cash}</span>
          </AuthShow>
        </li>
        <li>
          <h2 className={props.errorMessage.success ? "success" : ""}>
            {props.errorMessage.message}
          </h2>
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
    onSetErrorMessage: (message, success) => {
      dispatch(actions.setErrorMessage(message, success));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
