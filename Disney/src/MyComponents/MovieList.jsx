import React, { useEffect } from 'react'
import GlobalAPI from '../Services/GlobalAPI'
import MovieCard from './MovieCard.jsx'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard.jsx';

function MovieList({genreID, index_}) {
    const [MovieList, setMovieList] = React.useState([]);
    const elementRef = React.useRef(null); 

    useEffect(() => {  
        getMovieByGenreID();
    }, []);

    const getMovieByGenreID = () => {
        GlobalAPI.getMovieByGenreId(genreID).then(resp => {
            // console.log(resp.data.results);
            setMovieList(resp.data.results);
        });
    };
    
    const slideRight = (element) => {
        element.scrollLeft += element.clientWidth;
    };

    const slideLeft = (element) => {
        element.scrollLeft -= element.clientWidth;
    };


    return (
        <div className="relative">
            <IoChevronBackOutline onClick={() => slideLeft(elementRef.current)} className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute left-0 top-1/2 -translate-y-1/2 ${index_%3==0 ? 'mt-0' : 'mt-0'}`}/>

            <div ref={elementRef} className="flex overflow-x-auto gap-8 pt-5 px-3 pb-10 no-scrollbar scroll-smooth">
                {MovieList.map((item, index) => (
                    <MovieCard movie={item} key={index} />
                ))}
            </div>

            <IoChevronForwardOutline onClick={() => slideRight(elementRef.current)} className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 absolute right-0 top-1/2 -translate-y-1/2 ${index_%3==0 ? 'mt-0' : 'mt-0'}`}/>
        </div>
    )
}

export default MovieList
