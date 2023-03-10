import React from "react";
import Idea from "../Home/Idea";
import Footer from "./Footer";
import Header from "./Header";


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Idea title="Achieve Your Goals Faster With Us" />

      <Footer />
    </>
  );
};

export default Layout;
