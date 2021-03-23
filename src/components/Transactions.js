import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../store/actions/index";

const Transactions = (props) => {
  useEffect(() => {
    if (!props.stocks.length) {
      props.onFetchStocks();
    }
    if (!props.isTransactionsLoaded) {
      props.onFetchTransactions();
    }
  });

  const displayTransactions = props.transactions.map((transaction) => {
    const stock = props.stocks.filter((el) => {
      return transaction.stock === el._id;
    })[0];
    return (
      <tr key={transaction._id}>
        <td>
          <Link to={`/stocks/${stock.symbol}`}>{stock.symbol}</Link>
        </td>
        <td>{stock.companyName}</td>
        <td>{new Date(transaction.date).toLocaleDateString()}</td>
        <td>{transaction.quantity}</td>
        <td>{transaction.price.toFixed(2)}</td>
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
            <th>Date</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{displayTransactions.reverse()}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    stocks: state.stocks.stocks,
    transactions: state.stocks.transactions,
    isTransactionsLoaded: state.stocks.isTransactionsLoaded,
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

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
