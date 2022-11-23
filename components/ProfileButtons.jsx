import React from "react";
import styles from "../styles/profileButton.module.css";

function ProfileButton({ title }) {
  return (
    <>
      <button className={styles.button}>{title ? title : "no title!"}</button>
    </>
  );
}

export default ProfileButton;
