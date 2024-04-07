import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/slices/counterSlice";
import { getProduct } from "./api/fakestore";

function Counter() {
  const StoredCount = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleOnClick = () => {
    const input_number = inputRef.current.value;
    console.log({ input_number });
    dispatch(getProduct(input_number));
  };

  return (
    <div>
      <span>{StoredCount?.count}</span>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
      <input type="number" name="ID" id="ID" ref={inputRef} />
      <button onClick={handleOnClick}>Set Data</button>
    </div>
  );
}

export { Counter };
