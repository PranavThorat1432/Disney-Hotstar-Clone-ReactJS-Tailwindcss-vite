import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import { HiHome, HiMagnifyingGlass, HiUser, HiStar, HiPlayCircle, HiTv } from 'react-icons/hi2'
import { HiPlus, HiDotsVertical, HiHeart } from 'react-icons/hi'
import HeaderItem from './HeaderItem';
import { useMovie } from '../Context/MovieContext';

function Header() {
    const [toggle, setToggle] = React.useState(false);
    const navigate = useNavigate();
    const { favorites, watchlist } = useMovie();

    const menu = [
        {
            id: 1,
            name: 'HOME',
            icon: HiHome,
            path: '/'
        },
        {
            id: 2,
            name: 'SEARCH',
            icon: HiMagnifyingGlass,
            path: '/search'
        },
        {
            id: 3,
            name: 'WATCHLIST',
            icon: HiPlus,
            count: watchlist.length,
            path: '/watchlist'
        },
        {
            id: 4,
            name: 'FAVORITES',
            icon: HiHeart,
            count: favorites.length,
            path: '/favorites'
        },
        {
            id: 5,
            name: 'ORIGINALS',
            icon: HiStar,
            path: '/originals'
        },
        {
            id: 6,
            name: 'MOVIES',
            icon: HiPlayCircle,
            path: '/movies'
        },
        {
            id: 7,
            name: 'SERIES',
            icon: HiTv,
            path: '/series'
        }
    ];

    return (
        <div className='flex items-center bg-black text-white justify-between p-5'>
            <div className='flex items-center gap-8'>
                <Link to="/">
                    <img src={logo} alt="Logo" className='w-[80px] md:w-[115px] object-cover' />
                </Link>
                <div className='hidden md:flex gap-8'>
                    {menu.map((item) => (
                        <Link to={item.path} key={item.id}>
                            <div className="relative">
                                <HeaderItem name={item.name} Icon={item.icon} />
                                {item.count > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {item.count}
                                    </span>
                                )}
                            </div>
                        </Link>
                    ))} 
                </div>
                <div className='flex md:hidden gap-5'>
                    {menu.map((item, index) => index < 3 && (
                        <Link to={item.path} key={item.id}>
                            <div className="relative">
                                <HeaderItem name={''} Icon={item.icon} />
                                {item.count > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {item.count}
                                    </span>
                                )}
                            </div>
                        </Link>
                    ))} 
                </div>
                <div className='flex md:hidden gap-8' onClick={() => setToggle(!toggle)}>
                    <HeaderItem name={''} Icon={HiDotsVertical}/>
                    {toggle ? (
                        <div className='absolute mt-6 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-3'>
                            {menu.map((item, index) => index > 2 && (
                                <Link to={item.path} key={item.id}>
                                    <div className="relative">
                                        <HeaderItem name={item.name} Icon={item.icon} />
                                        {item.count > 0 && (
                                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                                {item.count}
                                            </span>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : null}
                </div>

            </div>
            <img 
                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" 
                alt="Profile" 
                className='w-[40px] rounded-full cursor-pointer'
            />
        </div>
    )
}

export default Header
 