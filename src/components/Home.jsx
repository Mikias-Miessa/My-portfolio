import React from 'react';
import MyPic from '../assets/myProfile.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';
const Home = () => {
  return (
    <div
      name='home'
      className='h-screen w-full bg-gradient-to-b from-black via-black to-indigo-950'
    >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pt-16'>
        <div className='flex flex-col justify-center mb-5'>
          <motion.h2
            className='text-4xl sm:text-7xl font-bold text-white mt-16'
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 40, damping: 10 }}
          >
            I'm Web & Mobile App Developer
          </motion.h2>
          <motion.p
            className='text-gray-500 py-4 max-w-md'
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
              type: 'spring',
              delay: 0.2,
              stiffness: 40,
              damping: 10,
            }}
          >
            I'm an enthusiastic full-stack developer in Addis Ababa, Ethiopia,
            with a strong background in web and mobile app development.
          </motion.p>
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
              type: 'spring',
              delay: 0.4,
              stiffness: 40,
              damping: 10,
            }}
            className='flex gap-6'
          >
            <Link
              to='portfolio'
              smooth
              duration={500}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-teal-500 to-emerald-500 cursor-pointer'
            >
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://flowcv.com/resume/fh5tl42jsp'
              className='md:hidden group text-white w-fit px-6 py-3 my-2 flex gap-2 items-center rounded-md bg-gradient-to-r from-teal-500 to-emerald-500 cursor-pointer'
            >
              <span>
                <FaFileDownload size={25} />
              </span>
              Resume
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 10,
          }}
        >
          <img
            src={MyPic}
            alt='my profile'
            className='rounded-2xl mx-auto w-2/3 md:w-full'
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
