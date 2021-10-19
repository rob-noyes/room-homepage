const MainContent = () => {
  return (
    <div className="lg:grid lg:grid-cols-thirds h-auto">
      <div className="bg-dark bg-fill bg-center bg-no-repeat lg:bg-cover h-64 lg:h-full"></div>
      <div className="text-black px-8 lg:p-12 lg:h-full">
        <h2 className="text-2xl mt-8  lg:text-2xl">ABOUT OUR FURNITURE</h2>
        <p className="text-gray-800 text-sm mt-4">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className="bg-light bg-fill bg-center bg-no-repeat lg:bg-cover h-64 lg:h-full"></div>
    </div>
  );
};

export default MainContent;
