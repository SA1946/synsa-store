import React from "react";
import "../testBtn.css";

const DayNightToggle = ({ checked, onChange }) => {
  console.log(checked);
  return (
    <div className="inline-block ">
      <div className="switch">
        <label htmlFor="toggle" className="cursor-pointer">
          <input
            id="toggle"
            className="toggle-switch"
            type="checkbox"
            checked={checked}
            onChange={onChange}
          />
          <div className="sun-moon">
            <div className="dots"></div>
          </div>
          <div className="background">
            <div className="stars1"></div>
            <div className="stars2"></div>
          </div>
        </label>
      </div>
      <div className="hidden credit mt-8 text-center text-sm text-gray-600 font-sans">
        <span>
          A rehash of{" "}
          <a
            href="https://dribbble.com/shots/1907553-Day-Night-Toggle-Button"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Ramakrishna V's concept on Dribbble
          </a>
        </span>
      </div>
    </div>
  );
};

export default DayNightToggle;
