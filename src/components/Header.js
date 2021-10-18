import { FaBars } from 'react-icons/fa';

const Header = ({ navbar, onClick }) => {
  return (
    <nav
      className={
        'absolute py-5 z-10 lg:flex' +
        (navbar ? 'bg-white' : ' bg-none lg:justify-start')
      }
    >
      <button
        className={
          navbar
            ? 'absolute left-0 m-3 p-4 pt-4 text-2xl lg:hidden text-black'
            : 'absolute left-0 m-3 p-4 pt-4 text-2xl lg:hidden lg:m-0 text-white'
        }
        onClick={onClick}
      >
        <FaBars />
      </button>
      <div className="flex w-screen justify-center text-4xl lg:flex lg:justify-start text-white lg:pt-8 lg:pl-12">
        <h3 className={navbar ? 'hidden ' : 'py-4'}>room</h3>
      </div>
      <div className="lg:absolute lg:left-32 lg:px-4 lg:text-white lg:pt-14 lg:pl-16">
        <ul
          className={
            navbar
              ? ' transition-all duration-500 flex flex-row w-screen justify-end text-lg h-20 pr-2 items-center '
              : ' transition-all duration-500 hidden lg:flex '
          }
        >
          <li className="px-2 lg:px-4">home</li>
          <li className="px-2 lg:px-4">shop</li>
          <li className="px-2 lg:px-4">about</li>
          <li className="px-2 lg:px-4">contact</li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
