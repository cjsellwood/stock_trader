import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AuthRedirect = (props) => {
  let display;
  if (props.isAuth) {
    display = <React.Fragment>{props.children}</React.Fragment>;
  } else if (props.isLoading) {
    display = <h1>Loading...</h1>;
  } else {
    display = <Redirect to="/login" />;
  }
  return display;
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    isLoading: state.auth.isLoading,
  };
};

export default connect(mapStateToProps)(AuthRedirect);
