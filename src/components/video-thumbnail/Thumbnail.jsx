import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import thumbnail from '../../assets/thumbnail-images/thumbnail-1.svg';

const Thumbnail = () => {
  const cardStyle = {
    backgroundImage: `url(${thumbnail})`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // height: '318px',
  };

  return (
    <div
        style={cardStyle}
        className="flex flex-col justify-between px-6 py-6 w-[283.64px] h-[312px] rounded-3xl"
    >
       <div className="text-white text-xl font-bold font-['Inter']">The Sound of Silence</div>
        <div className="w-[246.76px] h-[52.36px] bg-white bg-opacity-20 rounded-xl backdrop-blur-[20px]">
            <div className='grid grid-cols-3 justify-center items-center pt-1 px-4 gap-y-2  '>
                <div className="h-4 text-white text-sm font-medium font-['Inter'] text-center">Shares</div>
                <div className="h-4 text-white text-sm font-medium font-['Inter'] text-center">Shares</div>
                <div className="h-4 text-white text-sm font-medium font-['Inter'] text-center">Shares</div>
                <div className="text-white text-center text-sm font-bold font-['Inter']">317</div>
                <div className="text-white text-center text-sm font-bold font-['Inter']">75%</div>
                <div className="text-white text-center text-sm font-bold font-['Inter']">$9510</div>
            </div> 
        </div> 
    </div>
  );
};

export default Thumbnail;
