import React, { useState } from "react";
import "./converter.css"; 
const Converter = () => {
  const exchangeRate = 86.40;
  const [dollars, setDollars] = useState("");
  const [rupees, setRupees] = useState("");
  const handleDollarChange = (e) => {
    const dollarValue = e.target.value;
    setDollars(dollarValue);
    const rupeeValue = dollarValue ? (dollarValue * exchangeRate).toFixed(2) : "";
    setRupees(rupeeValue);
  };

  const handleRupeeChange = (e) => {
    const rupeeValue = e.target.value;
    setRupees(rupeeValue);
    const dollarValue = rupeeValue ? (rupeeValue / exchangeRate).toFixed(2) : "";
    setDollars(dollarValue);
  };

  return (
    <>
      <div className="container1">
        <h1>
          <span id="exchange-rate">{exchangeRate}</span> Indian Rupee
        </h1>
      </div>
      <div className="container2">
        <div className="input_value">
          <input
          type="number"
          id="dollar"
          value={dollars}
          onChange={handleDollarChange}
          placeholder="0"
        />
        <label htmlFor="dollar">Dollar</label>
        </div>
        <div className="input_value">
          <input
          type="number"
          id="rupee"
          value={rupees}
          onChange={handleRupeeChange}
          placeholder="0"
        />
        <label htmlFor="rupee">Rupee</label>
        </div>
      </div>
    </>
  );
};

export default Converter;