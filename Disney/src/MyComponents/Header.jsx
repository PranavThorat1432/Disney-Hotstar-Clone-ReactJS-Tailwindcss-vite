import React from 'react'
import logo from '../assets/img/logo.png'
import { HiHome, HiMagnifyingGlass, HiUser, HiStar, HiPlayCircle, HiTv } from 'react-icons/hi2'
import {HiPlus, HiDotsVertical} from 'react-icons/hi'
import HeaderItem from './HeaderItem';

function Header() {
    const [toggle, setToggle] = React.useState(false);
    const menu = [
        {
            name: 'HOME',
            icon:HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCHLIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        },
        // {
        //     name: 'PROFILE',
        //     icon: HiUser
        // },
        // {
        //     name: 'MORE',
        //     icon: HiDotsVertical
        // }

    ]
  return (
    <div className='flex items-center bg-black text-white justify-between p-5'>
        <div className='flex items-center gap-8'>
            <img src={logo} alt="Logo" className='w-[80px] md:w-[115px] object-cover' />
            <div className='hidden md:flex gap-8'>
                {menu.map((item) => (
                    <HeaderItem name={item.name} Icon={item.icon}/>
                ))} 
            </div>
            <div className='flex md:hidden gap-5'>
                {menu.map((item, index) => index<3 && (
                    <HeaderItem name={''} Icon={item.icon}/>
                ))} 
            </div>
            <div className='flex md:hidden gap-8' onClick={() => setToggle(!toggle)}>
                <HeaderItem name={''} Icon={HiDotsVertical}/>
                {toggle ? <div className='absolute mt-6 bg-[#121212] border-[1px] border-gray-700 p-3 px-5
                py-3'>
                    {menu.map((item, index) => index>2 && (
                        <HeaderItem name={item.name} Icon={item.icon}/>
                    ))}
                </div> : null}
            </div>
        </div>
         <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" className='w-[40px] rounded-full' />
    </div>

    
  )
}

export default Header
 