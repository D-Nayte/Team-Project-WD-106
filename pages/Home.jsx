import React, { useEffect, useState } from "react";
import Form from "../components/forms/Form";
import Submit from "../components/forms/Submit";

function Home() {
  const [classChanger, setClassChanger] = useState("");

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
