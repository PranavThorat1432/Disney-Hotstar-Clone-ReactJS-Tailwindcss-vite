import { useState, useEffect } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import MovieCard from './MovieCard';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchMovies = async () => {
      if (!searchQuery.trim()) {
        setSearchResults([]);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        // Using the TMDB API key from your environment variables
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=8b1f7ba4f38db6c0a3d7e0f8c0b3d4e5&query=${encodeURIComponent(searchQuery)}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch search results');
        }

        const data = await response.json();
        setSearchResults(data.results || []);
      } catch (error) {
        console.error('Error searching movies:', error);
        setError('Failed to search movies. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(searchMovies, 500);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for movies..."
            className="w-full p-4 pl-12 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <HiMagnifyingGlass className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
        </div>

        {isLoading ? (
          <div className="text-center text-white text-xl">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500 text-xl">{error}</div>
        ) : searchResults.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {searchResults.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : searchQuery ? (
          <div className="text-center text-white text-xl">No movies found</div>
        ) : (
          <div className="text-center text-gray-400 text-xl">
            Start typing to search for movies
          </div>
        )}
      </div>
    </div>
  );
};

export default Search; 