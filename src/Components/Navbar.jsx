import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { Button } from "./ReuseableComponent/Button";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b-2 py-4">
      <div className="container mx-auto flex md:justify-around justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10 md:h-13" />
        </div>

        {/* Search Bar - Hidden on Mobile */}
        <div className="hidden lg:flex border border-gray-700 rounded-full px-6 py-1">
          <input
            type="text"
            placeholder="restaurant, hotel, service...."
            className="outline-none"
          />
          <p className="px-3 text-gray-400"> | </p>
          <input
            type="text"
            placeholder="Singapour..."
            className="outline-none"
          />
          <div className="ms-4 bg-primary p-2 rounded-full">
            <IoIosSearch className="text-white" />
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-3">
          <TbWorld className="w-8 h-8 text-[#595959]" />
          <Button />
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="text-gray-600 text-2xl">☰</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-50 border-t mt-4">
          <div className="flex flex-col items-center gap-4 py-4">
            {/* Search Bar */}
            <div className="flex w-1/2 px-4 border border-gray-700 rounded-full py-1">
              <input
                type="text"
                placeholder="restaurant, hotel, service...."
                className="w-full outline-none"
              />
              <div className="ms-4 bg-primary p-2 rounded-full">
                <IoIosSearch className="text-white" />
              </div>
            </div>

            <div className="flex gap-4 justify-center items-center">
              {/* Language Icon */}
              <TbWorld className="w-8 h-8 text-[#595959]" />

              {/* Button */}
              <Button />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
