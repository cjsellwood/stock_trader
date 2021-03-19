import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [search, setSearch] = useState("");

  // Update search term with users input
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const [stock, setStock] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const displayStock = stock.map((el) => {
    return (
      <div key={el.symbol}>
        <h1>{el.symbol}</h1>
        <p>Company: {el.companyName}</p>
        <p>Price: ${el.price}</p>
      </div>
    );
  });

  // Handle submission of search form
  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(search);

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

        // Show found data for stock
        setStock([{
          symbol: result.symbol,
          companyName: result.companyName,
          price: result.prices[result.prices.length - 1],
        }]);
        setErrorMessage("");
      })
      .catch((error) => {
        console.log(error);
        setStock([])
        setErrorMessage(error.response.data.message);
      });
  };

  return (
    <div>
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

export default Search;
