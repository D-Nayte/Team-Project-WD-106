import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Search() {
  const unionsData = useSelector((storage) => storage.companyData.unions);
  const lawyersData = useSelector((storage) => storage.companyData.lawyers);

  function getAllLawyerProblems() {
    if (lawyersData) {
      const problemsList = lawyersData.map((lawyer) => {
        return lawyer.problems;
      });

      console.log(problemsList[0]);
    }
  }

  useEffect(() => {
    getAllLawyerProblems();
  }, [lawyersData, unionsData]);

  return (
    <div>
      <form className="search-form">
        <label>Select Category</label>
        <select name="category" id="category">
          <option value="select">Select Buisness</option>
        </select>

        <label>Select Subcategory</label>
        <select name="category" id="category">
          <option value="select">Select Problem</option>
          <option value="Working Union">Working Union</option>
          <option value="Lawyers">Lawyers</option>
        </select>

        <label>Enter your Postcode</label>
        <input type="text" placeholder="Enter your Postcode"></input>

        <button className="btn">Search</button>
      </form>
    </div>
  );
}

export default Search;
