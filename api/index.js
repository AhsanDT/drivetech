import axios from "axios";
const baseURL = "https://possible-probable-crown.strapiapp.com/api";

axios.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`;

  return config;
});

export const fetchServices = () => {
  return axios.get(`${baseURL}/services?populate=*`);
};

export const fetchDevelopments = () => {
  return axios.get(`${baseURL}/developments?populate=*`);
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

export const fetchCategories = () => {
  return axios.get(`${baseURL}/categories`);
};

export const fetchPortfolios = (filter, search) => {
  if (search) {
    return axios.get(
      `${baseURL}/portfolios?filters[title][$containsi]=${search}&populate=*`
    );
  } else if (filter === "all") {
    return axios.get(`${baseURL}/portfolios?populate=*`);
  } else {
    return axios.get(
      `${baseURL}/portfolios?filters[category][id][$eq]=${filter}&populate=*`
    );
  }
};

export const fetchPortfolioById = (id) => {
  return axios.get(`${baseURL}/portfolios/${id}`);
};
