// Navbar.jsx - Updated with Sky Blue & Navy Blue Theme
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#000080] p-4 text-white shadow-lg"> {/* Navy Blue */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#87CEEB]">Tommie Fulp Academy</h1> {/* Sky Blue Text */}

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:text-[#87CEEB]">Home</a></li>
          <li><a href="#" className="hover:text-[#87CEEB]">About</a></li>

          {/* Dropdown for Admissions */}
          <li className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="hover:text-[#87CEEB]"
            >
              Admissions ▼
            </button>

            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg overflow-hidden">
                <li className="p-2 hover:bg-[#87CEEB] hover:text-white">
                  <a href="#">Apply Now</a>
                </li>
                <li className="p-2 hover:bg-[#87CEEB] hover:text-white">
                  <a href="#">Fee Structure</a>
                </li>
                <li className="p-2 hover:bg-[#87CEEB] hover:text-white">
                  <a href="#">Scholarships</a>
                </li>
              </ul>
            )}
          </li>

          <li><a href="#" className="hover:text-[#87CEEB]">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden transition-all duration-300 md:hidden`}
      >
        <ul className="flex flex-col space-y-2 mt-2 bg-[#000080] p-4"> {/* Navy Blue */}
          <li><a href="#" className="block p-2 hover:bg-[#87CEEB] hover:text-white">Home</a></li>
          <li><a href="#" className="block p-2 hover:bg-[#87CEEB] hover:text-white">About</a></li>

          {/* Mobile Dropdown */}
          <li className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="block p-2 hover:bg-[#87CEEB] hover:text-white w-full text-left"
            >
              Admissions ▼
            </button>

            {isDropdownOpen && (
              <ul className="mt-1 bg-white text-black shadow-lg rounded-lg">
                <li className="p-2 hover:bg-[#87CEEB] hover:text-white"><a href="#">Apply Now</a></li>
                <li className="p-2 hover:bg-[#87CEEB] hover:text-white"><a href="#">Fee Structure</a></li>
                <li className="p-2 hover:bg-[#87CEEB] hover:text-white"><a href="#">Scholarships</a></li>
              </ul>
            )}
          </li>

          <li><a href="#" className="block p-2 hover:bg-[#87CEEB] hover:text-white">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
