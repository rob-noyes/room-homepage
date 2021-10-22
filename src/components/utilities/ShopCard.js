//Shopping Card Component, layout of image, title, text, buttons for adding to cart
const ShopCard = ({ title, text, image }) => {
  return (
    <div className="flex flex-col w-10/12 h-auto border-black rounded-lg text-center shadow-xl m-3">
      <img className="pb-4 max-w-full h-4/6 rounded-lg" src={image} alt="" />
      <h3 className="p-2 text-lg ">{title}</h3>
      <p className="p-2 mb-4 text-sm">{text}</p>
      <button className=" p-4 bg-black text-white rounded-lg">
        Add To Cart
      </button>
    </div>
  );
};

export default ShopCard;
