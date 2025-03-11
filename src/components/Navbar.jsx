// Navbar.jsx - Navigation Bar Component
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Tommie Fulp Academy</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Admissions</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-2 mt-2">
          <li><a href="#" className="block p-2 hover:bg-blue-700">Home</a></li>
          <li><a href="#" className="block p-2 hover:bg-blue-700">About</a></li>
          <li><a href="#" className="block p-2 hover:bg-blue-700">Admissions</a></li>
          <li><a href="#" className="block p-2 hover:bg-blue-700">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
