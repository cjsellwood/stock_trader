import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../store/actions/index"

const Login = (props) => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  let history = useHistory();

  // Change register details when inputs change
  const handleInput = (e) => {
    const loginFormCopy = {
      ...loginForm,
      [e.target.name]: e.target.value,
    };
    setLoginForm(loginFormCopy);
  };

  // Submit register form handler
  const handleSubmission = (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Submit to backend
    axios
      .post("http://localhost:3000/login", {
        ...loginForm,
      })
      .then((response) => {
        console.dir(response);
        // Store jwt token and when it expires in local storage
        localStorage.setItem("jwtToken", response.data.token);
        const expires = Date.now() + Number(response.data.expiresIn);
        localStorage.setItem("jwtExpires", expires);

        // Redirect to home page
        history.push("/");
        
        // Login user with redux state auth
        props.onAuthorize();
      })
      .catch((error) => {
        console.log("ERROR", error.response.data.message);
        setErrorMessage(error.response.data.message);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <h2>{errorMessage}</h2>
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
    onAuthorize: () => {
      dispatch(actions.authorize());
    },
  }
}

export default connect(null, mapDispatchToProps)(Login);
