import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

const Stocks = (props) => {
  useEffect(() => {
    // If hasn't been run before fetch stocks from database
    if (!props.stocks.length) {
      props.onFetchStocks();
    } else {
      // Reset buy quantity for all stocks
      for (let stock of props.stocks) {
        props.onUpdateQuantity(stock.symbol, "");
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
      props.onUpdateQuantity(symbol, 0);
      props.onSetErrorMessage(`Bought ${quantity} ${symbol}`, "success")
    } else {
      if (totalPrice > props.cash) {
        props.onSetErrorMessage("Cannot Afford");
      } else if (quantity === "") {
        props.onSetErrorMessage("Please Enter a Number");
      }
    }
  };

  const displayStocks = props.stocks.map((stock) => {
    // Percentage change since yesterday
    const change =
      ((stock.prices[stock.prices.length - 1] -
        stock.prices[stock.prices.length - 2]) /
        stock.prices[stock.prices.length - 2]) *
      100;
    return (
      <tr key={stock.symbol}>
        <td>
          <Link to={`/stocks/${stock.symbol}`}>{stock.symbol}</Link>
        </td>
        <td>
          <Link to={`/stocks/${stock.symbol}`}>{stock.companyName}</Link>
        </td>
        <td
          className={
            change > 0
              ? "r-align positive"
              : change < 0
              ? "r-align negative"
              : "r-align"
          }
        >
          {stock.prices.length > 1 ? change.toFixed(2) + "%" : "-"}
        </td>
        <td className="r-align">
          {stock.prices[stock.prices.length - 1].toFixed(2)}
        </td>
        <td>
          <form
            className="transaction-form"
            onSubmit={buyStock}
            data-symbol={stock.symbol}
          >
            <div>
              <button
                type="button"
                aria-label="subtract 1"
                onClick={() => {
                  props.onSetErrorMessage("");
                  props.onUpdateQuantity(stock.symbol, stock.buyQuantity - 1);
                }}
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                name="quantity"
                aria-label="quantity"
                value={stock.buyQuantity}
                min="0"
                onChange={(e) => {
                  props.onSetErrorMessage("");
                  props.onUpdateQuantity(stock.symbol, e.target.value);
                }}
              />
              <button
                type="button"
                aria-label="add 1"
                onClick={() => {
                  props.onSetErrorMessage("");
                  props.onUpdateQuantity(stock.symbol, stock.buyQuantity + 1);
                }}
              >
                +
              </button>
            </div>
            <button type="submit">Buy</button>
          </form>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h1 className="page-title">Stocks</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Company</th>
            <th>Change</th>
            <th>Price</th>
            <th>Buy</th>
          </tr>
        </thead>
        <tbody>{displayStocks}</tbody>
      </table>
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
    onSetErrorMessage: (message, success) => {
      dispatch(actions.setErrorMessage(message, success));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);
