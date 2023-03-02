import WhyUs from "@/components/Home/WhyUs";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Layout from "@/components/Layout/Layout";
import React from "react";
import OurWorks from "@/components/Home/OurWorks";
import Partnership from "@/components/Home/Partnership";
import Blogs from "@/components/Home/Blogs";
import service1 from "../assets/services/service1.png";
import service2 from "../assets/services/service2.png";
import service3 from "../assets/services/service4.png";
import service4 from "../assets/services/service3.png";
import bgImage from "../assets/bg-images/service.png";
import image from "../assets/partnership/img.png";



const SERVICES = [
    {
      id: "s1",
      serviceName: "Digital Marketing Services",
      content:
        "Digital marketing involves some of the same principles as traditional marketing and is often considered a new way for companies to approach consumers and understand their behavior.",
      img: service1,
    },
    {
      id: "s2",
      serviceName: "Mobile & Web Applications",
      content:
        "In our team, developers work alongside designers. This is crucial in creating a fast and responsive website that would excite the audience. We help you create your dream application that will drive users to using them by intensive research among your target audience and award-winning user interfaces.",
      img: service2,
    },
    {
      id: "s3",
      serviceName: "AI & Machine Learning Development",
      content:
        "Artificial Intelligence(AI) & Machine Learning(ML) Solutions. Build Intelligent Business Empower With Our AI & Machine Learning Services. ai and ml development.",
      img: service3,
    },
  
    {
      id: "s4",
      serviceName: "Back Office Services",
      content:
        "We identify your brand by developing a logo, corporate identity, user manuals, any mockups, and souvenir products. Whatever it takes to get your brand noticed.",
      img: service4,
    },
  ];

  const PARTNERSHIP = [
    { id: "d1", img: image, name: "Core Partner Name" },
    { id: "d2", img: image, name: "Core Partner Name" },
    { id: "d3", img: image, name: "The Project Title" },
  ];

const HomePage = () => {

  return (
    <Layout>
       <Hero />
      <Services services={SERVICES} name="Digital Services" image={bgImage}/>  
       <WhyUs />
       <OurWorks />
       <Partnership DATA={PARTNERSHIP} />
      <Blogs /> 
    </Layout>
  );
};

export default HomePage;
