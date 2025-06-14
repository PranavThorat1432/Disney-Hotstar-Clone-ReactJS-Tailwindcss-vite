import React, { useEffect } from 'react'
import GlobalAPI from '../Services/GlobalAPI.jsx'
import MovieCard from './MovieCard.jsx'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard.jsx';

// Skeleton component for loading state
const MovieCardSkeleton = () => (
  <div className="animate-pulse">
    <div className="bg-gray-700 rounded-lg w-[150px] md:w-[200px] h-[225px] md:h-[300px]"></div>
    <div className="h-4 bg-gray-700 rounded mt-2 w-3/4"></div>
  </div>
);

const HrMovieCardSkeleton = () => (
  <div className="animate-pulse">
    <div className="bg-gray-700 rounded-lg w-[110px] md:w-[260px] h-[62px] md:h-[146px]"></div>
    <div className="h-4 bg-gray-700 rounded mt-2 w-3/4"></div>
  </div>
);

function MovieList({genreID, index_}) {
    const [MovieList, setMovieList] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const elementRef = React.useRef(null); 

    useEffect(() => {  
        getMovieByGenreID();
    }, []);

    const getMovieByGenreID = () => {
        setLoading(true);
        GlobalAPI.getMovieByGenreId(genreID).then(resp => {
            // console.log(resp.data.results);
            setMovieList(resp.data.results);
            setLoading(false);
        }).catch(error => {
            console.error('Error fetching movies:', error);
            setLoading(false);
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
                {loading ? (
                    // Show skeletons while loading
                    Array(6).fill(0).map((_, index) => (
                        <div key={index}>
                            {index_%3==0 ? <HrMovieCardSkeleton /> : <MovieCardSkeleton />}
                        </div>
                    ))
                ) : (
                    // Show actual movie cards when data is loaded
                    MovieList.map((item, index) => (
                        <div key={item.id}>
                            {index_%3==0 ? <HrMovieCard movie={item}/> : <MovieCard movie={item} />}
                        </div>
                    ))
                )}
            </div>

            <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)} className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0 ${index_%3==0?'mt-[70px]':'mt-[150px]'}`}/> 
        </div>
    )
}

export default MovieList