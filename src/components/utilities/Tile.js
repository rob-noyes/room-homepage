const Tile = ({ header, text }) => {
  return (
    <div className="text-black px-8 lg:px-14 lg:flex lg:flex-col lg:justify-center lg:items-center">
      <h2 className="text-2xl font-semibold lg:text-4xl">{header}</h2>
      <p className="text-gray-800 text-sm lg:text-md mt-4">{text}</p>
    </div>
  );
};

export default Tile;
