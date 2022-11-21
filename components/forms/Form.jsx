import React, { useState } from "react";

function Forms() {
  return (
    <div className="log-in">
      <form>
        <label>Enter your Email</label>
        <input type="email" name="email" placeholder="Enter your Email"></input>
        <label>Enter your Password</label>
        <input type="password" placeholder="Enter your Password"></input>
        <button className="btn">Sign In</button>
        <p>
          No Account? <a href="#">Sign Up</a>
        </p>
      </form>
    </div>
  );
}

export default Forms;
