// pages/PlexAcademy.jsx
import React from "react";
import Clock from "../components/Clock";

const courses = [
  {
    title: "Introduction to Graphic Design",
    description: "Learn the basics of design principles and tools.",
    link: "https://meeting-link.com/graphic-design",
  },
  {
    title: "Web Development Bootcamp",
    description: "HTML, CSS, JavaScript, and React from scratch.",
    link: "https://meeting-link.com/web-dev",
  },
  {
    title: "Digital Marketing Essentials",
    description: "SEO, social media, and content strategy.",
    link: "https://meeting-link.com/marketing",
  },
];

const PlexAcademy = () => {
  return (
    <div className="bg-[#111] text-white font-sans p-6 max-w-[800px] w-full mx-auto ">
      {/* Header */}
      <header className="text-center mb-10 ">
        <h1 className="text-4xl font-bold text-[#22BFC3] pt-24 h-20 mb-10">
          PLEX Academy
        </h1>
        <p className="text-lg text-gray-300 mt-2">Learn. Grow. Succeed.</p>
      </header>

      {/* Calendar */}
      <section className="mb-18 bg-[#000300]">
        <Clock />
      </section>

      {/* Courses */}
      <section>
        <h2 className="text-2xl font-semibold text-[#FFA07A] mb-6">
          📚 Available Courses
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-lg shadow-md border border-[#22BFC3]"
            >
              <h3 className="text-xl font-bold text-[#22BFC3]">
                {course.title}
              </h3>
              <p className="text-gray-300 mt-2">{course.description}</p>
              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-[#FFA07A] text-black px-4 py-2 rounded hover:bg-[#22BFC3] transition"
              >
                Join Now
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PlexAcademy;
