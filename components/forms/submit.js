import React from "react";


function Submit(){

  return(

    <div>
      <form>
         <label for="email">Enter your Email</label>
        <input type="email" name="email" placeholder="Enter your Email"></input>

        <label for="password">Enter your Password</label>
        <input type="password" placeholder="Enter your Password"></input>

        <label for="confirmed password">Confirm your Password</label>
        <input type="password" placeholder="Confirm your Password"></input>

        <label for="text">Avatar Image</label>
        <input type="file"></input>
        <button className="submit-btn">Submit</button>

      </form>
    </div>
  )
}

export default Submit;