import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/index"

const Register = (props) => {
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  // const [errorMessage, setErrorMessage] = useState("");

  let history = useHistory();

  // Change register details when inputs change
  const handleInput = (e) => {
    const registerFormCopy = {
      ...registerForm,
      [e.target.name]: e.target.value,
    };
    setRegisterForm(registerFormCopy);
  };

  // Submit register form handler
  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(registerForm);
    // setErrorMessage("");

    // Submit to backend
    props.onPostRegister(registerForm, history)
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmission}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={registerForm.username}
            onChange={handleInput}
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
    onPostRegister: (registerForm, history) => {
      dispatch(actions.postRegister(registerForm, history));
    }
  }
}

export default connect(null, mapDispatchToProps)(Register);

