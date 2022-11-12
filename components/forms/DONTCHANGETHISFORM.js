import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createUser, logInUser, logOut } from "../../auth/userAccess";

//------------------------------------------

//This ist just a example file and for help

//------------------------------------------

function TestForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const user = useSelector((state) => state.isLoggedIn);

  async function handleSubmit(event) {
    event.preventDefault();
    await createUser(email, password);
  }

  const companyData = useSelector((state) => state.companyData);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="email"
          value={email}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          value={password}
        />
        <button>Send</button>
      </form>
    </div>
  );
}

export default TestForm;
