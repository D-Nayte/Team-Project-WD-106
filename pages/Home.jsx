import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../context/actions/counterActions";

function Home() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Hello Andy</h1>
      <p>Counter: {counter}</p>
      <button className="btn" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button className="btn" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
}

export default Home;
