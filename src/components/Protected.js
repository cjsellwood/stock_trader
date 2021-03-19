import axios from "axios";
import React, { useState, useEffect } from "react";

const Protected = (props) => {
  const [display, setDisplay] = useState("Unauthorized");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let jwtToken = localStorage.getItem("jwtToken");
    axios
      .get("http://localhost:3000/protected", {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        console.dir(response);
        setDisplay(response.data.message);
      })
      .catch((error) => {
        console.dir(error);
        setErrorMessage(error.response.data.message);
      });
  }, []);
  return (
    <div>
      <h2>{errorMessage}</h2>
      {display}
    </div>
  );
};

export default Protected;
