import React, { useEffect, useState } from "react";

import WhyUs from "@/components/Home/WhyUs";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Layout from "@/components/Layout/Layout";
import OurWorks from "@/components/Home/OurWorks";
import Partnership from "@/components/Home/Partnership";
import Blogs from "@/components/Home/Blogs";

import bgImage from "../assets/services/bg.png";
import image from "../assets/partnership/img.png";
import ourWorkImage from "../assets/ourwork/design.png";

import { fetchServices } from "api";

const PARTNERSHIP = [
  { id: "d1", img: image, name: "Core Partner Name" },
  { id: "d2", img: image, name: "Core Partner Name" },
  { id: "d3", img: image, name: "The Project Title" },
];

const HomePage = () => {
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
      <Hero />
      <Services services={services} name="Digital Services" image={bgImage} />
      <WhyUs />
      <OurWorks image={ourWorkImage} />
      <Partnership DATA={PARTNERSHIP} />
      <Blogs />
    </Layout>
  );
};

export default HomePage;
