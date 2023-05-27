import React from "react";
import Title from "../../components/layout/ui/Title";
import Image from "next/image";

const Products = () => {
  return (
    <div className="mt-5 md:ml-2 w-3/4 mr-4 ml-[12.5%]">
      <Title addClass="text-4xl text-center md:text-left">Products</Title>
      <div>
        <div className="flex items-center lg:flex-row flex-col justify-between mb-5 mt-5">
          <div className="w-full">
            <div className="overflow-x-auto">
              <table className="text-sm w-full text-center text-gray-500">
                <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      IMAGE
                    </th>
                    <th scope="col" className="py-3 px-6">
                      ID
                    </th>
                    <th scope="col" className="py-3 px-6">
                      TITLE
                    </th>
                    <th scope="col" className="py-3 px-6">
                      PRICE
                    </th>
                    <th scope="col" className="py-3 px-6">
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="relative bg-secondary text-gray-400">
                    <td className="py-4 px-6 flex items-center justify-center whitespace-nowrap font-medium">
                    <Image width={40} height={40} src="/images/f1.png" alt="" />
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap font-medium">
                      <span>63632453271</span>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap font-medium">
                      <span>Good Pizza</span>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap font-medium">
                      <span>$10</span>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap font-medium">
                      <span>
                        <button className="bg-red-600 text-white rounded-md px-5 py-2">Delete</button>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
