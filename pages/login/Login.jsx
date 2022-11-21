import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi";
import styles from "../../styles/login.module.css";
import AvatarPicture from "../../components/AvatarPicture";
import ProfileButton from "../../components/profileButtons";
import Search from "../../components/forms/Search";
import { useSelector } from "react-redux";

function Login() {
  const user = useSelector((state) => state.isLoggedIn);

  return (
    <div className={styles.loginPage}>
      <div className={styles.profile_card}>
        <div className={styles.profile_card_container}>
          <AvatarPicture />
          <div className={styles.documents_container}>
            <p>{user?.firstname ? user?.firstname : "No name found"}</p>
            <p>
              <BiMessageDetail className={styles.icons} /> 2 new Messages
            </p>
            <p>
              <HiOutlineDocumentText className={styles.icons} /> 1 new Document
            </p>
          </div>
        </div>
        <h3>Email: {user.email ? user.email : "no Email"}</h3>
      </div>
      <div className={styles.profileButtons}>
        <ProfileButton title="Messages" />
        <ProfileButton title="Documents" />
        <ProfileButton title="contacts" />
      </div>
      <h2 className={styles.welcome}>
        WE ARE READY TO HELP YOU. TELL US MORE ABOUT YOUR PROBLEM.
      </h2>
      <Search />
    </div>
  );
}

export default Login;
