import React from 'react';
import Navbar from '../components/navbar/Navbar';
import hero from '../assets/hero-images/hero.png';
import Card from '../components/cards/Card';

const Home = () => {
  const heroStyle = {
    backgroundImage: `url(${hero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '540px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '-10',
  };

  return (
    <div className='relative'>
      <Navbar />
      <div className='absolute top-0 overflow-hidden' style={heroStyle}></div>
      <div className='fixed top-[440px] left-0 right-0 px-24'>
        <Card />
      </div>
    </div>
  );
};

export default Home;
