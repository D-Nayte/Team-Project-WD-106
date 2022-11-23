import React, { useEffect } from "react";
import TestForm from "../components/forms/DONTCHANGETHISFORM";
import unions from "./unionsData.json";
import lawyers from "./lawyerData.json";
import { collection, addDoc } from "firebase/firestore";
import { database } from "../auth/fireBase";

function Home() {
  function addLawyers() {
    lawyers.forEach(async (entry) => {
      try {
        const docRef = await addDoc(collection(database, "lawyers"), entry);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    });
  }

  function addToDatabase() {
    unions.forEach(async (entry) => {
      try {
        const docRef = await addDoc(collection(database, "unions"), entry);
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
      <button onClick={() => addLawyers()}>Send Lawyers</button>
      <button onClick={() => addToDatabase()}>send Unions</button>
    </>
  );
}

export default Home;
