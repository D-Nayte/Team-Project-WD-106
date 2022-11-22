import { createStore } from "redux";
import allReducersc from "./reducers";
import { Provider as StoreComponent, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth/fireBase";
import { signInUser, signOutUser } from "../context/actions/signInUser";
import { changeLawyers, changeUnions } from "../context/actions/compActions";
import React, { useEffect } from "react";
import { database } from "../auth/fireBase";
import { collection, onSnapshot } from "firebase/firestore";

export const store = createStore(allReducersc());

function Store({ children }) {
  //Event Listener for Database
  function startDatabaseListener() {
    const lawyerData = collection(database, "lawyers");
    const unionsData = collection(database, "unions");

    const unsubLawyers = onSnapshot(lawyerData, (docs) => {
      const newLawyers = [];
      docs.forEach((doc) => {
        newLawyers.push(doc.data());
      });
      store.dispatch(changeLawyers(newLawyers));
    });
    const unsubUnions = onSnapshot(unionsData, (docs) => {
      const newUnions = [];
      docs.forEach((doc) => {
        newUnions.push(doc.data());
      });
      store.dispatch(changeUnions(newUnions));
    });
    return function unsubDatabase() {
      unsubUnions();
      unsubLawyers();
    };
  }

  //Event listener. When auth changes, user gets stored/deletet in Redux
  function startAuthListener() {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        store.dispatch(signInUser(user));
      } else {
        store.dispatch(signOutUser());
      }
    });
  }

  useEffect(() => {
    const unsubscribe = startAuthListener();
    const unsubDatabase = startDatabaseListener();
    return () => {
      unsubscribe(), unsubDatabase();
    };
  }, []);

  return <StoreComponent store={store}>{children}</StoreComponent>;
}

export default Store;
