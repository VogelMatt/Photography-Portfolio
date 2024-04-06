import React from 'react';

import WomanImg from '../img/home/woman.png';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className='section'>
      <div className="container mx-auto h-full relative">
        { /*text img wrapper */}
        <div className='flex flex-col justify-center'>
          <div>
            <h1>Photographer <br/> & Film Maker</h1>
          </div>

          <div>image</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
