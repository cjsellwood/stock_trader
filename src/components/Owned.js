import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../store/actions/index";

const Owned = (props) => {
  useEffect(() => {
    if (!props.stocks.length) {
      props.onFetchStocks();
    }
    if (!props.isTransactionsLoaded) {
      props.onFetchTransactions();
    }
  });

  let totalValue = 0;
  const displayOwned = [];
  for (let key in props.owned) {
    // Percentage change since yesterday
    const change =
      ((props.owned[key].prices[props.owned[key].prices.length - 1] -
        props.owned[key].prices[props.owned[key].prices.length - 2]) /
        props.owned[key].prices[props.owned[key].prices.length - 2]) *
      100;
    displayOwned.push(
      <tr key={key}>
        <td>
          <Link to={`/stocks/${key}`}>{key}</Link>
        </td>
        <td>{props.owned[key].companyName}</td>
        <td>
          {props.owned[key].prices.length > 1 ? change.toFixed(2) + "%" : "-"}
        </td>
        <td>{props.owned[key].quantity}</td>
        <td>
          {props.owned[key].prices[props.owned[key].prices.length - 1].toFixed(
            2
          )}
        </td>
      </tr>
    );

    // Add to total value
    totalValue += (
      props.owned[key].prices[props.owned[key].prices.length - 1] *
      props.owned[key].quantity
    );
  }

  return (
    <div>
      <h1>Owned</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Company</th>
              <th>Change</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            <tr></tr>
          </thead>
          <tbody>{displayOwned}</tbody>
          <tfoot>
          <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Cash: </td>
              <td>{props.cash.toFixed(2)}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Total: </td>
              <td>{(totalValue + props.cash).toFixed(2)}</td>
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Owned);