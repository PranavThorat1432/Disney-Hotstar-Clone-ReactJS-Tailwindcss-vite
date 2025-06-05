import './App.css'
import Header from './MyComponents/Header.jsx'
import Slider from './MyComponents/Slider.jsx'
import ProductionHouse from './MyComponents/ProductionHouse.jsx'
import GenreMovieList from './MyComponents/GenreMovieList.jsx'

function App() {
  return (
    <div className='min-h-screen'>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  )
}

export default App