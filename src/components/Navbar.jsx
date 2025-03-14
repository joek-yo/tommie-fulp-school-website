// src/components/Navbar.jsx

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Function to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  // Handle navbar hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`bg-[#000080] p-4 text-white shadow-lg fixed top-0 left-0 w-full transition-transform duration-300 z-50 ${
      visible ? "translate-y-0" : "-translate-y-full"
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo + Academy Name */}
        <div className="flex items-center space-x-3">
          <img src="/Images/Logo_TFA.png" alt="TFA Academy" className="w-10 h-10 rounded-lg" loading="lazy" />
          <h1 className="text-2xl font-bold text-[#87CEEB]">Tommie Fulp Academy</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-[#87CEEB]">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#87CEEB]">About</Link></li>
          <li><Link to="/admissions" className="hover:text-[#87CEEB]">Admissions</Link></li>
          <li><Link to="/contact" className="hover:text-[#87CEEB]">Contact</Link></li>
          <li><Link to="/blog" className="hover:text-[#87CEEB]">Blog</Link></li>
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
      <div className={`absolute top-[90px] left-0 w-full bg-[#000080] z-50 transition-all duration-300 ease-in-out transform ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"
      } md:hidden`}>
        
        {/* Mobile Menu Logo */}
        <div className="flex justify-center p-2">
          <img src="/Images/Logo_TFA.png" alt="TFA Academy" className="w-16 h-auto rounded-lg" loading="lazy" />
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col space-y-2 p-4">
          <li><Link to="/" onClick={closeMenu} className="block p-2 hover:bg-[#87CEEB] hover:text-white rounded-lg">Home</Link></li>
          <li><Link to="/about" onClick={closeMenu} className="block p-2 hover:bg-[#87CEEB] hover:text-white rounded-lg">About</Link></li>
          <li><Link to="/admissions" onClick={closeMenu} className="block p-2 hover:bg-[#87CEEB] hover:text-white rounded-lg">Admissions</Link></li>
          <li><Link to="/contact" onClick={closeMenu} className="block p-2 hover:bg-[#87CEEB] hover:text-white rounded-lg">Contact</Link></li>
          <li><Link to="/blog" onClick={closeMenu} className="block p-2 hover:bg-[#87CEEB] hover:text-white rounded-lg">Blog</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
