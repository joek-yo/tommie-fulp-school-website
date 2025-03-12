// Navbar.jsx - Updated with Sky Blue & Navy Blue Theme & React Router Links
import { useState } from "react";
import { Link } from "react-router-dom";

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
          <li><Link to="/" className="hover:text-[#87CEEB]">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#87CEEB]">About</Link></li>

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
                  <Link to="/apply">Apply Now</Link>
                </li>
                <li className="p-2 hover:bg-[#87CEEB] hover:text-white">
                  <Link to="/fees">Fee Structure</Link>
                </li>
                <li className="p-2 hover:bg-[#87CEEB] hover:text-white">
                  <Link to="/scholarships">Scholarships</Link>
                </li>
              </ul>
            )}
          </li>

          <li><Link to="/contact" className="hover:text-[#87CEEB]">Contact</Link></li>
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
          <li><Link to="/" className="block p-2 hover:bg-[#87CEEB] hover:text-white">Home</Link></li>
          <li><Link to="/about" className="block p-2 hover:bg-[#87CEEB] hover:text-white">About</Link></li>

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
                <li className="p-2 hover:bg-[#87CEEB] hover:text-white"><Link to="/apply">Apply Now</Link></li>
                <li className="p-2 hover:bg-[#87CEEB] hover:text-white"><Link to="/fees">Fee Structure</Link></li>
                <li className="p-2 hover:bg-[#87CEEB] hover:text-white"><Link to="/scholarships">Scholarships</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/contact" className="block p-2 hover:bg-[#87CEEB] hover:text-white">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
