import React from 'react'
import { FaPlus } from "react-icons/fa6";

const VideoUpload = () => {
  return (
    <div className="flex">
        <label for="dropzone-file" className="flex flex-col items-center justify-end w-[283.64px] h-[312px] cursor-pointer bg-gray-200 rounded-3xl hover:bg-gray-100">
            <div className="flex items-center py-16">
                <FaPlus className="text-4xl text-[#959595]" />
            </div>
            <div className="flex flex-col items-center pt-5 pb-6">
                <div className="w-[222px] text-center text-[#959595] text-sm font-normal font-['Inter'] leading-snug tracking-wide">You haven’t uploaded any videos with aBit yet. Add now!</div>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
        </label>
    </div> 
  )
}

export default VideoUpload
