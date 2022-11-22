import React from "react";
import styles from "../styles/profileButton.module.css";

function ProfileButton({ title, setShowDocuments }) {
  return (
    <>
      <button
        onClick={() => setShowDocuments && setShowDocuments(true)}
        className={styles.button}>
        {title ? title : "no title!"}
      </button>
    </>
  );
}

export default ProfileButton;
