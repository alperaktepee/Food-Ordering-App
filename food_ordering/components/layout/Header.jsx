import Logo from "./ui/Logo";
import { useState } from "react";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import Search from "./ui/Search";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import {useRouter} from 'next/router'
import Link from "next/link"
const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
const router = useRouter();
console.log("router as path:",router.asPath);
  const modalHandler = () => {
    setIsSearchModal(true);
  };

  return (
    <div className={`h-[5.5rem] relative z-40 ${router.asPath==="/" ? "bg-transparent" : "bg-secondary"}`}>
      <div className="container mx-auto text-white flex justify-around items-center h-full">
        <div>
          <Logo />
        </div>
        <nav
          className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white md:flex hidden ${
            isMenuModal === true && "!grid place-content-center"
          }`}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col">
            <li className="px-2 py-5 hover:text-primary cursor-pointer">
              <Link href="/">HOME</Link>
            </li>
            <li className="px-2 py-5 hover:text-primary cursor-pointer">
              <Link href="/menu">MENU</Link>
            </li>
            <li className="px-2 py-5 hover:text-primary cursor-pointer">
              <Link href="/about">ABOUT</Link>
            </li>
            <li className="px-2 py-5 hover:text-primary cursor-pointer">
              <Link href="/book-table">BOOK TABLE</Link>
            </li>
          </ul>
          {isMenuModal && (
            <button
              className="absolute  top-4 right-4 z-50"
              onClick={() => setIsMenuModal(false)}
            >
              <GiCancel size={25} className=" transition-all" />
            </button>
          )}
        </nav>
        <div className="flex gap-x-4 items-center">
          <Link href="/auth/login">
            <FaUserAlt className="hover:text-primary transition-all" />
          </Link>
          <a href="">
            <FaShoppingCart className="hover:text-primary transition-all" />
          </a>

          <button onClick={modalHandler}>
            <FaSearch className="hover:text-primary transition-all" />
          </button>
          <a href="" className="md:inline-block hidden">
            <button className="btn-primary">Order Online</button>
          </a>
          <button className="md:hidden inline-block">
            <GiHamburgerMenu
              onClick={() => setIsMenuModal(true)}
              className="text-2xl hover:text-primary
             transition-all"
            />
          </button>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
