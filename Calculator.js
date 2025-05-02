import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        // eslint-disable-next-line no-eval
        const result = eval(input);
        setInput(String(result));
      } catch {
        setInput("Error");
      }
    } else {
      const lastChar = input.slice(-1);
      if ("+-*/".includes(lastChar) && "+-*/".includes(value)) {
        setInput(input.slice(0, -1) + value); // Replace operator
      } else {
        setInput(input + value);
      }
    }
  };

  const buttons = [
    "C",
    "/",
    "*",
    "-",
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "=",
    "1",
    "2",
    "3",
    "0",
    ".",
  ];

  return (
    <div className="calculator">
      <input type="text" className="display" value={input} readOnly />
      <div className="buttons">
        {buttons.map((btn, i) => (
          <button key={i} onClick={() => handleClick(btn)}>
            {btn === "*" ? "×" : btn === "/" ? "÷" : btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
