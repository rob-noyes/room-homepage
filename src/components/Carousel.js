//Carousel for images, when buttons clicked the image changes

const Carousel = () => {
  return (
    <div>
      <div className="flex flex-col justify-end text-lg text-white">
        <img
          src="images/mobile1.jpg"
          alt="contemporary chairs on dispaly by table"
          className="object-contain"
        />
        <button className="absolute right-14 bg-black px-6 py-4">&lt;</button>
        <button className="absolute right-0 bg-black px-6 py-4">&gt;</button>
      </div>
    </div>
  );
};

export default Carousel;
