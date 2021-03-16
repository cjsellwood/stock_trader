import React, { useState } from "react";
import axios from "axios";

const Register = (props) => {
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("")

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
    setErrorMessage("");

    // Submit to backend
    axios
      .post("http://localhost:3000/register", {
        ...registerForm,
      })
      .then((response) => {
        console.log(response);
        // --------- Do after successfully registering
      })
      .catch((error) => {
        console.log("ERROR", error.response.data.message);
        setErrorMessage(error.response.data.message);
      });
  };

  return (
    <div>
      <h1>Register</h1>
      <h2>{errorMessage}</h2>
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

export default Register;
