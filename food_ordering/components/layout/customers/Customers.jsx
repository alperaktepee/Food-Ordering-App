import React from "react";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Customers = () => {
  function NextBtn({ onClick }) {
    return (
      <button
        className="bg-primary absolute -bottom-12 left-1/2 flex items-center justify-center w-12 h-12 rounded-full text-white"
        onClick={onClick}
      >
        <IoIosArrowForward />
      </button>
    );
  }
  function PrevBtn({ onClick }) {
    return (
      <button
        className="bg-primary absolute -bottom-12 right-1/2 mx-2 flex items-center justify-center w-12 h-12 rounded-full text-white"
        onClick={onClick}
      >
        <IoIosArrowBack />
      </button>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="lg:mx-52 sm:mx-12 xs:mx-8 mb-8  py-12">
      <div>
        <Title addClass={"text-4xl mb-10 text-center"}>
          What Says Our Customers
        </Title>
      </div>
      <div>
        <Slider {...settings}>
          <div>
            <CustomerItem />
          </div>
          <div>
            <CustomerItem />
          </div>
          <div>
            <CustomerItem />
          </div>
          <div>
            <CustomerItem />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Customers;
