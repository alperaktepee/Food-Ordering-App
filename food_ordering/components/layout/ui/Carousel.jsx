import React from "react";
import Image from "next/image";
import Title from "./Title";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:5000,
    customPaging:(i)=>(
        <div className="w-3 h-3 bg-white rounded-full mt-10"></div>
    )

    
  };
  return (
  <div>
    <div className="h-screen relative -top-[88px]">
        
      <div className="relative h-full w-full">
        
        <Image
          src="/images/hero-bg.jpg"
          objectFit="cover"
          layout="fill"
          alt=""
        />
      </div>
    </div>
    <div>
    <Slider className="absolute top-36 container w-4/5  mx-auto text-white" {...settings}>
        
        <div className="pl-12 sm:pl-32">
          <Title addClass="text-[36px] sm:text-[54px] my-2">
            Fast Food Restaurant
          </Title>
          <p className="text-sm w-4/5 md:w-2/5 my-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
            aut! Aspernatur est nesciunt iusto quo aut maiores placeat
            veniam eveniet consequatur maxime aliquid, dolor nemo ea quam.
          </p>
          <button className="btn-primary mt-4">Order Now</button>
        </div>
 
        <div className="pl-12 sm:pl-32">

          <Title addClass="text-[36px] sm:text-[54px] my-2">
            Fast Food Restaurant
          </Title>
          <p className="text-sm w-4/5 md:w-2/5 my-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
            aut! Aspernatur est nesciunt iusto quo aut maiores placeat
            veniam eveniet consequatur maxime aliquid, dolor nemo ea quam.
          </p>
          <button className="btn-primary mt-4">Order Now</button>
        </div>
    </Slider>
    </div>
   
    </div>
  );
};

export default Carousel;
