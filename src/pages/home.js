import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Layout from "@/components/Layout/Layout";
import React from "react";


const HomePage = () => {
  return (
    <Layout>
    <Hero />
    <Services />
    </Layout>
  );
};

export default HomePage;
