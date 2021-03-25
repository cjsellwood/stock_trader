import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

const Search = (props) => {
  useEffect(() => {
    // If hasn't been run before fetch stocks from database
    if (!props.stocks.length) {
      props.onFetchStocks();
    }

    // Reset error message on page load
    props.onSetErrorMessage("");

    // eslint-disable-next-line
  }, []);

  const [search, setSearch] = useState("");

  // Update search term with users input
  const handleInput = (e) => {
    setSearch(e.target.value);
    props.onSetErrorMessage("");
  };

  let history = useHistory();

  // Handle submission of search form
  const handleSubmission = (e) => {
    e.preventDefault();

    // Check state for search term first
    const searchIndex = props.stocks.findIndex((stock) => {
      return stock.symbol === search.toUpperCase();
    });

    // If found in state display results from it
    if (searchIndex !== -1) {
      props.onSetErrorMessage("");

      // Redirect to symbol page
      history.push(`/stocks/${props.stocks[searchIndex].symbol}`);
    } else {
      // If not found in state check database and stock api
      const jwtToken = localStorage.getItem("jwtToken");
      axios
        .post(
          `http://localhost:3000/search`,
          { symbol: search },
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        )
        .then((response) => {
          const result = response.data;

          // Add stock to state
          props.onAddStock({
            symbol: result.symbol,
            companyName: result.companyName,
            prices: result.prices,
            buyQuantity: 0,
          });

          // Redirect to symbol page
          history.push(`/stocks/${result.symbol}`);
        })
        .catch((error) => {
          if (error.response) {
            props.onSetErrorMessage(error.response.data.message);
          } else {
            props.onSetErrorMessage("Something went wrong");
          }
        });
    }
  };

  return (
    <div className="h-center w-600">
      <h1 className="page-title">Search</h1>
      <form className="form" onSubmit={handleSubmission}>
        <div>
          <label htmlFor="search">Symbol</label>
          <input
            type="text"
            id="search"
            name="search"
            value={search}
            onChange={handleInput}
            required
            maxLength="6"
          />
        </div>
        <button className="h-center" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    stocks: state.stocks.stocks,
    cash: state.auth.cash,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchStocks: () => {
      dispatch(actions.fetchStocks());
    },
    onUpdateQuantity: (symbol, value) => {
      dispatch(actions.updateQuantity(symbol, value));
    },
    onBuyStock: (stock, quantity, index) => {
      dispatch(actions.buyStock(stock, quantity, index));
    },
    onAddStock: (stock) => {
      dispatch(actions.addStock(stock));
    },
    onSetErrorMessage: (message) => {
      dispatch(actions.setErrorMessage(message));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
