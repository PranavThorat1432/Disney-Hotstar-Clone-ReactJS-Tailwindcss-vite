import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './MyComponents/Header.jsx'
import Slider from './MyComponents/Slider.jsx'
import ProductionHouse from './MyComponents/ProductionHouse.jsx'
import GenreMovieList from './MyComponents/GenreMovieList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen'>
        <Header/>

        <Slider/>

        <ProductionHouse/>

        <GenreMovieList/>
      </div>
    </>
  )
}

export default App
