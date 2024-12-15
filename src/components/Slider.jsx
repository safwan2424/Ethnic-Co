import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import img1 from "../assets/ethinc1.jpg";
import img2 from "../assets/ethenic2.jpg";
import img3 from "../assets/Ethenic 3.jpg";
import img4 from "../assets/ethenic4.jpg";
import img5 from "../assets/ethenic 5.jpg";
import img6 from "../assets/First.jpg"
import img7 from "../assets/Second.jpg"

const Slider = () => {
  const images = [img1, img2, img3, img4, img5,img6,img7];

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        className="h-[500px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden"
      >
        {images.map((img, index) => (
        <SwiperSlide key={index} className="bg-gray-100">
         <img
           src={img}
           alt={`Slide ${index + 1}`}
           className="w-full h-full object-contain"
         />
       </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        className="custom-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600 transition duration-300 z-10"
      >
        &#8592; {/* Left Arrow */}
      </button>
      <button
        className="custom-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600 transition duration-300 z-10"
      >
        &#8594; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default Slider;
