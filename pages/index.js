import Home from "./Home";
import React from "react";
import StoreComponent from "../context/Store.jsx";

function index() {
  return (
    <StoreComponent>
      <Home />
    </StoreComponent>
  );
}

export default index;
