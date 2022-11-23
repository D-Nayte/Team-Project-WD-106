import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import background from "../../assets/images/background.svg";

function Layout({ children }) {
  return (
    <div className="APP">
      <Navbar />
      {children}
      <Footer />
      <div className="app-background-container ">
        <img src={background.src} alt="backgroundpicture" />
      </div>
    </div>
  );
}

export default Layout;
