import * as actionTypes from "../actions/actionTypes";

const initialState = {
  stocks: [],
  transactions: [],
  isTransactionsLoaded: false,
  owned: {},
};

const loadStocks = (state, action) => {
  const stocks = action.stocks;
  for (let stock of stocks) {
    stock.buyQuantity = "";
    stock.sellQuantity = "";
  }
  return {
    ...state,
    stocks: stocks,
  };
};

// Add to quantity to buy from user input
const updateQuantity = (state, action) => {
  const stocksCopy = [];
  for (let stock of state.stocks) {
    stocksCopy.push({
      ...stock,
      prices: [...stock.prices],
    });
  }

  // Find index of stock being bought
  const index = stocksCopy.findIndex((stock) => stock.symbol === action.symbol);

  // Change sell quantity if action was to sell
  if (action.sell === "sell") {
    stocksCopy[index].sellQuantity = Number(action.value);

    // Do nothing if the value will become negative
    if (stocksCopy[index].sellQuantity <= 0) {
      stocksCopy[index].sellQuantity = "";
    }
    // If value is greater than the max leave it
    if (stocksCopy[index].sellQuantity > action.max) {
      stocksCopy[index].sellQuantity = state.stocks[index].sellQuantity;
    }
  } else {
    stocksCopy[index].buyQuantity = Number(action.value);

    // Do nothing if the value will become negative
    if (stocksCopy[index].buyQuantity <= 0) {
      stocksCopy[index].buyQuantity = "";
    }

    // If value is greater than the max leave it
    if (stocksCopy[index].sellQuantity > action.max) {
      stocksCopy[index].sellQuantity = state.stocks[index].sellQuantity;
    }
  }

  return {
    ...state,
    stocks: stocksCopy,
  };
};

// Create inventory of users stocks by summing users transactions
const createOwned = (state, transactions) => {
  const owned = {};
  for (let transaction of transactions) {
    const stock = state.stocks.filter((el) => {
      return transaction.stock === el._id;
    })[0];

    // If not entry for stock create new
    if (!owned[stock.symbol]) {
      owned[stock.symbol] = {};
      owned[stock.symbol].companyName = stock.companyName;
      owned[stock.symbol].prices = stock.prices;
    }

    // Get current quantity or set to 0 if not defined
    const currentQuantity = owned[stock.symbol].quantity;
    if (!currentQuantity) {
      owned[stock.symbol].quantity = 0;
    }
    owned[stock.symbol].quantity =
      owned[stock.symbol].quantity + transaction.quantity;
  }

  // Delete from owned if quantity is 0
  for (let key in owned) {
    if (owned[key].quantity === 0) {
      delete owned[key];
    }
  }
  return owned;
};

const loadTransactions = (state, action) => {
  const transactions = action.transactions;
  const owned = createOwned(state, transactions);
  return {
    ...state,
    isTransactionsLoaded: true,
    transactions,
    owned,
  };
};

const newTransaction = (state, action) => {
  const transactions = [...state.transactions, action.transaction];
  const owned = createOwned(state, transactions);
  return {
    ...state,
    transactions,
    owned,
  };
};

const addStock = (state, action) => {
  return {
    ...state,
    stocks: [...state.stocks, action.stock],
  };
};

// Add id to last added stock if not included
const addNewId = (state, action) => {
  const stocksCopy = [];
  for (let stock of state.stocks) {
    stocksCopy.push({
      ...stock,
      prices: [...stock.prices],
    });
  }

  // Find index of stock to add id to
  const index = stocksCopy.findIndex((stock) => stock.symbol === action.symbol);

  // Set id to id from database
  if (!stocksCopy[index]._id) {
    stocksCopy[index]._id = action._id;
  }

  return {
    ...state,
    stocks: stocksCopy,
  };
};

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_STOCKS:
      return loadStocks(state, action);
    case actionTypes.UPDATE_QUANTITY:
      return updateQuantity(state, action);
    case actionTypes.LOAD_TRANSACTIONS:
      return loadTransactions(state, action);
    case actionTypes.NEW_TRANSACTION:
      return newTransaction(state, action);
    case actionTypes.ADD_STOCK:
      return addStock(state, action);
    case actionTypes.ADD_NEW_ID:
      return addNewId(state, action);
    default:
      return state;
  }
};

export default stocksReducer;
