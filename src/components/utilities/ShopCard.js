import React from 'react';
//Shopping Card Component, layout of image, title, text, buttons for adding to cart
const ShopCard = ({ title, text, image, item, clickAdd }) => {
  return (
    <div className="flex flex-col w-full h-full border-black rounded-lg text-center shadow-lg md:max-w-lg md:max-h-lg">
      <img className="pb-4 w-full h-full rounded-lg" src={image} alt="" />
      <h3 className="p-2 text-lg ">{title}</h3>
      <p className="p-2 mb-4 text-sm">{text}</p>
      <button
        onClick={clickAdd}
        value={item}
        className="p-2 text-sm bg-white shadow-inner text-black rounded-lg"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default React.memo(ShopCard);
