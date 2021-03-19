import * as actionTypes from "../actions/actionTypes";

const initialState = {
  stocks: [],
}

const loadStocks =  (state, action) => {
  return {
    ...state,
    stocks: action.stocks,
  }
}

const stocksReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.LOAD_STOCKS:
      return loadStocks(state, action);
    default:
      return state;
  }
}

export default stocksReducer;