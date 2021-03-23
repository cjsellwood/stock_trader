import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import * as actions from "../store/actions/index";

const Symbol = (props) => {
  // If hasn't been run before
  useEffect(() => {
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

  // Find stock with with symbol in url
  const { symbol } = useParams();
  const stock = props.stocks.filter((el) => {
    return el.symbol === symbol.toUpperCase();
  });

  let displayStock = [];
  if (stock.length) {
    displayStock = stock.map((el) => {
      return (
        <div key={el.symbol}>
          <h1>{el.symbol}</h1>
          <p>{el.companyName}</p>
          <p>Price history</p>
          {el.prices.map((price, index) => {
            return <span key={index}>{price}, </span>;
          })}
          <form onSubmit={buyStock} data-symbol={el.symbol}>
            <button
              type="button"
              aria-label="subtract 1"
              onClick={() =>
                props.onUpdateQuantity(el.symbol, el.buyQuantity - 1)
              }
            >
              -
            </button>
            <input
              type="number"
              id="quantity"
              name="quantity"
              aria-label="quantity"
              value={el.buyQuantity}
              min="0"
              onChange={(e) =>
                props.onUpdateQuantity(el.symbol, e.target.value)
              }
            />
            <button
              type="button"
              aria-label="add 1"
              onClick={() =>
                props.onUpdateQuantity(el.symbol, el.buyQuantity + 1)
              }
            >
              +
            </button>
            {/* <span>{stock.prices[stock.prices.length - 1] * stock.buyQuantity}</span> */}
            <button type="submit">Buy</button>
          </form>
        </div>
      );
    });
  }

  return <div>{displayStock}</div>;
};

const mapStateToProps = (state) => {
  return {
    stocks: state.stocks.stocks,
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

export default connect(mapStateToProps, mapDispatchToProps)(Symbol);
