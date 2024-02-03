import React from 'react';

import bg from "../../assets/navbar-images/navbar-bg.svg";
import wallet from "../../assets/navbar-images/wallet.svg";
import bell from "../../assets/navbar-images/bell.svg";
import profile from "../../assets/navbar-images/profile.svg";
import arrow from "../../assets/navbar-images/arrow.svg";

import Share from '../buttons/Share';

const Navbar = () => {
  const navbarStyle = {
    backgroundImage: `url(${bg})`, 
    backgroundSize: 'cover',       
    borderBottom: '1px solid black',
    backdropFilter: 'blur(50px)',   
  };

  return (
    <div className="navbar h-20" style={navbarStyle}>
        <div className='flex justify-between items-center px-24 pr-16 py-6'>
            <div>
                <div className="text-zinc-800 text-2xl font-bold font-['Inter']">aBit</div>
            </div>
            <div className='items-center gap-4 flex'>
                <Share />
                <img className="w-7 h-7 cursor-pointer" src={wallet} />
                <img className="w-7 h-7 cursor-pointer" src={bell} />
                <img className="w-7 h-7 cursor-pointer" src={profile} />
                <img className="w-7 h-7 cursor-pointer" src={arrow} />
            </div>
        </div>
    </div>
  );
}

export default Navbar;
