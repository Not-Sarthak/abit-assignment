import React from 'react'

const Footer = () => {
  return (
    <div className='pt-24 pb-12'>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-1'>
            <div className="text-neutral-800 text-[40px] font-bold font-['Inter']">aBit</div>
            <div className="w-[313px] text-black text-xl font-normal font-['Overlock'] capitalize">
                Changing the way in which creators and fans interact.
            </div>
        </div>
        <div className='flex flex-col gap-2 border-l-2 pl-5 h-20'>
            <div className="text-neutral-800 text-opacity-95 text-sm font-bold font-['Inter'] capitalize">Home</div>
            <div className="text-neutral-800 text-opacity-95 text-sm font-bold font-['Inter'] capitalize">Are you a Creator?</div>
            <div className="text-neutral-800 text-opacity-95 text-sm font-bold font-['Inter'] capitalize">Support</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
