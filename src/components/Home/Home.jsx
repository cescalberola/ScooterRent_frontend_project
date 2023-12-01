import React from 'react';
import fondoImage from '../../assets/img home.png';
import "./Home.scss"

const Home = () => {
  return (
    <div className='img-container'>
      <img src={fondoImage} alt="Fondo" />
    </div>
  );
};

export default Home;
