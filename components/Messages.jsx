import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/messages.module.css";
import { TbMessage } from "react-icons/tb";

function Messages({ showMessages, setShowMessages }) {
  if (!showMessages) return;
  const messageList = useSelector((state) => state.messages);
  const [message, setMessage] = useState(null);
  let counter = 0;

  useEffect(() => {
    if (messageList) {
      setMessage(messageList[0]);
    }
  }, [messageList]);

  function getDate(message) {
    if (message) {
      const seconds = message.message.timestamp.seconds;
      const date = new Date(seconds * 1000);
      const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
      };
      const dateString = date.toLocaleDateString("en-us", options);
      return dateString;
    }
  }

  if (!message) return <h1>Loading....</h1>;

  return (
    <section className={styles.overview}>
      <button
        onClick={() => setShowMessages(false)}
        className={styles.overview_button}>
        X
      </button>
      <div className={styles.message_container}>
        {messageList.map((message) => {
          counter += 1;
          return (
            <button
              key={counter}
              className={styles.icon_container}
              data-msg={message && message.message.message}>
              <i>
                <TbMessage />
              </i>
              <h3>{message && message.id}</h3>
              <h3>{getDate(message)}</h3>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default Messages;
