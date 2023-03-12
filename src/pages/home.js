import React, { useEffect, useState } from "react";

import WhyUs from "@/components/Home/WhyUs";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Layout from "@/components/Layout/Layout";
import OurWorks from "@/components/Home/OurWorks";
import Partnership from "@/components/Home/Partnership";
import Blogs from "@/components/Home/Blogs";

import bgImage from "../assets/services/bg.png";
import ourWorkImage from "../assets/ourwork/design.png";

import {
  fetchBlogs,
  fetchCategories,
  fetchPartners,
  fetchPortfolios,
  fetchServices,
} from "api";

const HomePage = () => {
  const [services, setServices] = useState([]);
  const [partners, setPartners] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let servicesResponse = await fetchServices();
      setServices(servicesResponse?.data?.data);
      let partnersResponse = await fetchPartners();
      setPartners(partnersResponse?.data?.data);
      let blogsResponse = await fetchBlogs();
      setBlogs(blogsResponse?.data?.data);
      let categoriesResponse = await fetchCategories();
      setCategories(categoriesResponse?.data?.data);
      let portfoliosResponse = await fetchPortfolios();
      setPortfolios(portfoliosResponse?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Hero />
      <Services services={services} name="Digital Services" image={bgImage} />
      <WhyUs />
      <OurWorks
        image={ourWorkImage}
        categories={categories}
        portfolios={portfolios}
      />
      <Partnership partners={partners} />
      <Blogs blogs={blogs} />
    </Layout>
  );
};

export default HomePage;
