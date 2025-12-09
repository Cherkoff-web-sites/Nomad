import React from 'react';

const ImageVideo = ({ image, video, reverse = false, heightCustom = "xl:h-[710px]", widthImage = "w-[49%]", widthVideo = "w-[49%]" }) => {
  return (
    <div className={`flex justify-between mt-5 md:mt-[50px] ${reverse ? 'flex-row-reverse' : ''}`}>
      <img src={image} alt="image" className={`${widthImage} xl:w-auto h-auto object-cover`} loading='lazy'/>
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className={`${widthVideo} xl:w-[598px] h-auto ${heightCustom}`}
      ></video>
    </div>
  );
};

export default ImageVideo;

