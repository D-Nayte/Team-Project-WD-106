import React from "react";
import styles from "../styles/search.module.css";
import UnionsCrad from "./UnionsCrad";
import LawyerCard from "./LawyerCard";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function SearchResults({
  filteredLawyers,
  filteredUnions,
  showResults,
  setShowResults,
}) {
  const user = useSelector((state) => state.isLoggedIn);
  const router = useRouter();
  if (!user) return redirectUser();

  function redirectUser() {
    setTimeout(() => {
      router.push("/");
    }, 2000);
    return <h1>You must be logged in!</h1>;
  }

  if (!showResults || (!filteredLawyers && !filteredUnions)) return null;

  if (filteredLawyers.lenght < 1 && filteredUnions < 1)
    return (
      <div className={styles.container}>
        <h1>NO RESULTS</h1>
      </div>
    );

  return (
    <div className={styles.container}>
      <h1>Search results</h1>
      {filteredUnions.length >= 1
        ? filteredUnions.map((union) => (
            <div key={union.companyName}>
              <UnionsCrad union={union} />
            </div>
          ))
        : null}
      {filteredLawyers.length >= 1
        ? filteredLawyers.map((lawyer) => (
            <div key={lawyer.companyName}>
              <LawyerCard lawyer={lawyer} />
            </div>
          ))
        : null}
      <button onClick={() => setShowResults(false)} className="btn">
        close
      </button>
    </div>
  );
}

export default SearchResults;
