import React, { useEffect, useState } from "react";
import Forms from "../components/forms/forms";
import Submit from "../components/forms/submit";
import Search from "../components/forms/search";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Forms />
      <Submit />
      <Search />
    </>
  );
}

export default Home;
