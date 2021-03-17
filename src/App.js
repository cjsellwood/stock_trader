import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Protected from "./components/Protected";
import Auth from "./components/Auth";
import AuthShow from "./components/AuthShow";
import AuthHide from "./components/AuthHide";
import Home from "./components/Home";

function App() {
  let history = useHistory();

  // Check if user has a valid token in local storage
  const isLoggedIn = () => {
    const expiration = localStorage.getItem("jwtExpires");
    console.log(expiration)
    return expiration && Number(expiration) > Date.now();
  };

  
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    setIsAuth(isLoggedIn());
  }, []);
  
  console.log(isAuth)

  const logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("jwtExpires");
    history.push("/");
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
          <AuthShow isAuth={isAuth}>
            <li>
              <Link to="/protected">Protected</Link>
            </li>
          </AuthShow>
          <AuthShow isAuth={isAuth}>
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
          <Auth isAuth={isAuth}>
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

export default App;
