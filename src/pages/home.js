import WhyUs from "@/components/Home/WhyUs";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Layout from "@/components/Layout/Layout";
import React from "react";
import OurWorks from "@/components/Home/OurWorks";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <WhyUs />
      <OurWorks />
    </Layout>
  );
};

export default HomePage;
