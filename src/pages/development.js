import Services from "@/components/Home/Services";
import Layout from "@/components/Layout/Layout";
import React from "react";
import service2 from "../assets/services/service2.png";
import service3 from "../assets/services/service5.png";
import bgImage from "../assets/services/bg2.png";
import styles from "../styles/Blogs.module.css";

const SERVICES = [
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
];
const development = () => {
  return (
    <Layout>
      <Services
        services={SERVICES}
        name="Development"
        image={bgImage}
        className="top-[150px]"
        padding="pb-[470px]"
      />
    </Layout>
  );
};

export default development;
