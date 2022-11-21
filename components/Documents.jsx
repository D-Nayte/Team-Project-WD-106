import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { storage } from "../auth/fireBase";
import styles from "../styles/documents.module.css";

function Documents({ addClass }) {
  const [documents, setDocuments] = useState(null);
  const [show, setshow] = useState(false);

  async function getDocuments() {
    try {
      const contracts = ref(storage, `contracts`);
      const list = await listAll(contracts);
      const documents = Promise.all(
        list.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return url;
        })
      );
      setDocuments(await documents);
      return;
    } catch (error) {
      console.log("Unable to fetch documents: ");
    }
  }
  function changeShowClass() {
    setshow((state) => !state);
  }

  useEffect(() => {
    (async () => {
      await getDocuments();
    })();
  }, []);

  return (
    <div
      className={`${addClass}  ${styles.documents_container} ${
        show ? styles.show : styles.hide
      }`}>
      {console.log(documents)}
      {documents && documents.map((doc) => <object data={doc}></object>)}
      <button onClick={changeShowClass} className="btn">
        CLOSE
      </button>
    </div>
  );
}

export default Documents;
