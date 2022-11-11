import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../context/actions/counterActions";

function Home() {
  return <h1>Home</h1>;
}

//Redux examples
// const counter = useSelector((state) => state.counter) gives you the prop to display it
// const dispatch = useDispatch() changes the state in redux

// <button className="btn" onClick={() => dispatch(increment())}>

export default Home;
