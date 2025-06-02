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
        <div className='relative'>
            <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute ${index_%3==0?'mt-[70px]':'mt-[150px]'} `}/>
   
        <div ref={elementRef} className='flex overflow-x-auto gap-8 no-scrollbar scroll-smooth pt-4 px-3 pb-4'>
            {MovieList.map((item,index)=>(
                <>
                {index_%3==0?<HrMovieCard movie={item}/>:<MovieCard movie={item} />}
                </> 
            ))}

        </div>
            <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)} className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0 ${index_%3==0?'mt-[70px]':'mt-[150px]'}`}/> 
        </div>
    )
}

export default MovieList
