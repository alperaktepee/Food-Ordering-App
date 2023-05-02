import React from "react";
import Image from "next/image";
import Title from "../../components/layout/ui/Title";
const index = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <table>
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>EXTRAS</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              <tr className="relative">
                <td>
                  <Image
                    src="/images/f1.png"
                    alt="food"
                    width={50}
                    height={50}
                  />
                  <span>Good Pizza</span>
                </td>
                <td>
                  <span>Mayonaisse, Ketchup, Hot Sauce</span>
                </td>
                <td>
                  <span>$20</span>
                </td>
                <td>
                  <span>1</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-secondary text-white">
            <Title addClass="text-3xl text-center mt-8 mb-8">Card Total</Title>
       <div className="flex flex-col items-center gap-1">
        <span>Subtotal: $20.00</span>
        <span>Discount: $0.00</span>
        <span>Total: $20.00</span>
       </div>
      <button className="btn btn-primary mt-8 mx-12 mb-8"> Checkout Now</button>
        </div>
      </div>
    </div>
  );
};

export default index;
