import React, { useState } from "react";
import {srvimage} from "../../assets/index";


const SrvImages = () => {
 

  const [mainImage, setMainImage] = useState(srvimage[0]);

  return (
    <div className="flex flex-col gap-y-4  w-full md:w-1/2 ">
      {/* Main Image */}
      <div className="w-full ">
        <img src={mainImage} alt="Main" className="w-full rounded-xl" />
      </div>

      {/* Thumbnails */}
      <div className="flex flex-col md:flex-row gap-y-4 justify-between w-full   ">
        {srvimage.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx + 1}`}
            onClick={() => setMainImage(img)}
            className="rounded-lg md:h-24  object-cover cursor-pointer hover:opacity-80 transition"
          />
        ))}
      </div>
    </div>
  );
};

export default SrvImages;
