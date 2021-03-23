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
      .catch((err) => {
        console.dir(err);
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
    axios
      .post(
        "http://localhost:3000/stocks/buy",
        { stock, quantity },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);

        // Add id if result was from stock api search
        dispatch(addNewId(response.data.newId));

        // Save updated cash value
        dispatch(actions.setCash(response.data.cash));
        localStorage.setItem("cash", response.data.cash);

        // Push to transactions state
        dispatch(actions.newTransaction(response.data.transaction));
      })
      .catch((err) => {
        console.dir(err);
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
      .catch((err) => {
        console.dir(err);
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
