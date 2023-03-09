import Blogs from '@/components/Blogs/Blogs'
import Layout from '@/components/Layout/Layout'
import React from 'react'
import blog1 from "../assets/blogs/image6.png"
import blog2 from "../assets/blogs/image7.png"

const BLOGS = [
    {
      id: "b1",
      img: blog2,
      content: "Developer Velocity: How software excellence fuels business performance",
      date: "April 20, 2020"
    },
    {
      id: "b2",
      img: blog1,
      content: "Seven lessons on how technology transformations can deliver value",
      date: "March 11, 2021"
    },
 
  ];

const blogs = () => {

  return (
    <Layout>
        <Blogs BLOGS={BLOGS} />
    </Layout>
  )
}

export default blogs