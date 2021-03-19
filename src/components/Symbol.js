import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import * as actions from "../store/actions/index";
import axios from "axios";

const Symbol = (props) => {
  // If hasn't been run before
  if (!props.stocks.length) {
    const jwtToken = localStorage.getItem("jwtToken");
    axios
      .get("http://localhost:3000/stocks", {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        props.onLoadStocks(response.data.stocks);
      })
      .catch((err) => {
        console.dir(err);
      });
  }

  // Find stock with with symbol in url
  const { symbol } = useParams();
  const stock = props.stocks.filter((el) => {
    return el.symbol === symbol.toUpperCase();
  });

  let displayStock = [];
  if (stock.length) {
    console.log(stock.length)
    displayStock = stock.map((el) => {
      return (
        <React.Fragment>
          <h1>{el.symbol}</h1>
          <p>{el.companyName}</p>
          {el.prices.map((price) => {
          return <span>{price}, </span>;
        })}
        </React.Fragment>
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
    onLoadStocks: (stocks) => {
      dispatch(actions.loadStocks(stocks));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Symbol);
