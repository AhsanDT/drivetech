import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import BlogDetails from "@/components/Blogs/BlogDetails";

import { fetchBlogBySlug, updateBlog } from "api";

const Post = () => {
  const router = useRouter();
  const { blogId } = router.query;
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    if (blogId) {
      getData();
    }
  }, [blogId]);

  const getData = async () => {
    try {
      let blogResponse = await fetchBlogBySlug(blogId);
      if (blogResponse?.data?.data?.length) {
        await updateBlog(blogResponse?.data?.data[0]?.id, {
          data: {
            count: +blogResponse?.data?.data[0]?.attributes?.count + 1,
          },
        });
        setBlog(blogResponse?.data?.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <BlogDetails blog={blog} />;
};

export default Post;
