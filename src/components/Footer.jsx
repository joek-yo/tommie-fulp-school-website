// src/components/Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-[#000080] text-white py-10 mt-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* School Info */}
        <div>
          <h2 className="text-2xl font-bold text-[#FFD700]">Tommie Fulp Adventist Academy</h2>
          <p className="mt-2 text-gray-300">Shaping young minds with excellence and faith.</p>
          <p className="mt-2"><strong>Phone:</strong> +254 712 345 678</p>
          <p><strong>Email:</strong> info@tfaacademy.com</p>
          <p><strong>Location:</strong> Nairobi, Kenya</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#FFD700]">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
            <li><a href="/admissions" className="hover:text-gray-400">Admissions</a></li>
            <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#FFD700]">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-gray-300">
        &copy; {new Date().getFullYear()} Tommie Fulp Adventist Academy. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
