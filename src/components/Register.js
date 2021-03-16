import React from "react";

const Register = (props) => {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <div>
          <label for="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />
        </div>
        <button type="submit" aria-label="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
