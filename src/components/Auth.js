import React from "react";
import { Redirect } from "react-router-dom";

const Auth = (props) => {
  let display;
  if (props.isAuth) {
    display = <React.Fragment>{props.children}</React.Fragment>;
  } else {
    display = <Redirect to="/login" />;
  }
  return display;
};

export default Auth;
