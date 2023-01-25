import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Home from "./home";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin={true} />
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Home />
      {/* <h1 className="text-center h-screen bg-primary">Food Ordering</h1> */}
   
    </>
  );
}
