import { useEffect, useState } from "react";

import OurWorks from "@/components/Home/OurWorks";
import Layout from "@/components/Layout/Layout";

import image from "../assets/ourwork/design2.png";

import { fetchCategories, fetchPortfolios } from "api";

const portfolio = () => {
  const [categories, setCategories] = useState([]);
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
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
      <OurWorks image={image} categories={categories} portfolios={portfolios} />
    </Layout>
  );
};

export default portfolio;
