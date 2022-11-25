import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import SearchResults from "../SearchResults";

function Search() {
  const unionsData = useSelector((storage) => storage.companyData.unions);
  const lawyersData = useSelector((storage) => storage.companyData.lawyers);
  const [lawyerProblems, setLawyerProblems] = useState([]);
  const [unionsBuisness, setUnionsBuisness] = useState([]);
  const [cityList, setCItyList] = useState(new Set());
  const [showResults, setShowResults] = useState(false);
  const [filteredData, setFilteredData] = useState({});
  let filteredUnions = [];
  let filteredLawyers = [];

  function getAllLawyerProblems() {
    const lawyersProblemsList = new Set();
    if (lawyersData) {
      lawyersData.forEach((lawyer) => {
        setCItyList((old) => old.add(lawyer.location.toLowerCase()));
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
    filteredUnions = [];

    const result = unionsData.filter((union) =>
      union.buisnesss.find((buisness) => buisness === selectedBuisness)
    );
    filteredUnions.push(...result);
    updateSearchState();
  }

  function searchLawyers(selectedProblems) {
    filteredLawyers = [];

    const result = lawyersData.filter((lawyer) =>
      lawyer.problems.find((problem) => problem === selectedProblems)
    );
    filteredLawyers.push(...result);
    updateSearchState();
  }

  function handleSubmit(event) {
    event.preventDefault();
    setShowResults(true);
  }

  function updateSearchState() {
    setFilteredData(
      (old) =>
        (old = {
          lawyerList: [...filteredLawyers],
          unionList: [...filteredUnions],
        })
    );
  }

  const test = { test: 1, test: 2 };

  useEffect(() => {
    getAllLawyerProblems();
    getAllUnionsBuisness();
  }, [lawyersData, unionsData]);

  return (
    <div>
      <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
        <label>Select your Buisness</label>
        <select
          onChange={(e) => searchUnions(e.target.value)}
          defaultValue="empty">
          <option value="empty" disabled>
            Select your Buisness
          </option>
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
      <SearchResults
        setShowResults={setShowResults}
        showResults={showResults}
        lists={filteredData}
      />
    </div>
  );
}

export default Search;
