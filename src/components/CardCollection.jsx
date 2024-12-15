import React from 'react';

const CardCollection = () => {
  const cards = [
    {
      id: 1,
      title: 'Traditional Sarees',
      image: 'https://plus.unsplash.com/premium_photo-1724762183683-251ce8b09d08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D', // Replace with actual image URL
      description: 'Explore our beautiful collection of handwoven sarees.',
    },
    {
      id: 2,
      title: 'Designer Kurtis',
      image: 'https://images.unsplash.com/photo-1708534246055-d7b149acb731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D',
      description: 'Unique kurtis designed to add elegance to your wardrobe.',
    },
    {
      id: 3,
      title: 'Ethnic Accessories',
      image: 'https://images.unsplash.com/photo-1717586756136-d9a3eeb1fa6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D',
      description: 'Complete your look with our handcrafted accessories.',
    },
    {
      id: 4,
      title: 'Wedding Collection',
      image: 'https://plus.unsplash.com/premium_photo-1691030256206-b7398c8bfc49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D',
      description: 'Exquisite wedding attires for your special moments.',
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 tracking-wide font-playfair">
          Our Collection
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative group bg-white bg-opacity-20 backdrop-blur-md rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 font-poppins">
                  {card.description}
                </p>
                <a
                  href="#"
                  className="inline-block bg-luxuryGold text-white px-5 py-2 rounded-full hover:bg-yellow-600 transition-colors duration-300"
                >
                  Explore Now
                </a>
              </div>

              {/* Blurred Overlay */}
              <div className="absolute inset-0 bg-white opacity-10 backdrop-blur-lg rounded-xl group-hover:opacity-20"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCollection;