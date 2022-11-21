import Link from "next/link";
import React, { useEffect, useState } from "react";
import Documents from "../components/Documents";
import Submit from "../components/forms/Submit";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href="/login">PAGE</Link>
      <Submit />
      <Documents />
    </>
  );
}

export default Home;
