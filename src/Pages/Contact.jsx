// src/pages/Contact.jsx

import { useState } from "react";

const Contact = () => {
  // State for form input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent:", formData);
    alert("Your message has been sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="py-16 px-6 bg-gray-100 text-[#000080]">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">Contact Us</h1>

        {/* School Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-lg shadow-lg">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Contact Details</h2>
            <p className="text-lg"><strong>Phone:</strong> +254 712 345 678</p>
            <p className="text-lg"><strong>Email:</strong> info@tfaacademy.com</p>
            <p className="text-lg"><strong>Address:</strong> Nairobi, Kenya</p>
          </div>

          {/* Google Map Embed */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Location</h2>
            <iframe
              title="School Location"
              className="w-full h-64 rounded-lg"
              src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Nairobi,Kenya"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-lg font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-medium">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-lg font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg font-medium">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#000080] text-white font-semibold rounded-lg hover:bg-[#4682B4] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
