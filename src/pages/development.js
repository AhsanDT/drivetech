import React, { useEffect, useState } from "react";

import Services from "@/components/Home/Services";
import Layout from "@/components/Layout/Layout";

import bgImage from "../assets/services/bg.png";

import { fetchDevelopments } from "api";

const development = () => {
  const [developments, setDevelopments] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let developmentsResponse = await fetchDevelopments();
      setDevelopments(developmentsResponse?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Services services={developments} name="Development" image={bgImage} />
    </Layout>
  );
};

export default development;
