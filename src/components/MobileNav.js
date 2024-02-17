import React, {useState} from 'react';
//icons
import { ioMdClose } from 'react-icons/io'
import { CgMenuRight } from 'react-icons/io'
//link
import Link from 'react-router-dom';

//import motion

import{ motion } from 'framer-motion';


const MobileNav = () => {
  return <nav>
    //nav open
    <div className='text-3xl cursor-pointer'>
      <CgMenuRight/>
    </div>
  </nav>;
};

export default MobileNav;
