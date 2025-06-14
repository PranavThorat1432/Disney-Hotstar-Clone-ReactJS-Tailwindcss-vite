import React, { useState } from 'react';
import { useMovie } from '../Context/MovieContext';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import { HiPlus, HiCheck } from 'react-icons/hi';
import MovieDetails from './MovieDetails';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';

function MovieCard({ movie }) {
  const [showDetails, setShowDetails] = useState(false);
  const { isFavorite, isInWatchlist, toggleFavorite, toggleWatchlist } = useMovie();

  const handleClick = () => {
    setShowDetails(true);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    toggleFavorite(movie);
  };

  const handleWatchlistClick = (e) => {
    e.stopPropagation();
    toggleWatchlist(movie);
  };

  return (
    <>
      <div className="relative min-w-[150px] md:min-w-[200px] group">
        <div 
          onClick={handleClick}
          className="hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
        >
          <img 
            src={IMAGE_BASE_URL + movie.poster_path} 
            className="w-full h-auto rounded-md shadow-lg hover:border-[3px] border-gray-400" 
            alt={movie.title}
          />
        </div>
        
        <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handleFavoriteClick}
            className="p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-colors"
          >
            {isFavorite(movie.id) ? (
              <HiHeart className="text-red-500 text-xl" />
            ) : (
              <HiOutlineHeart className="text-white text-xl" />
            )}
          </button>
          <button
            onClick={handleWatchlistClick}
            className="p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-colors"
          >
            {isInWatchlist(movie.id) ? (
              <HiCheck className="text-green-500 text-xl" />
            ) : (
              <HiPlus className="text-white text-xl" />
            )}
          </button>
        </div>
      </div>

      {showDetails && (
        <MovieDetails
          movie={movie}
          onClose={() => setShowDetails(false)}
        />
      )}
    </>
  );
}

export default MovieCard;