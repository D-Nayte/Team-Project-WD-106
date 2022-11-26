import React from "react";
import styles from "../styles/search.module.css";
import UnionsCrad from "./UnionsCrad";
import LawyerCard from "./LawyerCard";
import { useDispatch, useSelector } from "react-redux";
import { deleteShowData } from "../context/actions/signInUser";

function SearchResults({
  filteredLawyers,
  filteredUnions,
  showResults,
  setShowResults,
}) {
  const dispatch = useDispatch();

  function changeVisibility() {
    setShowResults(false);
    dispatch(deleteShowData());
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
            <div key={union.companyName + union.location}>
              <UnionsCrad union={union} />
            </div>
          ))
        : null}
      {filteredLawyers.length >= 1
        ? filteredLawyers.map((lawyer) => (
            <div key={lawyer.firstName + lawyer.email}>
              <LawyerCard lawyer={lawyer} />
            </div>
          ))
        : null}
      <button onClick={() => changeVisibility()} className="btn">
        close
      </button>
    </div>
  );
}

export default SearchResults;
