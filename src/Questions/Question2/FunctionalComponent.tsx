import React from "react";
import { useState } from "react";

const FunctionalComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  const incrementValue = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };
  const decrementValue = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <>
      <button style={{ marginRight: "10px" }} onClick={incrementValue}>
        +
      </button>
      {count}
      <button style={{ marginLeft: "10px" }} onClick={decrementValue}>
        -
      </button>
    </>
  );
};

export default FunctionalComponent;
