import React from "react";
import Title from "../../components/layout/ui/Title";


const Order = () => {
  return (
    <div className="mt-5 md:ml-2 w-3/4 mr-4 ml-[12.5%]">
      <Title addClass="text-4xl text-center md:text-left">Orders</Title>
      <div>
        <div className="flex items-center lg:flex-row flex-col justify-between mb-5 mt-5">
          <div className="w-full">
            <div className="overflow-x-auto">
              <table className="text-sm w-full text-center text-gray-500">
                <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      PRODUCT
                    </th>
                    <th scope="col" className="py-3 px-6">
                      CUSTOMER
                    </th>
                    <th scope="col" className="py-3 px-6">
                      TOTAL
                    </th>
                    <th scope="col" className="py-3 px-6">
                      PAYMENT
                    </th>
                    <th scope="col" className="py-3 px-6">
                      STATUS
                    </th>
                    <th scope="col" className="py-3 px-6">
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="relative bg-secondary text-gray-400">
                  <td className="py-4 px-6 whitespace-nowrap font-medium">
                    <span>63632453271</span>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap font-medium">
                      <span>Alper Aktepe</span>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap font-medium">
                      <span>$18</span>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap font-medium">
                      <span>Cash</span>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap font-medium">
                      <span>Preparing</span>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap font-medium">
                      <span>
                        <button className="bg-green-600 text-white rounded-md px-5 py-2">Next Stage</button>
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

export default Order;
