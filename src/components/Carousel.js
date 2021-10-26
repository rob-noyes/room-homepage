//Carousel for images, when buttons clicked the image changes
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Tile from './utilities/Tile';

const Carousel = () => {
  const [largeImage] = useState([
    {
      src: './room-homepage/images/desktop1.jpg',
      title: 'Discover innovative ways to decorate',
      text: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    },
    {
      src: './room-homepage/images/desktop2.jpg',
      title: 'We are available all across the globe',
      text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
      src: './room-homepage/images/desktop3.jpg',
      title: 'Manufactured with the best materials',
      text: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
    },
  ]);
  //state for the current image and text position from largeimage array
  const [currentPosition, setCurrentPosition] = useState(0);
  let currentImage = largeImage[currentPosition];

  //clicking right ternary operator, if position is not equal to end of the array, go to one positon right, otherwise set it to the beginning
  const rightClick = () => {
    currentPosition !== largeImage.length - 1
      ? setCurrentPosition(currentPosition + 1)
      : setCurrentPosition(0);
    currentImage = largeImage[currentPosition];
  };

  //Same setup as right click, but finding if the position is not equal to 0
  const leftClick = () => {
    currentPosition !== 0
      ? setCurrentPosition(currentPosition - 1)
      : setCurrentPosition(largeImage.length - 1);
    currentImage = largeImage[currentPosition];
  };

  return (
    <div className="lg:grid lg:grid-cols-divide lg:h-full">
      {/* image will change based on the currentImage variable  */}
      <div className="transition-all duration-500 ease-in flex flex-col justify-end text-lg text-white lg:w-full lg:flex-col">
        <img
          src={currentImage.src}
          alt="contemporary chairs on display by table"
          className="object-cover lg:w-auto lg:h-full"
        />
      </div>

      <div className="lg:flex lg:flex-col lg:align-center lg:justify-between">
        <div className="flex flex-row justify-end lg:hidden">
          {/* Buttons will run with click event through react functiona component */}
          <button
            onClick={leftClick}
            className="bg-black px-6 py-4 lg:px-8 lg:py-6"
          >
            <img
              src="room-homepage/images/icon-angle-left.svg"
              alt="arrow left"
            />
          </button>
          <button
            onClick={rightClick}
            className="bg-black px-6 py-4 lg:px-8 lg:py-6"
          >
            <img
              src="room-homepage/images/icon-angle-right.svg"
              alt="arrow right"
            />
          </button>
        </div>
        <div className="pt-8 lg:my-middle lg:mb-12">
          <Tile header={currentImage.title} text={currentImage.text} />
          <div className="flex flex-row">
            <Link to="/shop">
              <h3 className="text-sm px-8 mt-4 py-4 tracking-realwide flex lg:px-14">
                SHOP NOW
                <img
                  className="px-6"
                  src="./room-homepage/images/icon-arrow.svg"
                  alt=""
                />
              </h3>
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-row">
          <button
            onClick={leftClick}
            className="bg-black px-6 py-4 lg:px-8 lg:py-6"
          >
            <img
              src="room-homepage/images/icon-angle-left.svg"
              alt="arrow left"
            />
          </button>
          <button
            onClick={rightClick}
            className="bg-black px-6 py-4 lg:px-8 lg:py-6"
          >
            <img
              src="room-homepage/images/icon-angle-right.svg"
              alt="arrow right"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
