import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isAuth: false,
  isLoading: true,
};

const authorize = (state, action) => {
  return {
    ...state,
    isAuth: true,
  };
};

const deauthorize = (state, action) => {
  return {
    ...state,
    isAuth: false,
  };
};

const loadingFinish = (state, action) => {
  return {
    ...state,
    isLoading: false,
  }
}

const setCash = (state, action) => {
  return {
    ...state,
    cash: Number(action.cash)
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTHORIZE:
      return authorize(state, action);
    case actionTypes.DEAUTHORIZE:
      return deauthorize(state, action);
    case actionTypes.LOADING_FINISH:
      return loadingFinish(state,action);
    case actionTypes.SET_CASH:
      return setCash(state, action)
    default:
      return state;
  }
};

export default reducer;
