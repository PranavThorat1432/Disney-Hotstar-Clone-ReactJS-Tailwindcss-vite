import React from 'react'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';

function MovieCard({ movie }) {
  return (
    <div className="min-w-[150px] md:min-w-[200px] hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
      <img src={IMAGE_BASE_URL + movie.poster_path} className="w-full h-auto rounded-md shadow-lg hover:border-[3px] border-gray-400" />
    </div>
  )
}

export default MovieCard
