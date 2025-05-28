import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './MyComponents/Header.jsx'
import Slider from './MyComponents/Slider.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-black text-white h-screen'>
        <Header/>
        <Slider/>
      </div>
    </>
  )
}

export default App
