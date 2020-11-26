import React from 'react';
import './about.css';
import { kecerdasan, personality } from '../assets';

const About = () => {
  return (
    <div className="about">
      <h1>Punteen, I'ts Me!!</h1>
      <img className="kecerdasan" alt="latar2" src={kecerdasan} />
      <p className="cae-info">
        <b>Ini merupakan hasil test kecerdasan saya, oleh Tel-U CAE</b>
      </p>
      <img className="personality" alt="latar2" src={personality} />
      <p className="cae-info">
        <b>kalau ini, kepribadiaan saya, dari Tel-U CAE juga</b>
      </p>
    </div>
  );
};
export default About;
