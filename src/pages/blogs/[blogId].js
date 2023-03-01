import BlogDetails from "@/components/Blogs/BlogDetails";
import ProjectDetail from "@/components/portfolio/ProjectDetail";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import blog1 from "../../assets/blogs/image6.png"
import blog2 from "../../assets/blogs/image7.png"
import img1 from "../../assets/blogs/blog-img-1.png"
import img2 from "../../assets/blogs/blog-img-2.png"

const DATA = [
    {
      id: "b1",
      img: blog2,
      blogImage: img2,
      content: "Developer Velocity: How software excellence fuels business performance",
      date: "April 20, 2020"
    },
    {
      id: "b2",
      img: blog1,
      blogImage: img1,
      content: "Seven lessons on how technology transformations can deliver value",
      date: "March 11, 2021"
    },
 
  ];

const Post = () => {
  const router = useRouter();
  const { blogId } = router.query;
  console.log(blogId)
  const [project, setProject] = useState([]);

 

  useEffect(() => {
    setProject(DATA.filter((data) => data.id === blogId));
  }, [blogId]);

  return <BlogDetails id={blogId} DATA={project} />;
};

export default Post;
