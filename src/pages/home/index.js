import React from 'react';
import './style.css';
import { kabah } from '../../assets';

const Home = () => {
  return (
    <div className="pageHome-wrapper">
      <h1>Hello there, I'm using whatsapp!</h1>
      <img className="kabah" alt="latar1" src={kabah} />
      <p className="cerita">
        Jadi ceritanya saya ingin sekali ke tempat tersebut
      </p>
    </div>
  );
};

export default Home;
