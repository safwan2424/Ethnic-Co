import React from "react";
import { FaTrophy, FaCalendarAlt, FaUsers } from "react-icons/fa"; // Importing React icons

const images = {
  Image1: "https://images.unsplash.com/photo-1498661694102-0a3793edbe74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JvdXAlMjBpbmRpYW4lMjBtYXJyaWFnZXxlbnwwfHwwfHx8MA%3D%3D",
  Image2: "https://media.istockphoto.com/id/1542005264/photo/happy-rural-indian-farmer-family-with-agronomist-or-banker-use-laptop-man-officer-showing.webp?a=1&b=1&s=612x612&w=0&k=20&c=rCP0n9YNPGbhpi92rgJUx1AS7ISZ4WtgcjyN3O6ehEo=",
  Image3: "https://plus.unsplash.com/premium_photo-1679415150838-a85a1bbb233b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3JvdXAlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
};

const Achievements = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Our Achievements & Milestones
          </h2>
        </div>

        {/* Achievement 1: Fashion Show in Jodhpur */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <img
                src={images.Image1}
                alt="Fashion Show in Jodhpur"
                className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </div>
          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <FaTrophy className="text-luxuryGold" /> A Grand Showcase in Lucknow
            </h3>
            <p className="text-lg text-gray-600">
              In 2023, we proudly showcased our designs at a prestigious fashion show in Lucknow, marking a significant milestone in our brand's evolution and unwavering commitment to setting new standards of style and sophistication.
            </p>
          </div>
        </div>

        {/* Achievement 2: 15 Years of Timeless Luxury */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <img
                src={images.Image2}
                alt="15 Years of Timeless Luxury"
                className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </div>
          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <FaCalendarAlt className="text-luxuryGold" /> 15 Years of Timeless Luxury
            </h3>
            <p className="text-lg text-gray-600">
              Indulge in a collection where each piece tells a story of sophistication meticulously crafted through 15 years of dedicated artistry.
            </p>
          </div>
        </div>

        {/* Achievement 3: Traditional Elegance */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <img
                src={images.Image3}
                alt="Traditional Elegance"
                className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </div>
          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <FaTrophy className="text-luxuryGold" /> Traditional Elegance
            </h3>
            <p className="text-lg text-gray-600">
              Celebrate the rich cultural heritage of Rajasthan with Ethnic and Co captivating designs.
            </p>
          </div>
        </div>

        {/* Achievements Timeline */}
        <div className="flex justify-center gap-8">
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">2023</p>
            <p className="text-gray-600">Grand Showcase in Jodhpur</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">2020</p>
            <p className="text-gray-600">Brand Expansion</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">2015</p>
            <p className="text-gray-600">Award-Winning Designs</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">2013</p>
            <p className="text-gray-600">Initial Launch</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">2010</p>
            <p className="text-gray-600">Inception of the Brand</p>
          </div>
        </div>

        {/* Highlighting Success */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">5000 Happy Families Styled</h3>
          <p className="text-lg text-gray-600 mb-8">Join the ranks of over 5000 delighted families who have embraced our designs, seamlessly blending tradition with modernity.</p>
          <div className="flex justify-center gap-4">
            <div className="w-12 h-12 bg-luxuryGold rounded-full flex items-center justify-center">
              <FaUsers className="text-white" size={24} />
            </div>
            <p className="text-lg text-gray-600">Over 5000 families styled with luxury</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
