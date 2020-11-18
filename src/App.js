import React, { useEffect, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const persistedItem = localStorage.getItem("counter");
    setCounter(persistedItem);
  }, []);

  const increaseCounterValue = () => {
    setCounter(counter + 1);
    localStorage.setItem("counter", counter - 1);
  };

  const decreaseCounterValue = () => {
    setCounter(counter - 1);
    localStorage.setItem("counter", counter - 1);
  };

  return (
    <div className="px-4 py-4 align-center text-center justify-center">
      <button
        onClick={increaseCounterValue}
        className="m-6 text-white bg-blue-400 text-2xl rounded focus:outline-none font-bold"
      >
        Increase
      </button>

      <p className="bg-blue-800 rounded p-20 m-10 text-white text-2xl font-bold">
        Counter : {counter}
      </p>

      <button
        onClick={decreaseCounterValue}
        className="m-6 text-white bg-blue-400 text-2xl rounded focus:outline-none font-bold"
      >
        Decrease
      </button>
    </div>
  );
}
