import React from "react";

const MovingSlogan = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gray-50 py-4">
      <div className="animate-marquee whitespace-nowrap text-2xl md:text-4xl font-semibold text-gray-700 tracking-wide">
        <span className="mx-8">
          Timeless Luxury | Dive into the Heritage of Ethnic Clothing | Elevate
          Your Style with Rukhman & Kalangi
        </span>
        <span className="mx-8">
          Timeless Luxury | Dive into the Heritage of Ethnic Clothing | Elevate
          Your Style with Ethnic & Co
        </span>
      </div>
    </div>
  );
};

export default MovingSlogan;
