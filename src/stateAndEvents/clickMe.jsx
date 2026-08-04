import { useState } from "react";
import "./clickMe.css";

function ClickMe() {
  const [n, setN] = useState(0);

  const increment = () => {
    const newN = n + 1;
    setN(newN);
  };

  const decrement = () => {
    setN(n - 1);
  };

  const spoil = () => {
    setN("Cats and dogs");
  };

  const reset = () => {
    setN(0);
  };

  return (
    <div className="clickme-container">
      <h4 className="clickme-count">Clicked {n}</h4>
      <div className="clickme-buttons">
        <button className="clickme-btn" onClick={increment}>Increment</button>
        <button className="clickme-btn" onClick={decrement}>Decrement</button>
        <button className="clickme-btn clickme-btn-danger" onClick={spoil}>Spoil</button>
        <button className="clickme-btn clickme-btn-reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default ClickMe;