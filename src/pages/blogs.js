import React, { useEffect, useState } from "react";

import Blogs from "@/components/Blogs/Blogs";
import Layout from "@/components/Layout/Layout";

import { fetchBlogs } from "api";


const blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let blogsResponse = await fetchBlogs();
      setBlogs(blogsResponse?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Blogs blogs={blogs} />
    </Layout>
  );
};

export default blogs;
