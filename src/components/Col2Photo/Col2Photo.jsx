import React from 'react';

const Col2Photo = ({ image1, image2, widthImage1 = "w-[49%]", widthImage2 = "w-[49%]" }) => {
  return (
    <div className="flex justify-between mt-5 md:mt-[20px]">
      <img src={image1} alt="photo" className={`${widthImage1} xl:w-auto h-auto object-cover`} loading='lazy'/>
      <img src={image2} alt="photo" className={`${widthImage2} xl:w-auto h-auto object-cover`} loading='lazy'/>
    </div>
  );
};

export default Col2Photo;
