import React, { useEffect, useState } from "react";
import cuteImage from "/cute_cat.png";

const ProgressBarCute = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const percentage = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
      setScrollPercentage(percentage + 5);
      console.log("Scroll percentage:", percentage);
    };

    // Call once on mount to set initial position
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" md:w-4/5 progress-bar fixed left-1/2 bottom-0 h-2 -translate-x-[50%] z-50">
      <div
        className="progress bg-yellow-300 relative"
        style={{ width: `${scrollPercentage}%` }}
      >
        <img
          src={cuteImage}
          alt="cute cat"
          className="absolute -top-12 w-14 h-14 transition-all duration-100 ease-linear"
          style={{ left: `calc(100% - 100px)` }}
        />
      </div>
    </div>
  );
};

export default ProgressBarCute;
