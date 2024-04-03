import React from 'react';


import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImYoutube,
} from 'react-icons/im'

const Socials = () => {
  return (
    <div className='hidden xl:flex ml-24'>
      <ul>
        <li>
          <a href='facebook.com' target='_blank'>
            <ImFacebook></ImFacebook>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
