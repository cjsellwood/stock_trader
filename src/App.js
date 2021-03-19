import "./App.css";
import React, { useEffect } from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import AuthRedirect from "./components/AuthRedirect";
import AuthShow from "./components/AuthShow";
import AuthHide from "./components/AuthHide";
import Home from "./components/Home";
import Search from "./components/Search";
import Stocks from "./components/Stocks";
import Symbol from "./components/Symbol";

import { connect } from "react-redux";
import * as actions from "./store/actions/index";

const App = (props) => {
  let history = useHistory();

  // Check if user has a valid token in local storage
  const isLoggedIn = () => {
    const expiration = localStorage.getItem("jwtExpires");
    return expiration && Number(expiration) > Date.now();
  };

  // Authorize user if they have a valid token
  useEffect(() => {
    if (isLoggedIn()) {
      props.onAuthorize();
      props.onSetCash(localStorage.getItem("cash"))
    } else {
      history.push("/login");
    }
    props.onLoadingFinish();
    // eslint-disable-next-line
  }, []);

  const logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("jwtExpires");
    localStorage.removeItem("cash");
    history.push("/");
    props.onDeauthorize();
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
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
              <Link to="/stocks">Stocks</Link>
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
          <AuthShow>
            <li>Cash: ${props.cash}</li>
          </AuthShow>
        </ul>
      </nav>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/search">
          <AuthRedirect>
            <Search />
          </AuthRedirect>
        </Route>
        <Route path="/stocks/:symbol">
          <AuthRedirect>
            <Symbol />
          </AuthRedirect>
        </Route>
        <Route path="/stocks">
          <AuthRedirect>
            <Stocks />
          </AuthRedirect>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    cash: state.auth.cash,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthorize: () => {
      dispatch(actions.authorize());
    },
    onDeauthorize: () => {
      dispatch(actions.deauthorize());
    },
    onLoadingFinish: () => {
      dispatch(actions.loadingFinish());
    },
    onSetCash: (cash) => {
      dispatch(actions.setCash(cash));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
