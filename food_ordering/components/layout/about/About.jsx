import React from "react";
import Image from "next/image";
import Title from "../ui/Title";
const About = () => {
  return (
    <div className="bg-secondary flex px-8 flex-col-reverse md:px-16 lg:px-32 sm:px-16 py-24 justify-center items-center gap-20 md:flex-row sm:flex-col-reverse">
      <div>
        <div className="relative w-[245px] h-[400px] lg:w-[345px] lg:h-[500px] xl:w-[445px] xl:h-[600px] ">
          <Image  src="/images/about-img.png" layout="fill"/>
        </div>
      </div>

      <div>
        <Title addClass="text-white text-4xl mb-4">We Are Feane</Title>
        <p className="text-white mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolorem
          suscipit. Possimus labore, temporibus minima obcaecati numquam dolores
          suscipit! Nostrum aliquam hic architecto, ullam maxime suscipit at
          iusto eveniet maiores? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Iste, dolorem suscipit. Possimus labore, temporibus
          minima obcaecati numquam dolores suscipit! Nostrum aliquam hic
          architecto, ullam maxime suscipit at iusto eveniet maiores?
        </p>
        <button className="btn-primary">Read More</button>
      </div>
    </div>
  );
};

export default About;
