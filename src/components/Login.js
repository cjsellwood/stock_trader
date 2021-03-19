import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index"
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  // const [errorMessage, setErrorMessage] = useState("");

  // Change register details when inputs change
  const handleInput = (e) => {
    const loginFormCopy = {
      ...loginForm,
      [e.target.name]: e.target.value,
    };
    setLoginForm(loginFormCopy);
  };

  let history = useHistory();

  // Submit register form handler
  const handleSubmission = (e) => {
    e.preventDefault();
    // setErrorMessage("");

    // Submit to backend
    props.onPostLogin(loginForm, history)
    
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmission}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={loginForm.username}
            onChange={handleInput}
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
          />
        </div>
        <button type="submit" aria-label="submit">
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
    }
  }
}

export default connect(null, mapDispatchToProps)(Login);
