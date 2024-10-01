import React, { useState } from 'react';

const FullScreenPhoto = ({ src, alt }) => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    return (
        <div className={`group cursor-pointer transition ${isFullScreen ? "fixed bg-opacity-85 inset-0 w-full h-screen z-50 bg-[#000000] flex justify-center items-center" : "relative w-full h-full"}`}>
            <img src={src} alt="" className={`rounded-lg cursor-pointer ${isFullScreen?"w-[90%] h-[80%] object-contain":"w-full h-full object-cover"}`} />
            <div onClick={() => setIsFullScreen(!isFullScreen)} className={`bg-[#000000] opacity-0 flex justify-center items-center absolute z-10 h-full w-full inset-0 rounded-lg ${isFullScreen ? "" : "group-hover:opacity-75"}`}>
                <span className='text-[#ffffff] font-bold'>View</span>
            </div>
        </div>
    );
};

export default FullScreenPhoto;
