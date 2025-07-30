// components/Gallery.jsx
import React from "react";

const Gallery = () => {
  const images = [
    {
      src: "/images/gallery1.png",
      description: "Branding",
    },
    {
      src: "/images/gallery2.png",
      description: "Training",
    },
    {
      src: "/images/gallery3.png",
      description: "Professional Passport Photos",
    },
    { src: "/images/gallery4.png", description: "Social Media Management" },
    {
      src: "/images/gallery5.png",
      description: "Industrial Printing",
    },
    { src: "/images/gallery6.png", description: "Graphic Design" },
  ];

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center text-[#22BFC3] mb-10">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image.src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 border-2 border-[#22BFC3]"
            />
            <p className="text-white text-2xl text-center mt-2 px-2">
              {image.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
