import * as actionTypes from "../actions/actionTypes";
import * as actions from "./index";
import axios from "axios";

// Authorize user
export const loadStocks = (stocks) => {
  return {
    type: actionTypes.LOAD_STOCKS,
    stocks,
  };
};

// Fetch stocks from database
export const fetchStocks = () => {
  return (dispatch) => {
    const jwtToken = localStorage.getItem("jwtToken");
    axios
      .get("http://localhost:3000/stocks", {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        dispatch(loadStocks(response.data.stocks));
      })
      .catch((error) => {
        if (error.response) {
          dispatch(actions.setErrorMessage(error.response.data.message));
        } else {
          dispatch(actions.setErrorMessage("Something went wrong"));
        }
      });
  };
};

// Change quantity to buy based on user input
export const updateQuantity = (symbol, value, sell, max) => {
  return {
    type: actionTypes.UPDATE_QUANTITY,
    symbol,
    value,
    sell,
    max,
  };
};

export const newTransaction = (transaction) => {
  return {
    type: actionTypes.NEW_TRANSACTION,
    transaction,
  };
};

export const addNewId = (_id) => {
  return {
    type: actionTypes.ADD_NEW_ID,
    _id,
  };
};

// Buy a stock on the backend
export const buyStock = (stock, quantity, index) => {
  return (dispatch) => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (quantity === "") {
      quantity = 0;
    }
    axios
      .post(
        "http://localhost:3000/stocks/buy",
        {
          stock: {
            symbol: stock.symbol,
            companyName: stock.companyName,
            prices: stock.prices,
          },
          quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      )
      .then((response) => {
        // Add id if result was from stock api search
        dispatch(addNewId(response.data.newId));

        // Save updated cash value
        dispatch(actions.setCash(response.data.cash));
        localStorage.setItem("cash", response.data.cash);

        // Push to transactions state
        dispatch(actions.newTransaction(response.data.transaction));
      })
      .catch((error) => {
        if (error.response) {
          dispatch(actions.setErrorMessage(error.response.data.message));
        } else {
          dispatch(actions.setErrorMessage("Something went wrong"));
        }
      });
  };
};

export const loadTransactions = (transactions) => {
  return {
    type: actionTypes.LOAD_TRANSACTIONS,
    transactions,
  };
};

// Fetch stocks from database
export const fetchTransactions = () => {
  return (dispatch) => {
    const jwtToken = localStorage.getItem("jwtToken");
    axios
      .get("http://localhost:3000/stocks/transactions", {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        dispatch(loadTransactions(response.data.transactions));
      })
      .catch((error) => {
        if (error.response) {
          dispatch(actions.setErrorMessage(error.response.data.message));
        } else {
          dispatch(actions.setErrorMessage("Something went wrong"));
        }
      });
  };
};

// Add new stock to state from search results
export const addStock = (stock) => {
  return {
    type: actionTypes.ADD_STOCK,
    stock,
  };
};
