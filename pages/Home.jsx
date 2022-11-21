import Link from "next/link";
import React, { useEffect, useState } from "react";
import Submit from "../components/forms/Submit";

// function handleFile(e) {
//   const file = e.target.files[0];
//   console.log(file);
//   const type = file.name.slice(-4);
//   console.log(type);
//   if (type !== (".png" || "jpeg" || "svg")) {
//     alert("only .png / .jpeg / .svg");
//   }
// }

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href="/login">PAGE</Link>
      <Submit />
    </>
  );
}

export default Home;
