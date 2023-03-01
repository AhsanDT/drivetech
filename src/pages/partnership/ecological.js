import Partnership from '@/components/Home/Partnership';
import Layout from '@/components/Layout/Layout';
import React from 'react'
import image from "../../assets/partnership/img.png";

const PARTNERSHIP = [
    { id: "d1", img: image, name: " Partner Name" },
    { id: "d2", img: image, name: "Partner Name" },
    { id: "d3", img: image, name: "The Project Title" },
    { id: "d4", img: image, name: "The Project Title" },
    { id: "d5", img: image, name: "The Project Title" },
    { id: "d6", img: image, name: "The Project Title" },
    { id: "d7", img: image, name: "The Project Title" },
    { id: "d8", img: image, name: "The Project Title" },
    { id: "d9", img: image, name: "The Project Title" },
    { id: "d10", img: image, name: "The Project Title" },
    { id: "d11", img: image, name: "The Project Title" },
    { id: "d12", img: image, name: "The Project Title" },
  ];

const ecological = () => {
  return (
    <Layout>
        <Partnership DATA={PARTNERSHIP} className="py-[100px]" />
    </Layout>
  )
}

export default ecological