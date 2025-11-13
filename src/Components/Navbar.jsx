import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo2.png";
import { useState, useEffect } from "react";
import DayNightToggle from "./DayNightToggle";

const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Service",
    path: "/service",
  },
  {
    label: "Accessories",
    path: "/accessories",
  },
  {
    label: "Contact us",
    path: "/contactUs",
  },
];

const Navbar = ({ isDark, setIsDark }) => {
  const [atTop, setAtTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setAtTop(window.pageYOffset <= 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // useEffect(() => {
  //   document.body.className = isDark ? "dark" : "light";
  // }, [isDark]);

  return (
    <div className="relative">
      <div
        className={`fixed z-50 w-full trantion-all duration-700 ease-in-out inset-x-0 mx-auto ${
          atTop
            ? "max-w-2xl top-10 bg-trasparent"
            : "lg:max-w-4xl max-w-3xl -top-1 bg-[#435C7C]/70 bg-opacity-90 backdrop-blur-xl md:rounded-2xl md:mt-4"
        } ${
          isOpen
            ? "max-w-[95%] rounded-xl  bg-[#435C7C]/70 bg-opacity-95 backdrop-blur-xl shadow-2xl border border-white/20"
            : ""
        }`}
      >
        <NavBar
          atTop={atTop}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isDark={isDark}
        />
      </div>

      <div
        className={` fixed z-50 py-4 lg:right-20 md:right-[71.5%] right-20  transition-all duration-700 ease-in-out ${
          atTop ? " top-10  " : "-top-1 md:mt-4"
        } ${isOpen ? "max-w-[95%]" : ""}`}
      >
        <DayNightToggle
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
      </div>
    </div>
  );
};

function NavBar({ atTop, isOpen, setIsOpen }) {
  return (
    <div className="flex flex-col w-full px-6 md:px-9 mx-auto md:items-center md:justify-start md:flex-row">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img className="h-[65px] w-auto" src={logo} alt="logo" />
        </Link>

        <button
          className=" md:hidden focus:outline-none transition-all duration-300  hover:scale-110 p-2 rounded-xl hover:bg-white/10"
          onClick={() => setIsOpen((o) => !o)}
        >
          {/*  Hamburger Icon */}
          <div className="relative top-3 h-6 w-6 text-center">
            <span
              className={`absolute block h-0.5 w-6 transform transition-all duration-300 ease-in-out ${
                atTop && !isOpen ? " dark:bg-black bg-white " : "bg-white "
              }
              
              ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}
              
              `}
            />
            <span
              className={`absolute block h-0.5 w-6 transform transition-all duration-300 ease-in-out
                 ${atTop && !isOpen ? "dark:bg-black bg-white " : "bg-white"}
                ${isOpen ? "opacity-0" : "opacity-100"}
                
                `}
            />
            <span
              className={`absolute block h-0.5 w-6 transform transition-all duration-300 ease-in-out ${
                atTop && !isOpen ? "dark:bg-black bg-white " : "bg-white"
              } ${isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"}
              `}
            />
          </div>
        </button>
      </div>

      {/* Mobile phone nav */}
      <nav
        className={`flex-col flex-grow md:flex md:flex-row md:justify-end overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "flex max-h-96 opacity-100 pb-6 md:pb-0 md:mt-0 "
            : "max-h-0 opacity-0 md:max-h-none md:opacity-100 md:flex"
        }`}
      >
        <ul className="flex text-center flex-col md:flex-row gap-3 md:gap-8  rounded-none">
          {links.map((link, index) => {
            return (
              <li
                className={`transform transition-all duration-500 ease-in-out ${
                  atTop && !isOpen ? "dark:text-black" : "text-white"
                }
                  ${atTop ? "text-white" : "dark:text-white"}
                ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0 md:translate-y-0 md:opacity-100"
                } hover:scale-105 hover:text-blue-300 transition-colors duration-75`}
                key={index}
                style={{
                  transitionDelay: isOpen ? `100ms` : "0ms",
                }}
              >
                <NavLink
                  to={link.path}
                  onClick={(e) => {
                    setIsOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="block py-3 px-6 md:py-2 md:px-4 rounded-xl md:rounded-md hover:bg-white hover:bg-opacity-10 transition-all duration-200 font-medium"
                >
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
