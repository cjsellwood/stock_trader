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
      props.onUpdateQuantity(symbol, 0);
    } else {
      console.log("Can't Afford or quantity 0");
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
        <td>{stock.companyName}</td>
        <td>{stock.prices.length > 1 ? change.toFixed(2) + "%" : "-"}</td>
        <td>{stock.prices[stock.prices.length - 1].toFixed(2)}</td>
        <td>
          <form onSubmit={buyStock} data-symbol={stock.symbol}>
            <button
              type="button"
              aria-label="subtract 1"
              onClick={() =>
                props.onUpdateQuantity(stock.symbol, stock.buyQuantity - 1)
              }
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
              onChange={(e) =>
                props.onUpdateQuantity(stock.symbol, e.target.value)
              }
            />
            <button
              type="button"
              aria-label="add 1"
              onClick={() =>
                props.onUpdateQuantity(stock.symbol, stock.buyQuantity + 1)
              }
            >
              +
            </button>
            {/* <span>{stock.prices[stock.prices.length - 1] * stock.buyQuantity}</span> */}
            <button type="submit">Buy</button>
          </form>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);
