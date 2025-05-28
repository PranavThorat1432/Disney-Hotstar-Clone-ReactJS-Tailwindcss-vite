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
    const list = [
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
    <div>
      
    </div>
  )
}

export default ProductionHouse
