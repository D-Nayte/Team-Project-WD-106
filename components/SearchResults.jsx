import React from "react";
import styles from "../styles/search.module.css";
import UnionsCrad from "./UnionsCrad";
import LawyerCard from "./LawyerCard";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function SearchResults({ lists, showResults, setShowResults }) {
  const user = useSelector((state) => state.isLoggedIn);
  const router = useRouter();
  const { lawyerList, unionList } = lists && lists;
  if (!user) return redirectUser();

  function redirectUser() {
    setTimeout(() => {
      router.push("/");
    }, 2000);
    return <h1>You must be logged in!</h1>;
  }

  if (!showResults || (!lawyerList && !unionList)) return null;

  if (lawyerList.lenght < 1 && unionList < 1)
    return (
      <div className={styles.container}>
        <h1>NO RESULTS</h1>
      </div>
    );

  return (
    <div className={styles.container}>
      <h1>Search results</h1>
      {unionList &&
        unionList.map((union) => (
          <div key={union.companyName}>
            <UnionsCrad union={union} />
          </div>
        ))}
      {lawyerList &&
        lawyerList.map((lawyer) => (
          <div key={lawyer.companyName}>
            <LawyerCard lawyer={lawyer} />
          </div>
        ))}
      <button onClick={() => setShowResults(false)} className="btn">
        close
      </button>
    </div>
  );
}

export default SearchResults;
