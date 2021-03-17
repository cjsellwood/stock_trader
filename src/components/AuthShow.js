import React from 'react'

const AuthShow = props => {
  let display;
  if (props.isAuth) {
    display = <React.Fragment>{props.children}</React.Fragment>;
  } else {
    display = null;
  }
  return (
    display
  )
}

export default AuthShow
