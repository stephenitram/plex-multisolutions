// pages/Services.jsx
import React from "react";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    title: "Printing & Copying",
    description: "Placeholder description for Printing & Copying services.",
  },
  {
    title: "Graphic Design",
    description: "Placeholder description for Graphic Design services.",
  },
  {
    title: "IT Productivity Training",
    description: "Placeholder description for IT Productivity Training.",
  },
  {
    title: "Professional Passport",
    description: "Placeholder description for Professional Passport service.",
  },
  {
    title: "Industrial Product Customization",
    description: "Placeholder description for Product Customization service.",
  },
  {
    title: "Branding",
    description: "Placeholder description for Branding services.",
  },
  {
    title: "Social Media Management",
    description: "Placeholder description for Social Media Management.",
  },
];

const Services = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 text-white ">
      <h2 className="text-4xl font-bold text-center text-[#22BFC3] mb-24 pt-14 h-20">
        Our Services
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 ">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
