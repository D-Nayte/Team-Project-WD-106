import React from "react";


function Search(){



  return(

    <div>

      <form className="search-form">
      <label for="name">Select Category</label>
      <select name="category" id="category">
      <option value="select">Select Category</option>
      <option value="Working Union">Working Union</option>
      <option value="Lawyers">Lawyers</option>
      </select>

      <label for="name">Select Subcategory</label>
      <select name="category" id="category">
      <option value="select">Select Subcategory</option>
      <option value="Working Union">Working Union</option>
      <option value="Lawyers">Lawyers</option>
      </select>

      <label for="text">Enter your Postcode</label>
      <input type="text" placeholder="Enter your Postcode"></input>

      <button className="btn">Search</button>
      </form>
    </div>
  )
}

export default Search;