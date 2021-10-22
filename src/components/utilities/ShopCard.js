//Shopping Card Component, layout of image, title, text, buttons for adding to cart
const ShopCard = ({ title, text, image, product, clickAdd }) => {
  return (
    <div className="flex flex-col w-full h-full border-black rounded-lg text-center shadow-lg">
      <img className="pb-4 w-full h-full rounded-lg" src={image} alt="" />
      <h3 className="p-2 text-lg ">{title}</h3>
      <p className="p-2 mb-4 text-sm">{text}</p>
      {/* <div className="flex flex-row justify-between p-4">
        <div>
          <button className="px-4 py-2 shadow-xl rounded-full">+</button>
          <button className="px-4 py-2 shadow-xl rounded-full">-</button>
        </div>

        <input
          className="text-center border-2 w-3/6 rounded-full border-black"
          type="number"
          placeholder="1"
        />
      </div> */}

      <button
        onClick={clickAdd}
        value={product}
        className="p-4 bg-black text-white rounded-lg"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ShopCard;
