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
            <img src={WomanImg} alt='' />
          </div>
          {/* text */}
          <div className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center itmes-center lg:items-start'>
            <h1 className='h1'> About Me </h1>
              <p className='mb-12 max-w-sm'>
              Feeling mad hostile, ran the apostle, flowing like Christ when I speak the gospel. Leave it up to me while I be livin' proof Domino effect arts and crafts, paragraphs contain cyanide.             
              <br/>
              <br/> 
              I be that insane one from the psycho ward, I'm on the trigger, plus I got the Wu-Tang sword. <b>Protect Ya Neck</b>, my sword still remain imperial before I blast the mic, RZA scratch off the serial. Handcuffed in the back of a bus, forty of us.
              <br/>
              <br/>           
              Shackling the masses with drastic rap tactics, graphic displays melt the steel like blacksmiths. Lyrically perform armed robbery, flee with the lottery, possibly they spotted me. I come rough, tough like an Elephant tusk.
              </p>
              <Link to={'/portfolio'}>view my work </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
