import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

const Search = (props) => {
  useEffect(() => {
    // If hasn't been run before fetch stocks from database
    if (!props.stocks.length) {
      props.onFetchStocks();
    } else {
      // Reset buy quantity for all stocks
      for (let stock of props.stocks) {
        props.onUpdateQuantity(stock.symbol, 0);
      }
    }

    // eslint-disable-next-line
  }, []);

  // Buy a stock
  const buyStock = (e) => {
    e.preventDefault();
    const symbol = e.target.getAttribute("data-symbol");

    // Find index of stock being bought
    const index = props.stocks.findIndex((stock) => stock.symbol === symbol);

    // Check if user can afford to buy the quantity entered
    const price =
      props.stocks[index].prices[props.stocks[index].prices.length - 1];
    const quantity = props.stocks[index].buyQuantity;
    const totalPrice = price * quantity;
    console.log(totalPrice);
    if (totalPrice !== 0 && totalPrice < props.cash) {
      props.onBuyStock(props.stocks[index], quantity, index);
    } else {
      console.log("Can't Afford or quantity 0");
    }
  };

  const [search, setSearch] = useState("");

  // Update search term with users input
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const [index, setIndex] = useState(-1);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle submission of search form
  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(search);

    // Check state for search term first
    const searchIndex = props.stocks.findIndex((stock) => {
      return stock.symbol === search.toUpperCase();
    });

    // If found in state display results from it
    if (searchIndex !== -1) {
      // setStock([
      //   {
      //     symbol: props.stocks[index].symbol,
      //     companyName: props.stocks[index].companyName,
      //     prices: props.stocks[index].prices,
      //     buyQuantity: 0,
      //   },
      // ]);
      setErrorMessage("");
      setIndex(searchIndex);
    } else {
      // If not found in state check database and stock api
      const jwtToken = localStorage.getItem("jwtToken");
      axios
        .get(`http://localhost:3000/search`, {
          params: {
            symbol: search,
          },
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        })
        .then((response) => {
          console.log(response);
          const result = response.data;

          // Add stock to state
          props.onAddStock({
            symbol: result.symbol,
            companyName: result.companyName,
            prices: result.prices,
            buyQuantity: 0,
          });

          // Index will then be set to the newly added stock which is last
          setIndex(props.stocks.length);

          // Show found data for stock
          // setStock([
          //   {
          //     symbol: result.symbol,
          //     companyName: result.companyName,
          //     prices: result.prices,
          //     buyQuantity: 0,
          //   },
          // ]);
          setErrorMessage("");
        })
        .catch((error) => {
          console.log(error);
          setIndex(-1)
          setErrorMessage(error.response.data.message);
        });
    }
  };

  // Display result of search
  let displayStock;
  if (index !== -1) {
    displayStock = [
      <div key={props.stocks[index].symbol}>
        <h1>{props.stocks[index].symbol}</h1>
        <p>Company: {props.stocks[index].companyName}</p>
        <p>Price history</p>
        {props.stocks[index].prices.map((price, index) => {
          return <span key={index}>{price}, </span>;
        })}
        <form onSubmit={buyStock} data-symbol={props.stocks[index].symbol}>
          <button
            type="button"
            aria-label="subtract 1"
            onClick={() =>
              props.onUpdateQuantity(
                props.stocks[index].symbol,
                props.stocks[index].buyQuantity - 1
              )
            }
          >
            -
          </button>
          <input
            type="number"
            id="quantity"
            name="quantity"
            aria-label="quantity"
            value={props.stocks[index].buyQuantity}
            min="0"
            onChange={(e) =>
              props.onUpdateQuantity(props.stocks[index].symbol, e.target.value)
            }
          />
          <button
            type="button"
            aria-label="add 1"
            onClick={() =>
              props.onUpdateQuantity(
                props.stocks[index].symbol,
                props.stocks[index].buyQuantity + 1
              )
            }
          >
            +
          </button>
          {/* <span>{stock.prices[stock.prices.length - 1] * stock.buyQuantity}</span> */}
          <button type="submit">Buy</button>
        </form>
      </div>,
    ];
  }

  return (
    <div>
      <h1>Search by Symbol</h1>
      <form onSubmit={handleSubmission}>
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
        <button type="submit">Search</button>
      </form>
      <h1>{errorMessage}</h1>
      {displayStock}
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
      dispatch(actions.addStock(stock))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
