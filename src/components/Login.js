import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  useEffect(() => {
    // Reset error message on page load
    props.onSetErrorMessage("");

    // eslint-disable-next-line
  }, []);

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  // Change register details when inputs change
  const handleInput = (e) => {
    const loginFormCopy = {
      ...loginForm,
      [e.target.name]: e.target.value,
    };
    setLoginForm(loginFormCopy);
    props.onSetErrorMessage("");
  };

  let history = useHistory();

  // Submit register form handler
  const handleSubmission = (e) => {
    e.preventDefault();

    // Submit to backend
    props.onPostLogin(loginForm, history);
  };

  return (
    <div className="w-600 h-center">
      <h1 className="page-title">Login</h1>
      <form className="form" onSubmit={handleSubmission}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={loginForm.username}
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginForm.password}
            onChange={handleInput}
            required
            minLength="8"
          />
        </div>
        <button className="h-center" type="submit" aria-label="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPostLogin: (loginForm, history) => {
      dispatch(actions.postLogin(loginForm, history));
    },
    onSetErrorMessage: (message) => {
      dispatch(actions.setErrorMessage(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);
