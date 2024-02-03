import React from 'react'
import card from "../../assets/card-images/card-background.svg";
import display from "../../assets/card-images/display-picture.svg";
const Card = () => {
    const cardStyle={
        backgroundImage: `url(${card})`,
        zIndex: '-2',
        backgroundSize: 'cover',
        height:'234px',
        width:'571px',
        border:'0px solid white',
        borderRadius:'23px',
    }
  return (
    <div>
        <div className='shadow-lg shadow-zinc-500 backdrop-blur-[50px] flex' style={cardStyle}>
            <div><img src={display} className=''/></div>
            <div className='p-6 px-8'>
                <div className='flex flex-col gap-6'>
                    <div className='flex items-center gap-8'>
                        <div className="text-black text-2xl font-bold font-['Inter'] tracking-wide">DAN MACE</div>
                        <div className="text-stone-500 text-sm font-normal font-['Inter'] leading-snug">/Johny_Films/</div>
                    </div>
                    <div className='flex flex-col w-[259px] gap-0.5'>
                        <span className='text-stone-500 text-sm font-bold font-["Inter"]'>
                            Bio
                        </span>
                        <span className='text-stone-500 text-sm font-normal font-["Inter"]'>
                            Simply a film fan creating original content for YouTube. Let’s Collaborate.
                        </span>
                    </div>
                    <div>
                    <div className="flex items-center">
                        <div className="w-32 h-[29px] rounded-l border border-black bg-transparent flex items-center justify-center">
                            <div className="w-[53px] text-center text-zinc-800 text-sm font-normal font-['Overlock']">Creator</div>
                        </div>
                        <div className="w-32 h-[29px] rounded-r bg-black bg-opacity-60">

                        </div>
                    </div>

                    </div>
                </div>
            </div>  
        </div>
        
    </div>
  )
}

export default Card
