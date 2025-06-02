import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "41d8a5c44be9382388a39f05ecddefaf";

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=41d8a5c44be9382388a39f05ecddefaf';

const getTrendingVideos = () => {
  return axios.get(`${movieBaseUrl}/trending/movie/week?api_key=${api_key}`);
};
const getMovieByGenreId = (id) => axios.get(movieByGenreBaseURL + "&with_genres=" + id)

export default {
  getTrendingVideos,
  getMovieByGenreId
};

