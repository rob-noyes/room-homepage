const Tile = ({ header, text }) => {
  return (
    <div className="text-black px-8">
      <h2 className="text-2xl font-semibold">{header}</h2>
      <p className="text-gray-800 text-xs mt-4">{text}</p>
    </div>
  );
};

export default Tile;
