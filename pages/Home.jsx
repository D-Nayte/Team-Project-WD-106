import React, { useEffect } from "react";
import TestForm from "../components/forms/DONTCHANGETHISFORM";
import json from "./unionsData.json";
import { collection, addDoc } from "firebase/firestore";
import { database } from "../auth/fireBase";

function Home() {
  console.log(json);

  function addToDatabase(section) {
    json.forEach(async (entry) => {
      try {
        const docRef = await addDoc(collection(database, section), entry);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    });
  }

  return (
    <>
      <h1>Home</h1>
      <TestForm />
      <button onClick={() => addToDatabase("unions")}>SEND DATA</button>
    </>
  );
}

export default Home;
