import React from "react";
import Title from "./ui/Title";
import { MdLocationPin, MdCall, MdEmail } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-secondary text-white lg:px-32 md:px-24 sm:px-8 py-16 text-sm">
      <div className="flex sm:justify-between md:flex-row flex-col items-center md:items-start gap-20">
        <div className="w-1/3 text-center flex flex-col gap-2">
          <Title addClass="text-[30px] md:mb-12 mb-6">Contact Us</Title>
          <div className="flex items-center justify-center gap-1">
            <span>
              <MdLocationPin />
            </span>
            <span>Location</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <span>
              <MdCall />
            </span>
            <span>Call +01 123 456 789</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <span>
              <MdEmail />
            </span>
            <span>demo@gmail.com</span>
          </div>
        </div>
        <div className="w-1/3 text-center">
          <Title addClass="text-[30px]">Feane</Title>
          <div className="md:mt-12 mt-6">
            <p>
              Necessary, making this the first true generator on the internet.
              It uses a dictionary of over 200 Latin words, combined with
            </p>
            <div className="flex justify-center gap-1 mt-4">
              <FaFacebook className="rounded-full text-2xl" />
              <FaInstagram className="rounded-full text-2xl" />
              <FaTwitter className="rounded-full text-2xl" />
              <FaLinkedin className="rounded-full text-2xl" />
              <FaPinterest className="rounded-full text-2xl" />
            </div>
          </div>
        </div>
        <div className="w-1/3 text-center">
          <Title addClass="text-[30px]  md:mb-12 mb-6">Opening Hours</Title>
          <p className="mb-4">Everyday</p>
          <p>10.00 AM - 10.00 PM</p>
        </div>
      </div>
      <div>
        <p className="text-center mt-20 ">
          © 2022 All Rights Reserved By Free Html Templates
        </p>
      </div>
    </div>
  );
};

export default Footer;
