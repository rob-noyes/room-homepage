import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = ({ navbar, onClick }) => {
  return (
    <nav
      className={
        'absolute py-5 z-10 lg:flex' +
        (navbar ? ' ' : ' bg-none lg:justify-start')
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
        <h3 className={navbar ? 'hidden ' : 'py-4 text-white'}>
          <Link to="/">room</Link>
        </h3>
      </div>
      <div className="lg:absolute lg:left-32 lg:px-4 lg:text-white lg:pt-14 lg:pl-16">
        <ul
          className={
            navbar
              ? ' transition-all duration-500 flex flex-row w-screen justify-end text-lg h-20 pr-2 items-center '
              : ' transition-all duration-500 hidden lg:flex '
          }
        >
          <li className="px-2 lg:px-4">
            <Link to="/">home</Link>
          </li>
          <li className="px-2 lg:px-4">
            <Link to="/shop">shop</Link>
          </li>
          <li className="px-2 lg:px-4">
            <Link to="/about">about</Link>
          </li>
          <li className="px-2 lg:px-4">
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
