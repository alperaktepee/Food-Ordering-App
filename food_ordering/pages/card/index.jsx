import React from "react";
import Image from "next/image";
import Title from "../../components/layout/ui/Title";
import { useSelector,useDispatch } from "react-redux";
import { reset } from "../../redux/cardSlice";
const index = () => {
  const card=useSelector((state)=>state.card)
 const dispatch = useDispatch();
  return (
    <div>
      <div className="flex items-center lg:flex-row flex-col justify-between">
        <div className="w-full flex-1">
          <div className="overflow-x-auto">
            <table className="text-sm w-full text-center text-gray-500">
              <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    PRODUCT
                  </th>
                  <th scope="col" className="py-3 px-6">
                    EXTRAS
                  </th>
                  <th scope="col" className="py-3 px-6">
                    PRICE
                  </th>
                  <th scope="col" className="py-3 px-6">
                    QUANTITY
                  </th>
                </tr>
              </thead>
              <tbody>
                {card.products.map((val)=>(
                       <tr key={val.id} className="relative bg-secondary text-gray-400">
                  <td className="py-4 px-6 flex items-center justify-center whitespace-nowrap font-medium">
                    <Image
                      src="/images/f1.png"
                      alt="food"
                      width={50}
                      height={50}
                    />
                    <span className="mx-1">{val.name}</span>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap font-medium">
                    <span>{val.extras.map((item)=>(
                     <span key={item.id}> {item.name},</span>
                    ))}</span>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap font-medium">
                    <span>${val.price}</span>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap font-medium">
                    <span>{val.quantity}</span>
                  </td>
                </tr>   
                ))}
        
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-secondary text-white mt-8 mb-8 lg:mt-0 lg:mb-0 lg:px-0 md:px-40 sm:px-24 xs:px-16">
          <Title addClass="text-3xl text-center mt-8 mb-8">Card Total</Title>
          <div className="flex flex-col items-center gap-1">
            <span>Subtotal: ${card.total}</span>
            <span>Discount: $0.00</span>
            <span>Total: ${card.total}</span>
          </div>
          <button className="btn btn-primary mt-8 mx-12 mb-8" onClick={()=>dispatch(reset())}>
            Checkout Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
