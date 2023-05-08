import React from "react";
import Image from "next/image";
import {FaHome,FaKey,FaMotorcycle,FaSignOutAlt} from "react-icons/fa"
const index = () => {
  return (
    <div>
    
        <div className="flex flex-col  justify-center border m-5 w-1/4 items-center">
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
            <h4>Jane Doe</h4>
          </div>


          <div className="w-full text-center">
          <ul className="text-center font-semibold">
          <li className="border w-full p-3 cursor-pointer flex items-center justify-center hover:bg-primary hover:text-white transition-all">
           <FaHome />
            <button className="ml-1 ">Account</button>
          </li>
          <li className="border w-full p-3 cursor-pointer flex items-center justify-center hover:bg-primary hover:text-white transition-all">
          <FaKey />
            <button className="ml-1">Password</button>
          </li>
          <li className="border w-full p-3 cursor-pointer flex items-center justify-center hover:bg-primary hover:text-white transition-all">
          <FaMotorcycle />
            <button className="ml-1">Orders</button>
          </li>
          <li className="border w-full p-3 cursor-pointer flex items-center justify-center hover:bg-primary hover:text-white transition-all">
            <FaSignOutAlt/>
            <button className="ml-1">Exit</button>
          </li>
        </ul>
        </div>
        </div>


      <div></div>
    </div>
  );
};

export default index;
