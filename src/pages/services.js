import Services from '@/components/Home/Services'
import Layout from '@/components/Layout/Layout'
import React from 'react'
import service1 from "../assets/services/service1.png";
import service4 from "../assets/services/service3.png";
import bgImage from "../assets/services/bg2.png"
import Idea from '@/components/Home/Idea';
import styles from "../styles/Blogs.module.css"


const SERVICES = [
    {
      id: "s1",
      serviceName: "Digital Marketing Services",
      content:
        "Digital marketing involves some of the same principles as traditional marketing and is often considered a new way for companies to approach consumers and understand their behavior.",
      img: service1,
    },

  
    {
      id: "s4",
      serviceName: "Back Office Services",
      content:
        "We identify your brand by developing a logo, corporate identity, user manuals, any mockups, and souvenir products. Whatever it takes to get your brand noticed.",
      img: service4,
    },
  ];
const services = () => {
  return (
    <Layout>
        <Services services={SERVICES} image={bgImage} name="Services" className="top-[150px]" padding="pb-[360px] md:pb-[470px]"/>
    </Layout>
  )
}

export default services