import React, { useState } from "react";
import Image from "next/image";
import { FaHamburger, FaMotorcycle,FaLaptop, FaSignOutAlt } from "react-icons/fa";
import {BiCategoryAlt} from "react-icons/bi"
import Categories from "./Categories";
import Products from "./Products";
import Order from "./Order";
import Footer from "./Footer";
const index = () => {
  const [tabs, setTabs] = useState(0);
  return (
    <div className="flex md:flex-row flex-col">
      <div className="flex flex-col  justify-center border m-5 md:w-1/4 items-center md:ml-2 sm:ml-[25%] sm:w-1/2 w-3/4 ml-[12.5%] h-full ">
        <div className="relative pt-6">
          <Image
            src="/images/client1.jpg"
            alt="profile-picture"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <div className="pb-6">
          <h4>Admin</h4>
        </div>

        <div className="w-full text-center">
          <ul className="text-center font-semibold">
            <li
              className={`border w-full p-3 cursor-pointer flex items-center justify-center ${
                tabs === 0 && "bg-primary text-white"
              } transition-all`}
              onClick={() => setTabs(0)}
            >
              <FaHamburger/>
              <button className="ml-1">Products</button>
            </li>
            <li
              onClick={() => setTabs(1)}
              className={`border w-full p-3 cursor-pointer flex items-center justify-center ${
                tabs === 1 && "bg-primary text-white"
              } transition-all`}
            >
              <FaMotorcycle />
              <button className="ml-1">Orders</button>
            </li>
            <li
              onClick={() => setTabs(2)}
              className={`border w-full p-3 cursor-pointer flex items-center justify-center ${
                tabs === 2 && "bg-primary text-white"
              } transition-all`}
            >
              <BiCategoryAlt />
              <button className="ml-1">Categories</button>
            </li>
            <li
              onClick={() => setTabs(3)}
              className={`border w-full p-3 cursor-pointer flex items-center justify-center ${
                tabs === 3 && "bg-primary text-white"
              } transition-all`}
            >
              <FaLaptop />
              <button className="ml-1">Footer</button>
            </li>
            <li
              onClick={() => setTabs(3)}
              className={`border w-full p-3 cursor-pointer flex items-center justify-center ${
                tabs === 4 && "bg-primary text-white"
              } transition-all`}
            >
              <FaSignOutAlt />
              <button className="ml-1">Exit</button>
            </li>
          </ul>
        </div>
      </div>
      { tabs===0 ? <Products /> : null}
     {tabs===1 ? <Order /> : null}
     {tabs===2 ? <Categories/>:null}
     {tabs===3 ? <Footer/>:null}
    </div>
  );
};

export default index;
