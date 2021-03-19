import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

const Stocks = (props) => {
  useEffect(() => {
    // If hasn't been run before fetch stocks from database
    if (!props.stocks.length) {
      props.onFetchStocks();
    }

    // eslint-disable-next-line
  }, []);

  let displayStocks = props.stocks.map((stock) => {
    // Percentage change since yesterday
    const change =
      ((stock.prices[stock.prices.length - 1] -
        stock.prices[stock.prices.length - 2]) /
        stock.prices[stock.prices.length - 2]) *
      100;
    return (
      <tr key={stock.symbol}>
        <td>
          {" "}
          <Link to={`/stocks/${stock.symbol}`}>{stock.symbol}</Link>
        </td>
        <td>{stock.companyName}</td>
        <td> {stock.prices.length > 1 ? change.toFixed(2) + "%" : "-"}</td>
        <td>{stock.prices[stock.prices.length - 1].toFixed(2)}</td>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchStocks: () => {
      dispatch(actions.fetchStocks())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);
