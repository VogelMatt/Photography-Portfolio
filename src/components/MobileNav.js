import React, { useState } from 'react';
//icons
// import { ioMdClose } from 'react-icons/io'
// import { CgMenuRight } from 'react-icons/io'
//link
import { Link } from 'react-router-dom';

//import motion

import { motion, useTransform } from 'framer-motion';



const menuVariants = {
  hidden: {
    x: '100%'
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};


const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className='text-primary xl:hidden'>
    //nav open
      <div
        onClick={() => setOpenMenu(true)}
        className='text-3xl cursor-pointer'>
      </div>
      <motion.div
        variants={menuVariants}
        initial='hidden'
        animate={openMenu ? 'show' : ''}
        className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'>
        menu
        <div 
          onClick={()=> setOpenMenu(false)}
          className='text-4xl absolute z-30 left-4 top-14 text-primary        cursor-pointer'>
        </div>
        <div>icon</div>
        <ul className='h-full flex flex-col justify-center itmes-center gap-y-8 text-primary front-primary font-bold text-3xl'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about '>About</Link>
          </li>
          <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;

{/* <CgMenuRight /> */}
{/* <IoMdClose /> */}