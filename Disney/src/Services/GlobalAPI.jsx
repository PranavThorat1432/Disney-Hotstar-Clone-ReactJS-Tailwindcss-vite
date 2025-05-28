import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "41d8a5c44be9382388a39f05ecddefaf";

const getTrendingVideos = () => {
  return axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
};

export default {
  getTrendingVideos
};
