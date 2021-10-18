import React, { useState } from 'react';
import Tile from './Tile';

const ImagePicker = () => {
  const [image] = useState([
    {
      value: 0,
      src: '/images/mobile1.jpg',
      title: 'Discover innovative ways to decorate',
      text: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    },
    {
      value: 1,
      src: '/images/mobile2.jpg',
      title: 'We are available all across the globe',
      text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
      value: 2,
      src: '/images/mobile3.jpg',
      title: 'Manufactured with the best materials',
      text: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
    },
  ]);
  const [currentPosition, setCurrentPosition] = useState(0);
  let currentImage = image[currentPosition];

  const rightClick = () => {
    currentPosition !== image.length - 1
      ? setCurrentPosition(currentPosition + 1)
      : setCurrentPosition(0);
    currentImage = image[currentPosition];
  };

  const leftClick = () => {
    currentPosition !== 0
      ? setCurrentPosition(currentPosition - 1)
      : setCurrentPosition(image.length - 1);
    currentImage = image[currentPosition];
  };

  return (
    <div>
      <div className="transition-all duration-500 ease-in flex flex-col justify-end text-lg text-white">
        <img
          src={currentImage.src}
          alt="contemporary chairs on dispaly by table"
          className="object-contain "
        />
        <button
          onClick={leftClick}
          className="absolute right-14 bg-black px-6 py-4"
        >
          <img src="images/icon-angle-left.svg" alt="arrow left" />
        </button>
        <button
          onClick={rightClick}
          className="absolute right-0 bg-black px-6 py-4"
        >
          <img src="images/icon-angle-right.svg" alt="arrow right" />
        </button>
      </div>
      <div className="pt-16">
        <Tile header={currentImage.title} text={currentImage.text} />
        <button className="text-sm px-8 mt-4 py-4 tracking-realwide flex items-center justify-center">
          SHOP NOW
          <img className="px-8 te" src="/images/icon-arrow.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
