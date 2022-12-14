import React, { useRef } from "react";
import { createUser } from "../../auth/userAccess";
import noAvatarPicture from "../../assets/images/avatars/noAvatar.png";
import { useRouter } from "next/router";

function Submit({ classChanger, setClassChanger }) {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmedPasswordRef = useRef("");
  const pictureRef = useRef("");
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  let vaildPicture = false;
  const router = useRouter();

  function handleFile(e) {
    const file = e.files[0];
    if (file) {
      const type = file?.name.slice(-4);
      console.log(type == (".png" || ".jpg" || ".svg"));
      if (type == ".png" || type == ".jpg" || type == ".svg") {
        return (vaildPicture = file);
      }
      alert("only .png / .jpg / .svg");
      return (vaildPicture = "wrong type");
    }
    return (vaildPicture = false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const confirmedPassword = confirmedPasswordRef.current.value;
    const avatar = handleFile(pictureRef.current);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    if (avatar === "wrong type") return alert("only .png / .jpg / .svg");

    if (confirmedPassword !== password) {
      return alert("Password does not match");
    }

    const user = await createUser(firstName, lastName, email, password, avatar);
    if (user.noUser) return console.log(user.error);

    router.push("/login");
  }

  return (
    <div className={`submit-form ${classChanger}`}>
      <div>
        <h2 onClick={() => setClassChanger("")}>X</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstname">Firstname</label>
          <input
            ref={firstNameRef}
            type="text"
            placeholder="Firstname"
            required
          />
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            ref={lastNameRef}
            placeholder="Lastname"
            required
          />

          <label>Enter your Email</label>
          <input
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
          />

          <label>Enter your Password</label>
          <input
            type="password"
            ref={passwordRef}
            placeholder="Enter your Password"
            minLength="6"
            required
          />

          <label>Confirm your Password</label>
          <input
            type="password"
            ref={confirmedPasswordRef}
            placeholder="Confirm your Password"
            minLength="6"
            required
          />

          <label>Avatar Image</label>
          <input
            type="file"
            ref={pictureRef}
            onChange={(e) => handleFile(e.target)}
          />
          <button className="btn submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Submit;
