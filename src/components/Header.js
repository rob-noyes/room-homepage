import { FaBars } from 'react-icons/fa';

const Header = ({ navbar, onClick }) => {
  return (
    <nav
      className={
        'fixed flex-row justify-center py-5 z-10 ' +
        (navbar ? 'bg-white' : ' bg-none lg:justify-start lg:p-10')
      }
    >
      <button
        className={
          navbar
            ? 'fixed left-0 m-3 p-3 pt-4 text-2xl lg:hidden text-black'
            : 'fixed left-0 m-3 p-3 pt-4 text-2xl lg:hidden text-white'
        }
        onClick={onClick}
      >
        <FaBars />
      </button>
      <div className="flex w-screen justify-center text-4xl lg:flex text-white">
        <h3 className={navbar ? 'hidden ' : 'py-4'}>room</h3>
      </div>
      <div className="lg:flex lg:items-center lg:justify-center lg:px-4">
        <ul
          className={
            navbar
              ? ' transition-all duration-500 flex flex-row w-screen justify-end text-xl h-20 pr-4 items-center '
              : ' transition-all duration-500 hidden lg:flex '
          }
        >
          <li className="px-2 lg:px-4">home</li>
          <li className="px-2 lg:px-4">shop</li>
          <li className="px-2 lg:px-4">about</li>
          <li className="px-2 lg:px-4 lg:m-0">contact</li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
