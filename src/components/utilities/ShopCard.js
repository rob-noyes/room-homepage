const ShopCard = ({ title, text, image }) => {
  return (
    <div className="flex flex-col w-4/6 h-auto bg-gray-200 border-black  m-3 rounded-lg">
      <img className="p-2" src={image} alt="" />
      <h3 className="p-2 text-lg">{title}</h3>
      <p className="p-2 text-sm">{text}</p>
    </div>
  );
};

export default ShopCard;
