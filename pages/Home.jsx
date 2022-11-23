import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Form from "../components/forms/Form";
import Submit from "../components/forms/Submit";
import Search from "./search";
import styles from "../styles/homePage.module.css";
import background from "../assets/images/groupPicture-blue.jpg";

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
    <main className={styles.main}>
      <h2>Worker Rights</h2>

      <img
        className={styles.background}
        src={background.src}
        alt="background, group of people"
      />
      <h2>
        If you need professional help from our experts please do not hesitate to
        sign up.
      </h2>
      <Form className={styles.form} setClassChanger={setClassChanger} />
      <Submit classChanger={classChanger} setClassChanger={setClassChanger} />
    </main>
  );
}

export default Home;
