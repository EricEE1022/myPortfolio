// Student Name: Ebibulukemi Emiowei (Eric)
// Student ID: 301367312
// Date: 09/29/2024

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/homelogo.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  //add a drawer for better mobile experience
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#212020] py-4 px-10 flex justify-between items-center z-50 backdrop-blur-md">
      <div className="text-white text-2xl font-bold">
        <a href="/">
          <img src={logo} alt="" className="w-12" />
        </a>
      </div>

      <div className="block md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
              }></path>
          </svg>
        </button>
      </div>

      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center w-full md:w-auto transition-all duration-300 ease-in-out`}>
        <ul className="md:flex md:space-x-8">
          <li className="text-white text-lg p-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#987750]" : "hover:text-[#987750]"
              }>
              Home
            </NavLink>
          </li>
          <li className="text-white text-lg p-2">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-[#987750]" : "hover:text-[#987750]"
              }>
              About
            </NavLink>
          </li>
          <li className="text-white text-lg p-2">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "text-[#987750]" : "hover:text-[#987750]"
              }>
              Projects
            </NavLink>
          </li>
          <li className="text-white text-lg p-2">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-[#987750]" : "hover:text-[#987750]"
              }>
              Services
            </NavLink>
          </li>
          <li className="text-white text-lg p-2">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-[#987750]" : "hover:text-[#987750]"
              }>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
