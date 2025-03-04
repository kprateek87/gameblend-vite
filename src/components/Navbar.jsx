import React, { useState } from "react";
import logoDark from "../welcome/logo-light.svg";
import { navMenu, navMenutwo } from "../Data/navbar";
import { FaBarsProgress, FaChevronDown } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router";
import JoinNowModal from "./JoinNowModal";

function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [responsiveNav, setResponsiveNav] = useState(true);
  let timeoutId = null;

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutId);
    setHoveredIndex(index);
  };
  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setHoveredIndex(null);
    }, 300);
  };

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-black text-white relative z-20">
      <div className="flex items-center gap-6">
        <button
          className="md:hidden"
          onClick={() => setResponsiveNav(!responsiveNav)}
        >
          {responsiveNav ? <FaBarsProgress /> : <FaTimes />}
        </button>
        <img src={logoDark} alt="Game Blend Logo" className="w-24" />
        <ul
          className={`md:bg-transparent md:flex items-center gap-6 capitalize md:static  ${
            responsiveNav
              ? "hidden"
              : "absolute top-[4.5rem] w-full bg-gray-600 left-0"
          }`}
        >
          {navMenu.map((menu, index) => (
            <li
              key={index}
              className="relative group md:hover:bg-transparent hover:bg-gray-900 md:p-0 py-2 px-10"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={menu.link}
                className="flex items-center gap-2 hover:text-yellow-400 transition"
              >
                {menu.title} {menu.children && <FaChevronDown />}
              </Link>

              {menu.children && hoveredIndex === index && (
                <ul className="absolute z-10 left-0 mt-2 w-40 bg-gray-900 text-white shadow-lg rounded-md overflow-hidden">
                  {menu.children.map((child, childIndex) => (
                    <li
                      key={childIndex}
                      className="hover:bg-yellow-500 transition"
                    >
                      <a href={child.link} className="block px-4 py-2">
                        {child.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          <span className="text-gray-500 hidden md:flex">|</span>

          {navMenutwo.map((menu, index) => (
            <li
              key={index}
              className="hover:text-yellow-400 transition relative md:hover:bg-transparent hover:bg-gray-900 md:p-0 py-2 px-10"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={menu.link}
                className="flex items-center gap-2 hover:text-yellow-400 transition"
              >
                {menu.title} {menu.children && <FaChevronDown />}
              </a>
              {menu.children && hoveredIndex === index && (
                <ul className="absolute left-0 mt-2 w-40 bg-gray-900 text-white shadow-lg rounded-md overflow-hidden">
                  {menu.children.map((child, childIndex) => (
                    <li
                      key={childIndex}
                      className="hover:bg-yellow-500 transition"
                    >
                      <a href={child.link} className="block px-4 py-2">
                        {child.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          <span className="text-gray-500 hidden md:flex">|</span>

          <li className="hover:text-yellow-400 transition md:hover:bg-transparent hover:bg-gray-900 md:p-0 py-2 px-10">
            <a href="/faq">FAQ</a>
          </li>
        </ul>
      </div>
      <div>
        <JoinNowModal />
        {/* <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2 rounded-md font-semibold">
          Join Now
        </button> */}
      </div>
    </nav>
  );
}

export default Navbar;
