import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './MyComponents/Header.jsx'
import Slider from './MyComponents/Slider.jsx'
import ProductionHouse from './MyComponents/ProductionHouse.jsx'
import GenreMovieList from './MyComponents/GenreMovieList.jsx'
import Search from './MyComponents/Search.jsx'
import Favorites from './MyComponents/Favorites.jsx'
import Watchlist from './MyComponents/Watchlist.jsx'
import { MovieProvider } from './Context/MovieContext'

function App() {
  return (
    <Router>
      <MovieProvider>
        <div className='min-h-screen bg-gray-900'>
          <Header />
          <Routes>
            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/" element={
              <>
                <Slider />
                <ProductionHouse />
                <GenreMovieList />
              </>
            } />
          </Routes>
        </div>
      </MovieProvider>
    </Router>
  )
}

export default App