import React, { useState } from "react";

const ReactCalculator = () => {
  const [numberOne, setNumberOne] = useState("");
  const [numberTwo, setNumberTwo] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(0);

  const calculation = () => {
    if (operator === "+") {
      setResult(parseInt(numberOne) + parseInt(numberTwo));
    } else if (operator === "-") {
      setResult(parseInt(numberOne) - parseInt(numberTwo));
    } else if (operator === "*") {
      setResult(parseInt(numberOne) * parseInt(numberTwo));
    } else if (operator === "/") {
      setResult(parseInt(numberOne) / parseInt(numberTwo));
    }
  };

  return (
    <div className="page">
      <h1 className="title">React Calculator</h1>
      <div>
        <input
          type="number"
          className="numberOne"
          onChange={(event) => {
            setNumberOne(event.target.value);
          }}
        ></input>
        <select
          className="operator"
          onChange={(event) => {
            setOperator(event.target.value);
          }}
        >
          <option>+</option>
          <option>-</option>
          <option>*</option>
          <option>/</option>
        </select>
        <input
          type="number"
          className="numberTwo"
          onChange={(event) => {
            setNumberTwo(event.target.value);
          }}
        ></input>
        <button type="submit" onClick={calculation}>
          =
        </button>
        <b>{result}</b>
      </div>
    </div>
  );
};

export default ReactCalculator;
