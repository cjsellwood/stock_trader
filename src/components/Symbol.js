import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import * as actions from "../store/actions/index";
import { Line } from "react-chartjs-2";

const Symbol = (props) => {
  // If hasn't been run before
  useEffect(() => {
    if (!props.stocks.length) {
      props.onFetchStocks();
    } else {
      // Reset buy quantity for all stocks
      for (let stock of props.stocks) {
        props.onUpdateQuantity(stock.symbol, "");
      }
    }
    // Reset error message on page load
    props.onSetErrorMessage("");

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

    if (quantity !== "" && totalPrice < props.cash) {
      props.onBuyStock(props.stocks[index], quantity, index);
      props.onUpdateQuantity(symbol, "");
      props.onSetErrorMessage(`Bought ${quantity} ${symbol}`, "success");
    } else {
      if (totalPrice > props.cash) {
        props.onSetErrorMessage("Cannot Afford");
      } else if (quantity === "") {
        props.onSetErrorMessage("Please Enter a Number");
      }
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
        <React.Fragment key={el.symbol}>
          <h1 className="page-title">{el.symbol}</h1>
          <p className="company-name">Company: {el.companyName}</p>
          <h2 className="price-history h-center">Price history</h2>
          <table className="table">
            <thead>
              <tr>
                {el.prices.map((price, index) => {
                  const date = new Date(
                    Date.now() -
                      (el.prices.length - 1 - index) * 1000 * 60 * 60 * 24
                  );
                  return <th key={index}>{date.toLocaleDateString()}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                {el.prices.map((price, index) => {
                  return (
                    <td className="r-align" key={index}>
                      {price}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
          {el.prices.length > 1 ? (
            <Line
              data={{
                type: "Line",
                labels: el.prices.map((price, index) => {
                  const date = new Date(
                    Date.now() -
                      (el.prices.length - 1 - index) * 1000 * 60 * 60 * 24
                  );

                  return date.toLocaleDateString();
                }),
                datasets: [
                  {
                    fill: false,
                    pointBackgroundColor: "rgb(90, 90, 255)",
                    borderColor: "rgb(90, 90, 255)",
                    lineTension: 0,
                    data: el.prices.map((price, index) => {
                      return price;
                    }),
                  },
                ],
              }}
              options={{
                legend: {
                  display: false,
                },
                scales: {
                  xAxes: [
                    {
                      gridLines: {
                        display: false,
                      },
                    },
                  ],
                },
              }}
            />
          ) : null}

          <form
            className="transaction-form"
            onSubmit={buyStock}
            data-symbol={el.symbol}
          >
            <div>
              <button
                type="button"
                aria-label="subtract 1"
                onClick={() => {
                  props.onSetErrorMessage("");
                  props.onUpdateQuantity(el.symbol, el.buyQuantity - 1);
                }}
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
                onChange={(e) => {
                  props.onSetErrorMessage("");
                  props.onUpdateQuantity(el.symbol, e.target.value);
                }}
              />
              <button
                type="button"
                aria-label="add 1"
                onClick={() => {
                  props.onSetErrorMessage("");
                  props.onUpdateQuantity(el.symbol, el.buyQuantity + 1);
                }}
              >
                +
              </button>
            </div>
            <button type="submit">Buy</button>
          </form>
        </React.Fragment>
      );
    });
  }

  // Redirect if stock doesn't exist in state
  if (!displayStock.length && props.stocks.length) {
    displayStock = <Redirect to="/stocks"></Redirect>;
  }

  return <div className="w-600 h-center flex-column">{displayStock}</div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(Symbol);
