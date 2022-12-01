import { getDownloadURL, getMetadata, listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { storage } from "../auth/fireBase";
import styles from "../styles/documents.module.css";
import { GrDocumentPdf } from "react-icons/gr";

function Documents({ showDocuments, setShowDocuments }) {
  const [documents, setDocuments] = useState(null);
  let counter = 0;

  async function getDocuments() {
    try {
      const contracts = ref(storage, `contracts`);
      const list = await listAll(contracts);
      const documents = Promise.all(
        list.items.map(async (itemRef) => {
          const meta = await getMetadata(itemRef);
          const url = await getDownloadURL(itemRef);
          return { url: url, meta: meta.name };
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

  if (!documents) return <h2>Loading....</h2>;

  return (
    <div
      className={`  ${styles.documents_container} ${
        showDocuments ? styles.show : styles.hide
      }`}>
      <div className={styles.docs_container}>
        {documents &&
          documents.map((doc) => {
            counter += 1;
            return (
              <p key={counter}>
                <span className={styles.doc_svg}>
                  <GrDocumentPdf />
                </span>
                <a href={doc.url}>{doc.meta}</a>
              </p>
            );
          })}
      </div>
      <button
        onClick={() => setShowDocuments(false)}
        className={`${styles.doc_button}  btn`}>
        CLOSE
      </button>
    </div>
  );
}

export default Documents;
