import { useState, useEffect } from 'react';
import { useMovie } from '../Context/MovieContext';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import { HiPlus, HiCheck } from 'react-icons/hi';

const MovieDetails = ({ movie, onClose }) => {
  const { isFavorite, isInWatchlist, toggleFavorite, toggleWatchlist } = useMovie();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}?api_key=1b7c076a0b4632b52c0244513131d2d4&append_to_response=credits`
        );
        const data = await response.json();
        console.log('Movie Details Response:', data); // Debug log
        setMovieDetails(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setError('Failed to load movie details');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movie.id]);

  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-[400px] object-cover rounded-t-lg"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1920x1080?text=No+Image+Available';
            }}
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75"
          >
            ✕
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-3xl font-bold text-white">{movie.title}</h2>
            <div className="flex gap-2">
              <button
                onClick={() => toggleFavorite(movie)}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                {isFavorite(movie.id) ? (
                  <HiHeart className="text-red-500 text-xl" />
                ) : (
                  <HiOutlineHeart className="text-white text-xl" />
                )}
              </button>
              <button
                onClick={() => toggleWatchlist(movie)}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                {isInWatchlist(movie.id) ? (
                  <HiCheck className="text-green-500 text-xl" />
                ) : (
                  <HiPlus className="text-white text-xl" />
                )}
              </button>
            </div>
          </div>

          <div className="flex gap-4 text-gray-400 mb-4">
            <span>{movie.release_date?.split('-')[0]}</span>
            <span>{movie.vote_average?.toFixed(1)} Rating</span>
            {movieDetails?.runtime && <span>{movieDetails.runtime} min</span>}
          </div>

          <p className="text-gray-300 mb-6">{movie.overview}</p>

          {loading && (
            <div className="text-white text-center py-4">
              Loading movie details...
            </div>
          )}

          {error && (
            <div className="text-red-500 text-center py-4">
              {error}
            </div>
          )}

          {!loading && !error && movieDetails && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {movieDetails.genres && movieDetails.genres.length > 0 ? (
                    movieDetails.genres.map(genre => (
                      <span key={genre.id} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {genre.name}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-400">No genres available</span>
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Top Cast</h3>
                <div className="flex flex-wrap gap-2">
                  {movieDetails.credits?.cast && movieDetails.credits.cast.length > 0 ? (
                    movieDetails.credits.cast.slice(0, 5).map(actor => (
                      <span key={actor.id} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {actor.name}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-400">No cast information available</span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails; 