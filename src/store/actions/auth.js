import * as actionTypes from "../actions/actionTypes";

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
  }
}