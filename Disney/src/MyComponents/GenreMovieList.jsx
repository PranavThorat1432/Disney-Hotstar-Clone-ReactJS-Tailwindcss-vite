import React from 'react'
import GenreList from '../Constant/GenresList.jsx'

function GenreMovieList() {
  return (
    <div>
        {GenreList.genere.map((item) => (
            <div>
                <h2>{item.name}</h2>
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList
