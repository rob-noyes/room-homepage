import Image from './utilities/Image';
const MainContent = () => {
  return (
    <div className="lg:grid lg:grid-cols-thirds lg:h-full">
      <div className="bg-dark bg-cover bg-no-repeat lg:bg-cover">
        <Image src="/images/imagedark.jpg" />
      </div>
      <div className="text-black px-8 lg:p-12 ">
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
      <div className="bg-light bg-cover lg:bg-cover">
        <Image src="/images/imagelight.jpg" />
      </div>
    </div>
  );
};

export default MainContent;
