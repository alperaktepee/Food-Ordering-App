import React from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
const MenuItem = () => {
  return (
    <div className="bg-secondary rounded-2xl  mx-2 my-4 text-white">
      <div className="relative bg-gray-100 rounded-xl  overflow-hidden">
        <div className="py-10 hover:transition-all hover:scale-105">   <Image className="mx-auto" src="/images/f1.png" alt="" width={150} height={150} /></div>
     
      </div>
      <div className="px-5 py-2">
        <h4 className="my-2">Delicious Pizza</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet sequi
          minima dolorem nobis accusantium obcaecati et provident, quas facere
        </p>
        <div className="flex justify-between px-2 py-3 items-center">
            <span>20$</span>
            <button className="bg-primary text-white px-2 py-2 rounded-full"><FaShoppingCart/></button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
