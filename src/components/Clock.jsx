// // src/components/Clock.jsx

import React, { useState, useEffect } from "react";

const Clock = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = dateTime.toLocaleDateString("en-NG", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = dateTime.toLocaleTimeString("en-NG", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // Enables AM/PM
  });

  return (
    <div className="bg-black bg-opacity-50 text-white p-2 rounded-md text-sm sm:text-base shadow-md">
      <div>{formattedDate}</div>
      <div>
        {formattedTime}{" "}
        <span className="text-[#22BFC3] font-semibold">WAT</span>
      </div>
    </div>
  );
};

export default Clock;
