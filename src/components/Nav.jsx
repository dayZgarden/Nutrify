import React from "react";

import { FiMenu } from "react-icons/fi";


const Nav = () => {
  return (
    <>
      <nav className="navbar p-6 border-b border-gray-200">
        <div className="max-w-7xl px-6 lg:px-8 mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-semibold text-[#308a7b]">
            Nutrify
          </a>
          <ul className="hidden font-semibold cursor-pointer md:flex space-x-6">
            <li className="nav__link text-black hover:text-[#308a7b]">
              About
            </li>
            <li className="nav__link text-black hover:text-[#308a7b]">
              App
            </li>
            <li className="nav__link text-black hover:text-[#308a7b]">
              Community
            </li>
            <li className="nav__link text-black hover:text-[#308a7b]">
              Steps
            </li>
          </ul>
          <button className="btn md:ml-6">
            Sign in
          </button>
          <FiMenu className="burger md:hidden text-[#308a7b] ml-4" />
        </div>
      </nav>
    </>
  );
};

export default Nav;
