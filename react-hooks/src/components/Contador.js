import "../App.css";
import React from "react";
import { useState, useEffect } from "react";
export const Contador = () => {
  const [counter, setCounter] = useState(100);
  useEffect(() => {
    console.log(`El contador va en cuenta ${counter}`);
  }, [counter]);

  return (
    <div>
      <h1>{counter}</h1>
      <div className="container">
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Aumentar
        </button>
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          Disminuir
        </button>
        <button
          onClick={() => {
            setCounter(0);
          }}
        >
          Resetaer
        </button>
      </div>
    </div>
  );
};
