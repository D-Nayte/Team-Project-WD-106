import { createStore } from "redux";
import allReducersc from "./reducers";
import { Provider as StoreComponent } from "react-redux";
import React from "react";

const store = createStore(allReducersc());

function Store({ children }) {
  return <StoreComponent store={store}>{children}</StoreComponent>;
}

export default Store;
