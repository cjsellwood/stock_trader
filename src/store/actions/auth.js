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

export const setErrorMessage = (message, success) => {
  return {
    type: actionTypes.SET_ERROR_MESSAGE,
    message,
    success,
  };
};

// Handle login submission to backend
export const postLogin = (loginForm, history) => {
  return (dispatch) => {
    axios
      .post("https://stocks-308723.ts.r.appspot.com/login", {
        ...loginForm,
      })
      .then((response) => {
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

        dispatch(setErrorMessage("Logged In", "success"));
      })
      .catch((error) => {
        if (error.response) {
          dispatch(setErrorMessage(error.response.data.message));
        } else {
          dispatch(setErrorMessage("Something went wrong"));
        }
      });
  };
};

// Handle register user on the backend
export const postRegister = (registerForm, history) => {
  return (dispatch) => {
    axios
      .post("https://stocks-308723.ts.r.appspot.com/register", {
        ...registerForm,
      })
      .then((response) => {
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

        dispatch(setErrorMessage("Registered", "success"));
      })
      .catch((error) => {
        if (error.response) {
          dispatch(setErrorMessage(error.response.data.message));
        } else {
          dispatch(setErrorMessage("Something went wrong"));
        }
      });
  };
};
