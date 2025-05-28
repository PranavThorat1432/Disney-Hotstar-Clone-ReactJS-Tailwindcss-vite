import React, { useEffect } from 'react'
import GlobalAPI from '../Services/GlobalAPI'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';

function Slider() {
    const [movieList, setMovieList] = React.useState([]);
    useEffect(() => {
        getTrendingMovies();
    },[])

    const getTrendingMovies = () => {
        GlobalAPI.getTrendingVideos().then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        });
    }
  return (
    <div>
        {movieList.map((item, index) => {
            <img key={index} src={IMAGE_BASE_URL + item.backdrop_path}/>
        })}
    </div>
  )
}

export default Slider
