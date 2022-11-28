import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import SearchResults from "../SearchResults";

function Search({ setShowResults, setFilteredLawyers, setFilteredUnion }) {
  const unionsData = useSelector((storage) => storage.companyData.unions);
  const lawyersData = useSelector((storage) => storage.companyData.lawyers);
  const data = useSelector((state) => state.showData);

  const [lawyerProblems, setLawyerProblems] = useState([]);
  const [unionsBuisness, setUnionsBuisness] = useState([]);
  const [cityList, setCItyList] = useState(new Set());

  function getAllLawyerProblems() {
    const lawyersProblemsList = new Set();
    if (lawyersData) {
      lawyersData.forEach((lawyer) => {
        // setCItyList((old) => old.add(lawyer.location.toLowerCase()));
        return lawyer.problems.forEach((problem) =>
          lawyersProblemsList.add(problem)
        );
      });
      setLawyerProblems((old) => [...lawyersProblemsList].sort());
    }
  }

  function getAllUnionsBuisness() {
    const unionsBuisnessList = new Set();

    if (unionsData) {
      unionsData.forEach((union) => {
        setCItyList((old) => old.add(union.location.toLowerCase()));
        return union.buisnesss.forEach((buisness) =>
          unionsBuisnessList.add(buisness)
        );
      });
      setUnionsBuisness((old) => [...unionsBuisnessList].sort());
    }
  }

  function searchUnions(selectedBuisness) {
    if (selectedBuisness === "none")
      return setFilteredUnion((old) => (old = []));

    const result = unionsData.filter((union) =>
      union.buisnesss.find((buisness) => buisness === selectedBuisness)
    );
    setFilteredUnion((old) => (old = result));
  }

  function searchLawyers(selectedProblems) {
    if (selectedProblems === "none")
      return setFilteredLawyers((old) => (old = []));

    const result = lawyersData.filter((lawyer) =>
      lawyer.problems.find((problem) => problem === selectedProblems)
    );
    setFilteredLawyers((old) => (old = result));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (data === "unions") {
      setFilteredUnion((old) => (old = unionsData));
      setFilteredLawyers((old) => (old = []));
    }
    if (data === "lawyers") {
      setFilteredLawyers((old) => (old = unionsData));
      setFilteredUnion((old) => (old = []));
    }
    setShowResults(true);
  }

  useEffect(() => {
    if (data) {
      if (data === "unions") {
        setFilteredUnion((old) => (old = unionsData));
        setFilteredLawyers((old) => (old = []));
      }
      if (data === "lawyers") {
        setFilteredLawyers((old) => (old = lawyersData));
        setFilteredUnion((old) => (old = []));
      }
      setShowResults(true);
    } else {
      setFilteredUnion((old) => (old = []));
      setFilteredLawyers((old) => (old = []));
    }
  }, [data]);

  useEffect(() => {
    getAllLawyerProblems();
    getAllUnionsBuisness();
  }, [lawyersData, unionsData]);

  return (
    <div className="search-form-wrapper">
      <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
        <label>Select your Buisness</label>
        <select
          onChange={(e) => searchUnions(e.target.value)}
          defaultValue="empty">
          <option value="empty" disabled>
            Select your Buisness
          </option>
          <option value="none">None</option>
          {unionsBuisness.map((buisness) => (
            <option key={buisness} value={buisness}>
              {buisness}
            </option>
          ))}
        </select>

        <label>Select your Problem</label>
        <select
          onChange={(e) => searchLawyers(e.target.value)}
          defaultValue="empty">
          <option value="empty" disabled>
            Select your Problem
          </option>
          <option value="none">None</option>

          {lawyerProblems.map((problem) => (
            <option key={problem} value={problem}>
              {problem}
            </option>
          ))}
        </select>

        <label>Select your City</label>
        <select defaultValue="empty">
          <option value="empty" disabled>
            Select your City
          </option>
          {[...cityList].sort().map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <button className="btn">Search</button>
      </form>
    </div>
  );
}

export default Search;
