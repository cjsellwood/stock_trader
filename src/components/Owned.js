import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../store/actions/index";

const Owned = (props) => {
  useEffect(() => {
    if (!props.stocks.length) {
      props.onFetchStocks();
    } else {
      // Reset buy quantity for all stocks
      for (let stock of props.stocks) {
        props.onUpdateQuantity(stock.symbol, 0);
      }
    }
    if (!props.isTransactionsLoaded) {
      props.onFetchTransactions();
    }
    // eslint-disable-next-line
  }, []);

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
    if (quantity !== 0 && totalPrice < props.cash) {
      props.onBuyStock(props.stocks[index], quantity, index);
      props.onUpdateQuantity(symbol, 0);
    } else {
      console.log("Can't Afford or quantity 0");
    }
  };

  const sellStock = (e) => {
    e.preventDefault();
    const symbol = e.target.getAttribute("data-symbol");

    // Find index of stock being bought
    const index = props.stocks.findIndex((stock) => stock.symbol === symbol);

    // Check that the user has the stock quantity to sell
    const ownedQuantity = props.owned[symbol].quantity;
    const quantity = props.stocks[index].sellQuantity;
    if (quantity !== 0 && quantity <= ownedQuantity) {
      props.onBuyStock(props.stocks[index], -quantity, index);
      props.onUpdateQuantity(symbol, 0, "sell");
    }
  };

  let totalValue = 0;
  const displayOwned = [];
  for (let key in props.owned) {
    // Use stock from props.stocks to use buy quantity
    const stock = props.stocks.filter((stock) => key === stock.symbol)[0];

    // Percentage change since yesterday
    const change =
      ((stock.prices[stock.prices.length - 1] -
        stock.prices[stock.prices.length - 2]) /
        stock.prices[stock.prices.length - 2]) *
      100;
    displayOwned.push(
      <tr key={key}>
        <td>
          <Link to={`/stocks/${key}`}>{key}</Link>
        </td>
        <td>
          <Link to={`/stocks/${key}`}>{stock.companyName}</Link>
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
        <td className="r-align">{props.owned[key].quantity}</td>
        <td className="r-align">
          {stock.prices[stock.prices.length - 1].toFixed(2)}
        </td>
        <td className="r-align">
          {(
            stock.prices[stock.prices.length - 1] * props.owned[key].quantity
          ).toFixed(2)}
        </td>
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
        <td>
          <form onSubmit={sellStock} data-symbol={stock.symbol}>
            <button
              type="button"
              aria-label="subtract 1"
              onClick={() =>
                props.onUpdateQuantity(
                  stock.symbol,
                  stock.sellQuantity - 1,
                  "sell",
                  props.owned[key].quantity
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
              value={stock.sellQuantity}
              min="0"
              onChange={(e) =>
                props.onUpdateQuantity(stock.symbol, e.target.value, "sell")
              }
              max={props.owned[key].quantity}
            />
            <button
              type="button"
              aria-label="add 1"
              onClick={() =>
                props.onUpdateQuantity(
                  stock.symbol,
                  stock.sellQuantity + 1,
                  "sell",
                  props.owned[key].quantity
                )
              }
            >
              +
            </button>
            <button type="submit">Sell</button>
          </form>
        </td>
      </tr>
    );

    // Add to total value
    totalValue +=
      stock.prices[stock.prices.length - 1] * props.owned[key].quantity;
  }

  return (
    <div>
      <h1 className="page-title">Owned</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Company</th>
              <th>Change</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Value</th>
              <th>Buy</th>
              <th>Sell</th>
            </tr>
          </thead>
          <tbody>{displayOwned}</tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Cash: </td>
              <td className="r-align">{props.cash.toFixed(2)}</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Total:</td>
              <td className="r-align">
                {(totalValue + props.cash).toFixed(2)}
              </td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    stocks: state.stocks.stocks,
    owned: state.stocks.owned,
    isTransactionsLoaded: state.stocks.isTransactionsLoaded,
    cash: state.auth.cash,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchStocks: () => {
      dispatch(actions.fetchStocks());
    },
    onFetchTransactions: () => {
      dispatch(actions.fetchTransactions());
    },
    onUpdateQuantity: (symbol, value, sell, max) => {
      dispatch(actions.updateQuantity(symbol, value, sell, max));
    },
    onBuyStock: (stock, quantity, index) => {
      dispatch(actions.buyStock(stock, quantity, index));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Owned);
