import React from "react";
import Image from "next/image";
import Title from "../../components/layout/ui/Title";
import Head from "next/head";
const Products = () => {
  return (
    <>
      {" "}
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="py-40 flex items-center justify-center gap-20">
        <div className="relative w-[450px] h-[450px]">
          <Image src="/images/f1.png" alt="" layout="fill" />
        </div>
        <div className="flex-1">
          <Title addClass="text-6xl">Good Pizza</Title>
          <span>$10</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ea
            repellat, velit in impedit, facilis, molestias fugiat pariatur amet
            magni officia dolor iste laudantium assumenda ab inventore earum
            asperiores aspernatur.
          </p>
          <h4>Choose The Size</h4>
          <div className="flex items-center gap-20">
            <div className="relative w-12 h-12">
              <Image src="/images/size.png" alt="" layout="fill" />
            </div>
            <div className="relative w-16 h-16">
              <Image src="/images/size.png" alt="" layout="fill" />
            </div>
            <div className="relative w-20 h-20">
              <Image src="/images/size.png" alt="" layout="fill" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
