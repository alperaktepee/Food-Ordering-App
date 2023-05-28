import Image from "next/image";
import React from "react";

const CustomerItem = () => {
  return (
    <div className="mx-4">
      <div className="p-6 bg-secondary text-white rounded-[5px]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          dicta consequuntur, eligendi cumque autem laborum fugiat ea nostrum
          velit labore facilis non distinctio culpa adipisci corporis magnam
          facere voluptatibus molestias.
        </p>
        <div className="mt-5">
            <span className="text-lg font-semibold">Camille Adamus</span>

        </div>
      </div>
      <div className="relative mx-2 my-2">
        <div className="image-container-customers rounded-full border-4 border-primary overflow-hidden w-28 h-28">
          <div className="image-wrapper w-28 h-28">
            <Image src="/images/client1.jpg" alt="" width={150} height={150} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerItem;
