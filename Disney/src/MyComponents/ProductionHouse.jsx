import React from 'react'
import disney from '../assets/img/disney.png'
import marvel from '../assets/img/marvel.png'
import pixar from '../assets/img/pixar.png'
import starwar from '../assets/img/starwar.png'
import nationalG from '../assets/img/nationalG.png'

import starwarV from '../assets/vid/star-wars.mp4'
import disneyV from '../assets/vid/disney.mp4'
import marvelV from '../assets/vid/marvel.mp4'
import pixarV from '../assets/vid/pixar.mp4'
import nationalGV from '../assets/vid/national-geographic.mp4'

function ProductionHouse() {
    const productionHouseList = [
        {
            id:1,
            image:disney,
            video:disneyV,
        },
        {
            id:2,
            image:marvel,
            video:marvelV,
        },
        {
            id:3,
            image:pixar,
            video:pixarV,
        },
        {
            id:4,
            image:starwar,
            video:starwarV,
        },
        {
            id:5,
            image:nationalG,
            video:nationalGV,
        },
        
        
    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 py-4'>
        {productionHouseList.map((item) => (

            <div className='group border-[2px] border-gray-400 rounded-lg overflow-hidden hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-black' key={item.id}>

                <video src={item.video} autoPlay loop muted playsInline className='absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-md z-10'></video>
                
                <img src={item.image} className='w-full h-full object-contain z-20 relative'/>
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse
