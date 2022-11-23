import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { storage } from "../auth/fireBase";
import styles from "../styles/documents.module.css";

function Documents({ showDocuments, setShowDocuments }) {
  const [documents, setDocuments] = useState(null);
  let counter = 0;
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
    console.log("DOCUMENTS RENDER!!!!");
  }, []);

  return (
    <div
      className={`  ${styles.documents_container} ${
        showDocuments ? styles.show : styles.hide
      }`}>
      {documents &&
        documents.map((doc) => {
          counter += 1;
          return <object key={counter} data={doc}></object>;
        })}
      <button onClick={() => setShowDocuments(false)} className="btn">
        CLOSE
      </button>
    </div>
  );
}

export default Documents;
