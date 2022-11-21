import React, { useEffect, useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi";
import styles from "../../styles/login.module.css";
import AvatarPicture from "../../components/AvatarPicture";
import ProfileButton from "../../components/profileButtons";
import Search from "../../components/forms/Search";
import { useSelector } from "react-redux";
import { database } from "../../auth/fireBase";
import { doc, getDoc } from "firebase/firestore";

function Login() {
  const user = useSelector((state) => state.isLoggedIn);
  const [userName, setUserName] = useState("no Name Found");

  async function getUserName() {
    console.log(user);
    if (user) {
      const id = user.uid;
      const docRef = doc(database, "user-data", id);
      const docSnap = await getDoc(docRef);
      if (docSnap) {
        console.log(docSnap.data());
        setUserName(`${docSnap.data()?.firstName} ${docSnap.data()?.lastName}`);
        return docSnap;
      }
    }
  }

  useEffect(() => {
    getUserName();
  }, [user]);

  return (
    <div className={styles.loginPage}>
      <div className={styles.profile_card}>
        <div className={styles.profile_card_container}>
          <AvatarPicture />
          <div className={styles.documents_container}>
            <p>{userName && userName}</p>
            <p>
              <BiMessageDetail className={styles.icons} /> 2 new Messages
            </p>
            <p>
              <HiOutlineDocumentText className={styles.icons} /> 1 new Document
            </p>
          </div>
        </div>
        <h3>Email: {user?.email ? user?.email : "no Email"}</h3>
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
