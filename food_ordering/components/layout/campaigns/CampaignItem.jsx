import React from "react";
import Image from "next/image";
import Title from "../ui/Title";
import { FaShoppingCart } from "react-icons/fa";

const CampaignItem = (props) => {
  return (

    <div className=" lg:w-1/2 sm:w-1/2 mx-2 w-full h-full bg-secondary rounded-md border-lime-400 flex my-4 py-4 justify-center ">
      <div className="relative mx-2">
        <div className="image-container rounded-full border-4 border-primary overflow-hidden">
          <div className="image-wrapper">
            <Image src={props.image} alt="" width={150} height={150} />
          </div>
        </div>
      </div>
      <div className="mx-2">
        <Title addClass="text-white text-sm sm:text-lg mt-5 ">
          <p>{props.title}</p>
          <p className="text-2xl">{props.discount}</p>
        </Title>
        <button className="btn-primary mt-5 flex items-center">
          Order Now{" "}
          <span className="ml-2">
            <FaShoppingCart />
          </span>{" "}
        </button>
      </div>
    </div>
  );
};

export default CampaignItem;
