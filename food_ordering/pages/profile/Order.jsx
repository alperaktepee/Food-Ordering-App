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
                      ORDER ID
                    </th>
                    <th scope="col" className="py-3 px-6">
                      DATE
                    </th>
                    <th scope="col" className="py-3 px-6">
                      CUSTOMER
                    </th>
                    <th scope="col" className="py-3 px-6">
                      ADDRESS
                    </th>
                    <th scope="col" className="py-3 px-6">
                      TOTAL
                    </th>
                    <th scope="col" className="py-3 px-6">
                      STATUS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="relative bg-secondary text-gray-400">
                    <td className="py-4 px-6 flex items-center justify-center whitespace-nowrap font-medium">
                      456345878933
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap font-medium">
                     <span>26/05/2023</span> 
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap font-medium">
                      <span>Camille Adamus</span>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap font-medium">
                      <span>Manisa</span>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap font-medium">
                      <span>$65</span>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap font-medium">
                      <span>Preparing</span>
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
