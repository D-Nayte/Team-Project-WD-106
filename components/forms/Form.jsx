import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { logInUser } from "../../auth/userAccess";

function Forms({ setClassChanger }) {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    const user = await logInUser(email, password);
    router.push("/login");
  }

  return (
    <div className="log-in">
      <form onSubmit={handleSubmit}>
        <label>Enter your Email</label>
        <input
          type="email"
          ref={emailRef}
          name="email"
          placeholder="Enter your Email"></input>
        <label>Enter your Password</label>
        <input
          type="password"
          ref={passwordRef}
          placeholder="Enter your Password"></input>
        <button className="btn">Sign In</button>
        <p>
          No Account?{" "}
          <a href="#" onClick={() => setClassChanger("active")}>
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}

export default Forms;
