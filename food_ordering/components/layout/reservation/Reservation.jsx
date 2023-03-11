import React from "react";
import Input from "../../Input";
import Title from "../ui/Title";

const Reservation = () => {
  return (
    <div className=" sm:mx-12 py-12">
      <div>
        <Title addClass={"text-4xl mb-10 lg:text-start lg:mx-24 text-center"}>
          Book A Table
        </Title>
      </div>
      <div className="flex justify-between flex-wrap lg:flex-nowrap ">
        <div className="lg:flex-1 w-full flex flex-col items-center justify-start lg:ml-24 l mx-5 gap-y-3">
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
            <button className="btn-primary mt-5 mb-5">
              BOOK NOW
            </button>
      
        </div>

        <div className="flex lg:flex-1 justify-center w-full lg:mr-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d698.3290248124322!2d-74.01012888875584!3d40.71323161747501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19205390e5%3A0xbf0d0a650cf696d8!2sSalad%20Box!5e0!3m2!1str!2str!4v1678536964471!5m2!1str!2str"
            width="600"
            height="400"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
