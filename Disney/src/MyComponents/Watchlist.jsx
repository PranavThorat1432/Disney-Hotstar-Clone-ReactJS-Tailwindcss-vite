import { useMovie } from '../Context/MovieContext';
import MovieCard from './MovieCard';

const Watchlist = () => {
  const { watchlist } = useMovie();

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">My Watchlist</h1>
        {watchlist.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {watchlist.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="text-center text-white text-xl">
            Your watchlist is empty. Add some movies to watch later!
          </div>
        )}
      </div>
    </div>
  );
};

export default Watchlist; 