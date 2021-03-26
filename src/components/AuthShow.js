import React from "react";
import { connect } from "react-redux";

const AuthShow = (props) => {
  let display;
  if (props.isAuth) {
    display = <React.Fragment>{props.children}</React.Fragment>;
  } else {
    display = null;
  }
  return display;
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps)(AuthShow);
