import { createStore } from "redux";
import allReducersc from "./reducers";
import { Provider as StoreComponent, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth/fireBase";
import { signInUser, signOutUser } from "../context/actions/signInUser";
import React, { useEffect } from "react";

export const store = createStore(allReducersc());

function Store({ children }) {
  useEffect(() => {
    //Event listener. When auth changes, user gets stored/deletet in Redux
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        store.dispatch(signInUser(user));
      } else {
        store.dispatch(signOutUser());
      }
    });
    return unsubscribe;
  }, []);

  return <StoreComponent store={store}>{children}</StoreComponent>;
}

export default Store;
