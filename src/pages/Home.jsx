import React from 'react';
import Marquee from 'react-fast-marquee';

import Navbar from '../components/navbar/Navbar';
import hero from '../assets/hero-images/hero.png';
import Card from '../components/cards/Card';
import VideoUpload from '../components/upload/VideoUpload';
import Thumbnail from '../components/video-thumbnail/Thumbnail';
import Footer from '../components/footer/Footer';

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

  const repeatedText = "John Bill / Creator / Moved to NYC / 27.11.22 / Live now /"

  return (
    <div className='relative'>
      <Navbar />
      <div className='absolute top-0 overflow-hidden' style={heroStyle}></div>
      <div className="w-full h-[85px] flex items-center bg-zinc-800 absolute top-[540px]">
        <Marquee className="text-white text-2xl font-normal gloria-hallelujah-regular"> 
          {[...Array(20)].map((_, index) => (
          <React.Fragment key={index}>
            <span className="mr-3">{repeatedText}</span>
          </React.Fragment>
          ))}
        </Marquee>
      </div>
      <div className='absolute top-[625px] px-16 w-full py-10'>
        <div className='flex justify-between'>
          <div>
            <div className='w-full bg-white text-[28px] font-normal h-40 pt-28 text-black font-["Overlock"]'>
              Releases
            </div>
            <div className="text-neutral-600 text-base font-normal font-['Overlock'] italic tracking-wide">
              Videos that you upload in collaboration with aBit appear here.
            </div>
          </div>
          <div className='pt-28'>
          <div className='flex gap-20'>
            <div className='flex items-center gap-6'>
              <div className='h-[74px] bg-neutral-500 w-[1px]'></div>
              <div className='flex flex-col'>
                <div className="flex flex-col gap-3 text-neutral-600 text-base font-bold font-['Inter'] leading-relaxed">
                  <div className="mr-2">1</div>
                  <div className="text-stone-500 text-sm font-normal font-['Inter'] w-[60px]">Shared Videos</div>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <div className='h-[74px] bg-neutral-500 w-[1px]'></div>
              <div className='flex flex-col'>
                <div className="flex flex-col gap-3 text-neutral-600 text-base font-bold font-['Inter'] leading-relaxed">
                  <div className="mr-2">$9510</div>
                  <div className="text-stone-500 text-sm font-normal font-['Inter'] w-[60px]">Funds Raised</div>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <div className='h-[74px] bg-neutral-500 w-[1px]'></div>
              <div className='flex flex-col'>
                <div className="flex flex-col gap-3 text-neutral-600 text-base font-bold font-['Inter'] leading-relaxed">
                  <div className="mr-2">317</div>
                  <div className="text-stone-500 text-sm font-normal font-['Inter'] w-[68px]">Co-owner community</div>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <div className='h-[74px] bg-neutral-500 w-[1px]'></div>
              <div className='flex flex-col'>
                <div className="flex flex-col gap-3 text-neutral-600 text-base font-bold font-['Inter'] leading-relaxed">
                  <div className="mr-2">$3804</div>
                  <div className="text-stone-500 text-sm font-normal font-['Inter'] w-[68px]">Co-owner Earnings</div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className='pt-24 flex gap-8 border-b border-zinc-300 pb-60'>
          <VideoUpload />
          <Thumbnail />
        </div>
        <div className='px-6'>
          <Footer />
        </div>
      </div>
      <div className='absolute top-[440px] left-0 right-0 px-16 z-10'>
        <Card />
      </div>
    </div>
  );
};

export default Home;
