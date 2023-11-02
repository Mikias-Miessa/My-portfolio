import React from 'react'
import MyPic from '../assets/myProfile.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
  return (
      <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-indigo-950'>
          <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pt-16'>
              <div className='flex flex-col justify-center mb-5'>
                  <h2 className='text-4xl sm:text-7xl font-bold text-white mt-16'>
                      I'm a Full Stack Developer
                  </h2>
                  <p className='text-gray-500 py-4 max-w-md'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque possimus optio officia distinctio delectus est reprehenderit! Sint dignissimos libero natus quibusdam corrupti dolorum at quam doloribus. Omnis, adipisci necessitatibus.
                  </p>
                  <div>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-teal-500 to-emerald-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                        </span>
                    </Link>
                </div>
              </div>
              <div>
                  <img src={MyPic} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
              </div>
         </div>
    </div>
  )
}

export default Home