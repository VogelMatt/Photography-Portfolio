import React from 'react';


import WomanImg from '../img/about/woman.png';

import { Link } from 'react-router-dom';






const About = () => {
  return (
    <section className='section'>
        <div className="container mx-auto h-full relative">
          {/*text wrapper */}
            <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
              {/* image */}
              <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
                <img src={WomanImg} alt=''/>
              </div>
              {/* text */}
              <div>
                <h1></h1>
              </div>
            </div>
        </div>
    </section>
  );
};

export default About;
