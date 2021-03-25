import "./App.css";
import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import AuthRedirect from "./components/AuthRedirect";
import Home from "./components/Home";
import Search from "./components/Search";
import Stocks from "./components/Stocks";
import Symbol from "./components/Symbol";
import Transactions from "./components/Transactions";
import Portfolio from "./components/Portfolio";
import Nav from "./components/Nav"

import { connect } from "react-redux";
import * as actions from "./store/actions/index";
import ScrollToTop from "./components/ScrollToTop";

const App = (props) => {
  // Check if user has a valid token in local storage
  const isLoggedIn = () => {
    const expiration = localStorage.getItem("jwtExpires");
    return expiration && Number(expiration) > Date.now();
  };

  // Authorize user if they have a valid token
  useEffect(() => {
    if (isLoggedIn()) {
      props.onAuthorize();
      props.onSetCash(localStorage.getItem("cash"));
    }
    props.onLoadingFinish();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <ScrollToTop/>
      <Nav/>
      <main className={"main"}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
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
          <Route path="/transactions">
            <AuthRedirect>
              <Transactions />
            </AuthRedirect>
          </Route>
          <Route path="/stocks/:symbol">
            <AuthRedirect>
              <Symbol />
            </AuthRedirect>
          </Route>
          <Route path="/portfolio">
            <AuthRedirect>
              <Portfolio />
            </AuthRedirect>
          </Route>
          <Route path="/stocks">
            <AuthRedirect>
              <Stocks />
            </AuthRedirect>
          </Route>
        </Switch>
      </main>
      <footer className={"footer"}>
        <a href="https://iexcloud.io">Data provided by IEX Cloud</a>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    cash: state.auth.cash,
    errorMessage: state.auth.errorMessage,
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
    },
    onSetErrorMessage: (message) => {
      dispatch(actions.setErrorMessage(message))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
