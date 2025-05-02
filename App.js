import React, { useState } from "react";
import "./App.css";

const buttons = [
  ["mc", "m+", "m-", "mr"],
  ["AC", "←", "+/-", "÷"],
  ["7", "8", "9", "×"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["%", "0", ".", "="],
];

const App = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("");
    } else if (value === "←") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        const result = eval(input.replace("÷", "/").replace("×", "*"));
        setInput(result.toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="app">
      <div className="display">{input || "0"}</div>
      <div className="button-grid">
        {buttons.flat().map((btn, idx) => (
          <button
            key={idx}
            className={`btn ${
              ["+", "-", "×", "÷", "%", "=", "AC", "+/-"].includes(btn)
                ? "operator"
                : ""
            } ${btn === "=" ? "equals" : ""}`}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
