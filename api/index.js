import axios from "axios";
const baseURL = "http://localhost:1337/api";

axios.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`;

  return config;
});

export const fetchServices = () => {
  return axios.get(`${baseURL}/services?populate=*`);
};

export const fetchPartners = () => {
  return axios.get(`${baseURL}/partners`);
};

export const fetchPartnersWithFilter = (type) => {
  return axios.get(`${baseURL}/partners?filters[type][$eq]=${type}`);
};

export const fetchBlogs = () => {
  return axios.get(`${baseURL}/blogs?populate=*`);
};

export const fetchBlogBySlug = (slug) => {
  return axios.get(`${baseURL}/blogs?filters[slug][$eq]=${slug}&populate=*`);
};

export const updateBlog = (id, data) => {
  return axios.put(`${baseURL}/blogs/${id}`, data);
};
