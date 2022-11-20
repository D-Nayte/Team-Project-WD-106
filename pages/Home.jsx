import React, { useEffect } from "react";
import TestForm from "../components/forms/DONTCHANGETHISFORM";
import Navbar from "../components/navbar/Navbar.js";
import style from "../styles/navBar.module.css";

function Home() {
  return (
    <>
    <Navbar />
      <h1>Home</h1>
      <TestForm />
    </>
  );
}

export default Home;
