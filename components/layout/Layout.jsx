import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

function Layout({ children }) {
  return (
    <div className="APP">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
