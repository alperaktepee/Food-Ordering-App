import Logo from "./ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="h-[5.5rem] bg-secondary">
      <div className="container mx-auto text-white flex justify-around items-center h-full">
        <div>
          <Logo />
        </div>
        <nav>
          <ul className="flex gap-x-2">
            <li className="px-2 py-5 hover:text-primary cursor-pointer">
              <a href="">HOME</a>
            </li>
            <li className="px-2 py-5 hover:text-primary cursor-pointer">
              <a href="">MENU</a>
            </li>
            <li className="px-2 py-5 hover:text-primary cursor-pointer">
              <a href="">ABOUT</a>
            </li>
            <li className="px-2 py-5 hover:text-primary cursor-pointer">
              <a href="">BOOK TABLE</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-4 items-center">
          <a href="">
            <FaUserAlt />
          </a>
          <a href="">
            <FaShoppingCart />
          </a>

          <a href="">
            <FaSearch />
          </a>
          <a href="">
            <button className="btn-primary">Order Online</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
