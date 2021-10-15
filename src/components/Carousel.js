//Carousel for images, when buttons clicked the image changes
import Tile from './utilities/Tile';

const Carousel = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-end text-lg text-white">
        <img
          src="images/mobile1.jpg"
          alt="contemporary chairs on dispaly by table"
          className="object-contain"
        />
        <button className="absolute right-14 bg-black px-6 py-4">
          <img src="images/icon-angle-left.svg" alt="arrow left" />
        </button>
        <button className="absolute right-0 bg-black px-6 py-4">
          <img src="images/icon-angle-right.svg" alt="arrow right" />
        </button>
      </div>
      <div className="pt-16">
        <Tile
          header={'Discover innovative ways to decorate'}
          text={
            'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
          }
        />
        <button className="text-sm px-8 mt-4 py-4 tracking-realwide flex items-center justify-center">
          SHOP NOW
          <img className="px-8 te" src="/images/icon-arrow.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
