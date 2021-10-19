const MainContent = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-thirds lg:items-stretch">
      <div className="pt-16 lg:pt-0">
        <img
          src="./images/imagedark.jpg"
          alt=""
          className="lg:h-full object-cover lg:w-full"
        />
      </div>
      <div className="text-black px-8 lg:p-12 lg:h-full lg:flex lg:flex-col lg:align-center lg:justify-center">
        <h2 className="text-2xl mt-8  lg:text-2xl">ABOUT OUR FURNITURE</h2>
        <p className="text-gray-800 text-sm lg:text-md mt-4">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className="pt-16 lg:pt-0">
        <img
          src="./images/imagelight.jpg"
          alt=""
          className="lg:h-full object-cover lg:w-full"
        />
      </div>
    </div>
  );
};

export default MainContent;
