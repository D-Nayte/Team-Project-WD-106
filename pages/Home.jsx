import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Form from "../components/forms/Form";
import Submit from "../components/forms/Submit";
import Search from "./search";

function Home() {
  const [classChanger, setClassChanger] = useState("");
  const user = useSelector((state) => state.isLoggedIn);
  const router = useRouter();

  async function verifyUser() {
    if (user)
      return setTimeout(() => {
        Router.push("/login");
      }, 2000);

    return user;
  }

  useEffect(() => {
    verifyUser();
  }, [user]);

  if (user) return <h1>Redirecting to Dashboard......</h1>;

  return (
    <main>
      <Form setClassChanger={setClassChanger} />
      <p>
        If you need professional help from our experts please do not hesitate to
        sign up.
      </p>
      <Submit classChanger={classChanger} />
    </main>
  );
}

export default Home;
