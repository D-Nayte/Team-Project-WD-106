import React from "react";
import styles from "../styles/profileButton.module.css";

function ProfileButton({ title, showContent }) {
  return (
    <>
      <button
        onClick={() => showContent && showContent(true)}
        className={styles.button}>
        {title ? title : "no title!"}
      </button>
    </>
  );
}

export default ProfileButton;
