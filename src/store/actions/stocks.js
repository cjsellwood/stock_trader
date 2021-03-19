import * as actionTypes from "../actions/actionTypes";
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
