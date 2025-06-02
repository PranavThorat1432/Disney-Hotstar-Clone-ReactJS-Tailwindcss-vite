import React, { useEffect } from 'react'
import GlobalAPI from '../Services/GlobalAPI.jsx'
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
            <div className="flex items-center">
                <IoChevronBackOutline
                    onClick={() => slideLeft(elementRef.current)}
                    className="text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block"
                />

                <div ref={elementRef} className="flex overflow-x-auto gap-8 pt-5 px-3 pb-10 no-scrollbar scroll-smooth flex-1">
                    {MovieList.map((item, index) => (
                        <React.Fragment key={item.id || index}>
                            {index_%3==0 ? <HrMovieCard movie={item}/> : <MovieCard movie={item} />}
                        </React.Fragment>
                    ))}
                </div>

                <IoChevronForwardOutline
                    onClick={() => slideRight(elementRef.current)}
                    className="text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block"
                />
            </div>
        </div>
    )
}

export default MovieList
