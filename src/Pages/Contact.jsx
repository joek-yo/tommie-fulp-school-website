// src/pages/Contact.jsx

import { useState } from "react";

const Contact = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" }); // Reset Form
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-[#000080]">Contact Us</h1>
      <p className="text-center text-gray-600 mt-2">We would love to hear from you!</p>

      {/* Contact Information */}
      <div className="mt-6 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-[#000080]">School Information</h2>
          <p className="text-gray-600 mt-2">
            📍 <strong>Address:</strong> Tommie Fulp Adventist Academy & Junior School, Nairobi, Kenya
          </p>
          <p className="text-gray-600 mt-2">📧 <strong>Email: </strong>info@tfaacademy.com</p>
          <p className="text-gray-600 mt-2">📞 <strong>Phone:</strong> +254 712 345 678</p>
          <p className="text-gray-600 mt-2">🕒 <strong>Office Hours:</strong> Mon - Fri, 8:00 AM - 5:00 PM</p>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-[#000080]">Send Us a Message</h2>
          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 bg-[#000080] text-white rounded hover:bg-[#0057b7]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-center text-[#000080]">Our Location</h2>
        <iframe
          className="w-full h-64 mt-4 rounded-lg"
          src="https://www.google.com/maps/embed/v1/place?q=Nairobi,Kenya&key=YOUR_GOOGLE_MAPS_API_KEY"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

