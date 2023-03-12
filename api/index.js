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
