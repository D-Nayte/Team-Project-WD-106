import Home from "./Home";
import React from "react";
import StoreComponent from "../context/Store.jsx";
import style from "../styles/navBar.module.css";

function index() {
  return (
    <StoreComponent>
      <Home />
    </StoreComponent>
  );
}

export default index;
