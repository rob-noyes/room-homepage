import React, { useState } from 'react';
import Tile from './Tile';

const ImagePicker = () => {
  const [image] = useState([
    {
      src: '/images/mobile1.jpg',
      title: 'Discover innovative ways to decorate',
      text: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    },
    {
      src: '/images/mobile2.jpg',
      title: 'We are available all across the globe',
      text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
      src: '/images/mobile3.jpg',
      title: 'Manufactured with the best materials',
      text: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
    },
  ]);

  const [largeImage] = useState([
    {
      src: '/images/desktop1.jpg',
      title: 'Discover innovative ways to decorate',
      text: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    },
    {
      src: '/images/desktop2.jpg',
      title: 'We are available all across the globe',
      text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
      src: '/images/desktop3.jpg',
      title: 'Manufactured with the best materials',
      text: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
    },
  ]);
  const [currentPosition, setCurrentPosition] = useState(0);
  let currentImage = image[currentPosition];
  let currentImageLarge = largeImage[currentPosition];

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
    <div className="lg:grid lg:grid-cols-divide">
      <div className="transition-all duration-500 ease-in flex flex-col justify-end text-lg text-white lg:w-full lg:h-full">
        <img
          src={currentImageLarge.src}
          alt="contemporary chairs on display by table"
          className="object-contain lg:w-auto lg:h-full"
        />
      </div>

      <div className="pt-16 lg:flex lg:flex-col lg:align-center lg:justify-center">
        <button
          onClick={leftClick}
          className="absolute right-14 top-46 bg-black px-6 py-4 lg:flex"
        >
          <img src="images/icon-angle-left.svg" alt="arrow left" />
        </button>
        <button
          onClick={rightClick}
          className="absolute right-0 top-46 bg-black px-6 py-4"
        >
          <img src="images/icon-angle-right.svg" alt="arrow right" />
        </button>
        <Tile header={currentImage.title} text={currentImage.text} />
        <button className="text-sm px-8 mt-4 py-4 tracking-realwide flex items-center justify-center lg:px-14">
          SHOP NOW
          <img className="px-8" src="/images/icon-arrow.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
