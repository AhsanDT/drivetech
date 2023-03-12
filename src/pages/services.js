import React, { useEffect, useState } from "react";

import Services from "@/components/Home/Services";
import Layout from "@/components/Layout/Layout";

import bgImage from "../assets/services/bg3.png";

import { fetchServices } from "api";

const services = () => {
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
    <Layout>
      <Services services={services} image={bgImage} name="Services" />
    </Layout>
  );
};

export default services;
