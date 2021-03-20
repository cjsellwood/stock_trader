import * as actionTypes from "../actions/actionTypes";

const initialState = {
  stocks: [],
}

const loadStocks =  (state, action) => {
  const stocks = action.stocks;
  for (let stock of stocks) {
    stock.buyQuantity = 0;
    stock.sellQuantity = 0;
  }
  return {
    ...state,
    stocks: stocks,
  }
}

// Add to quantity to buy from user input
const updateQuantity = (state, action) => {
  const stocksCopy = []
  for (let stock of state.stocks) {
    stocksCopy.push({
      ...stock,
      prices: [...stock.prices]
    })
  }

  // Find index of stock being bought
  const index = stocksCopy.findIndex(stock => stock.symbol === action.symbol)
  stocksCopy[index].buyQuantity = action.value;

  // Do nothing if the value will become negative
  if (stocksCopy[index].buyQuantity < 0) {
    stocksCopy[index].buyQuantity = 0
  }
  
  return {
    ...state,
    stocks: stocksCopy
  }
}

const stocksReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.LOAD_STOCKS:
      return loadStocks(state, action);
    case actionTypes.UPDATE_QUANTITY:
      return updateQuantity(state, action);
    default:
      return state;
  }
}

export default stocksReducer;