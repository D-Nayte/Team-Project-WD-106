import React, { useEffect, useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi";
import styles from "../../styles/login.module.css";
import AvatarPicture from "../../components/AvatarPicture";
import Documents from "../../components/Documents";
import ProfileButton from "../../components/ProfileButtons";
import Search from "../../components/forms/Search";
import { useSelector } from "react-redux";
import { database } from "../../auth/fireBase";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import Messages from "../../components/Messages";
import SearchResults from "../../components/SearchResults";

function Login() {
  const data = useSelector((state) => state.showData);
  const user = useSelector((state) => state.isLoggedIn);
  const [userName, setUserName] = useState("no Name Found");
  const [loading, setLoading] = useState(true);
  const [noUser, setNoUser] = useState(true);
  const [showDocuments, setShowDocuments] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  const [showResults, setShowResults] = useState(false);
  const [filteredLawyers, setFilteredLawyers] = useState({});
  const [filteredUnions, setFilteredUnion] = useState({});

  async function getUserName() {
    if (user) {
      const id = user.uid;
      const docRef = doc(database, "user-data", id);
      const docSnap = await getDoc(docRef);
      if (docSnap) {
        setUserName(`${docSnap.data()?.firstName} ${docSnap.data()?.lastName}`);
        docSnap;
      }
      setNoUser(user);
    }
    setLoading(false);
  }

  useEffect(() => {
    getUserName();
  }, [user]);

  if (loading) return "loading....";
  if (!noUser || !user) {
    return (
      <h1>
        You must be logged in!! <Link href="/">go back</Link>
      </h1>
    );
  }

  return (
    <main className={styles.overview}>
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
        <h3 className={styles.email}>
          Email: {user?.email ? user?.email : "no Email"}
        </h3>
      </div>
      <div className={styles.profileButtons}>
        <ProfileButton showContent={setShowMessages} title="Messages" />
        <ProfileButton showContent={setShowDocuments} title="Documents" />
        <ProfileButton title="contacts" />
      </div>
      <h2 className={styles.welcome}>
        WE ARE READY TO HELP YOU. TELL US MORE ABOUT YOUR PROBLEM.
      </h2>
      <Search
        setShowResults={setShowResults}
        setFilteredLawyers={setFilteredLawyers}
        setFilteredUnion={setFilteredUnion}
      />
      <Documents
        showDocuments={showDocuments}
        setShowDocuments={setShowDocuments}
      />
      <Messages showMessages={showMessages} setShowMessages={setShowMessages} />
      <SearchResults
        setShowResults={setShowResults}
        showResults={showResults}
        filteredLawyers={filteredLawyers}
        filteredUnions={filteredUnions}
      />
    </main>
  );
}

export default Login;
