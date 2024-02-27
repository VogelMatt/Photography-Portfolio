import React, { useState } from 'react';
//icons
import { ioMdClose } from 'react-icons/io'
import { CgMenuRight } from 'react-icons/io'
//link
import {Link} from 'react-router-dom';

//import motion

import { motion } from 'framer-motion';


const MobileNav = () => {
  return <nav>
    //nav open
    <div className='text-3xl cursor-pointer'>
      <CgMenuRight />
    </div>
    <div className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'>
      menu
      <div>
        <IoMdClose/>
      </div>
      
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
      
        return () => {
        second
      };
      }, [third])
    </div>
  </nav>;
};

export default MobileNav;
