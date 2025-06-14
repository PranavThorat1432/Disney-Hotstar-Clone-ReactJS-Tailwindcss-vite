import { createContext, useContext, useState, useEffect } from 'react';

const MovieContext = createContext();

export const useMovie = () => {
  return useContext(MovieContext);
};

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  // Load favorites and watchlist from localStorage on initial render
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    const savedWatchlist = localStorage.getItem('watchlist');
    
    if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
    if (savedWatchlist) setWatchlist(JSON.parse(savedWatchlist));
  }, []);

  // Save to localStorage whenever favorites or watchlist changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const toggleFavorite = (movie) => {
    setFavorites(prev => {
      const exists = prev.find(m => m.id === movie.id);
      if (exists) {
        return prev.filter(m => m.id !== movie.id);
      }
      return [...prev, movie];
    });
  };

  const toggleWatchlist = (movie) => {
    setWatchlist(prev => {
      const exists = prev.find(m => m.id === movie.id);
      if (exists) {
        return prev.filter(m => m.id !== movie.id);
      }
      return [...prev, movie];
    });
  };

  const isFavorite = (movieId) => {
    return favorites.some(movie => movie.id === movieId);
  };

  const isInWatchlist = (movieId) => {
    return watchlist.some(movie => movie.id === movieId);
  };

  const value = {
    favorites,
    watchlist,
    toggleFavorite,
    toggleWatchlist,
    isFavorite,
    isInWatchlist
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
}; 