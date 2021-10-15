import { FaBars } from 'react-icons/fa';

const Header = ({ navbar, onClick }) => {
  return (
    <nav className={'flex flex-row ' + (navbar ? ' bg-white' : 'bg-grey-400')}>
      <button
        className="text-black m-3 p-3 text-4xl lg:hidden"
        onClick={onClick}
      >
        <FaBars />
      </button>
      <div className={navbar ? '' : 'hidden'}>
        <ul className="flex flex-row">
          <li>home</li>
          <li>shop</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
      <div className="">
        <h3 className={navbar ? 'hidden' : ''}>room</h3>
      </div>
    </nav>
  );
};
export default Header;
