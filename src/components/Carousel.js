import Header from './Header';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

const Carousel = ({ navbarOpen, handleNavbar }) => {
  return (
    <div classname="bg-mobile1">
      <Header navbar={navbarOpen} onClick={handleNavbar} />
      <div className="flex flex-col justify-end text-lg text-white">
        <img src="images/mobile-image-hero-1.jpg" />
        <button className="fixed right-14 bg-black px-6 py-4">&lt;</button>
        <button className="fixed right-0 bg-black px-6 py-4">&gt;</button>
      </div>
    </div>
  );
};

export default Carousel;
