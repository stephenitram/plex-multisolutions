// components/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-[#1f1f1f] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[#22BFC3]">
      <h3 className="text-xl font-semibold text-[#FF6B4A] mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
