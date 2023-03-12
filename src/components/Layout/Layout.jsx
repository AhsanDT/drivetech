import React, { useEffect, useState } from "react";
import { fetchServices } from "../../../api";
import Idea from "../Home/Idea";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let servicesResponse = await fetchServices();
      setServices(servicesResponse?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header services={services} />
      {children}
      <Idea title="Achieve Your Goals Faster With Us" />

      <Footer />
    </>
  );
};

export default Layout;
