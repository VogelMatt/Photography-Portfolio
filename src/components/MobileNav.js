import React, { useState } from 'react';
//icons
import { ioMdClose } from 'react-icons/io'
import { CgMenuRight } from 'react-icons/io'
//link
import Link from 'react-router-dom';

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
      <div>icon</div>
      //menu useLayoutEffect(() => {
        <ul>
          <li>
            <Link>Home</Link>
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
