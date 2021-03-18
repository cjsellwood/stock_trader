import "./App.css";
import React, { useEffect } from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Protected from "./components/Protected";
import Auth from "./components/Auth";
import AuthShow from "./components/AuthShow";
import AuthHide from "./components/AuthHide";
import Home from "./components/Home";

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
      props.onAuthorize()
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("jwtExpires");
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
              <Link to="/protected">Protected</Link>
            </li>
          </AuthShow>
          <AuthShow>
            <li>
              <button onClick={logout}>Log out</button>
            </li>
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
        <Route path="/protected">
          <Auth>
            <Protected />
          </Auth>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthorize: () => {
      dispatch(actions.authorize());
    },
    onDeauthorize: () => {
      dispatch(actions.deauthorize());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
