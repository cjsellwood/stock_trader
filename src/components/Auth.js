import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Auth = (props) => {
  let display;
  if (props.isAuth) {
    display = <React.Fragment>{props.children}</React.Fragment>;
  } else {
    display = <Redirect to="/login" />;
  }
  return display;
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps)(Auth);
