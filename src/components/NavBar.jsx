import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experiance'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]
    return (
        <div className='flex justify-between items-center w-full h-20 text-white bg-black fixed px-4'>
            <div>
                <h1 className='text-3xl font-logo ml-4 mt-2'>Mikias</h1>
            </div>
            <ul className='hidden md:flex'>

                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>{link}</li>
                ))}

            </ul>
            <div className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden' onClick={() => setNav(!nav)}>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
             <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-indigo-950 text-gray-500 '>
                    {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200'>{link}</li>
                ))}
            </ul>   
            )}
            
        </div>
    );
};

export default NavBar