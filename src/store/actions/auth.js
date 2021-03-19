import * as actionTypes from "../actions/actionTypes";
import axios from "axios";

// Authorize user
export const authorize = () => {
  return {
    type: actionTypes.AUTHORIZE,
  };
};

// Deauthorize user
export const deauthorize = () => {
  return {
    type: actionTypes.DEAUTHORIZE,
  };
};

// Stop loading
export const loadingFinish = () => {
  return {
    type: actionTypes.LOADING_FINISH,
  };
};

export const setCash = (cash) => {
  return {
    type: actionTypes.SET_CASH,
    cash,
  };
};

// Handle login submission to backend
export const postLogin = (loginForm, history) => {
  return (dispatch) => {
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
        dispatch(authorize());

        // Save users cash
        localStorage.setItem("cash", response.data.cash);
        dispatch(setCash(response.data.cash));
      })
      .catch((error) => {
        console.log("ERROR", error.response.data.message);
        // setErrorMessage(error.response.data.message);
      });
  };
};

// Handle register user on the backend
export const postRegister = (registerForm, history) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3000/register", {
        ...registerForm,
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
        dispatch(authorize());

        // Save users cash
        localStorage.setItem("cash", response.data.cash);
        dispatch(setCash(response.data.cash));
      })
      .catch((error) => {
        console.log("ERROR", error.response.data.message);
        // setErrorMessage(error.response.data.message);
      });
  };
};
