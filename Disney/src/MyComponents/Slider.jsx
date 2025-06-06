import React, { useEffect, useRef, useState } from 'react';
import GlobalAPI from '../Services/GlobalAPI';
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';
const screenWidth = window.innerWidth;

function Slider() {
  const elementRef = useRef(null);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalAPI.getTrendingVideos()
      .then(resp => {
        setMovieList(resp.data.results);
      })
      .catch(err => {
        console.error('Failed to fetch trending movies:', err);
      });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth > 768 ? 1350 : 600;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth > 768 ? 1350 : 600;
  };

  return (
    <div>
      <HiChevronLeft
        className='hidden md:block text-white text-[40px] absolute mx-8 mt-[150px] cursor-pointer'
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className='hidden md:block text-white text-[40px] absolute right-8 mt-[150px] cursor-pointer'
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className='flex overflow-x-auto no-scrollbar gap-2 md:gap-5 p-5 w-full px-16 py-4 scroll-smooth'
        ref={elementRef}
      >
        {movieList
          .filter(item => item.backdrop_path)
          .map((item) => (
            <img
              key={item.id}
              src={IMAGE_BASE_URL + item.backdrop_path}
              alt={item.title}
              className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] hover:border-gray-400 transition-all duration-100 ease-in-out shadow-lg shadow-black'
            />
          ))}
      </div>
    </div>
  );
}

export default Slider;