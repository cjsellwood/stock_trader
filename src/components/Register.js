import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

const Register = (props) => {
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  let history = useHistory();

  // Change register details when inputs change
  const handleInput = (e) => {
    const registerFormCopy = {
      ...registerForm,
      [e.target.name]: e.target.value,
    };
    setRegisterForm(registerFormCopy);
    props.onSetErrorMessage("");
  };

  // Submit register form handler
  const handleSubmission = (e) => {
    e.preventDefault();

    // Submit to backend
    props.onPostRegister(registerForm, history);
  };

  return (
    <div className="w-600 h-center">
      <h1 className="page-title">Register</h1>
      <form className="form" onSubmit={handleSubmission}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={registerForm.username}
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
            value={registerForm.password}
            onChange={handleInput}
            required
            minLength="8"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={registerForm.confirmPassword}
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
    onPostRegister: (registerForm, history) => {
      dispatch(actions.postRegister(registerForm, history));
    },
    onSetErrorMessage: (message) => {
      dispatch(actions.setErrorMessage(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Register);
