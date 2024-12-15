import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Khan",
    position: "Fashion Enthusiast",
    review:
      "Ethnic Co. has completely redefined ethnic wear for me. The quality and design are unmatched! I receive compliments every time I wear their pieces.",
    image: "https://plus.unsplash.com/premium_photo-1669704098858-8cd103f4ac2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2FyYXxlbnwwfHwwfHx8MA%3D%3D", // Replace with real images
  },
  {
    id: 2,
    name: "Arjun Mehta",
    position: "Corporate Professional",
    review:
      "Their collection combines tradition with modernity so beautifully. The fabrics are luxurious, and the craftsmanship is top-notch!",
    image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Priya Sharma",
    position: "Influencer & Blogger",
    review:
      "Absolutely love the elegance of Ethnic Co.'s products! The attention to detail is truly admirable. Highly recommend their collection!",
    image: "https://plus.unsplash.com/premium_photo-1663090689324-5822338384e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYW4lMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          What Our Clients Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl p-6 transition-shadow duration-300 transform hover:scale-105"
            >
              {/* Client Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />

              {/* Review */}
              <p className="text-gray-600 italic mb-4">"{testimonial.review}"</p>

              {/* Client Info */}
              <h3 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-luxuryGold">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
