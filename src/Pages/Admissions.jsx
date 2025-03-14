// src/pages/Admissions.jsx

import { useState } from "react";

const Admissions = () => {
  // State to handle form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    grade: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Application Submitted Successfully!");
    setFormData({ fullName: "", email: "", phone: "", grade: "", message: "" });
  };

  return (
    <div className="pt-[95px] py-16 px-6 bg-gray-100 text-[#000080]">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">Admissions</h1>
        
        <p className="text-lg max-w-2xl mx-auto text-center mb-10">
          Welcome to Tommie Fulp Academy & Junior School. Our admissions process is simple and transparent. 
          Please fill out the application form below, and our admissions team will get in touch with you.
        </p>

        {/* Application Form */}
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-4">Apply Now</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-lg font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-lg font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Grade Selection */}
            <div>
              <label className="block text-lg font-medium">Grade Applying For</label>
              <select
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Grade</option>
                <option value="Play Group (PG)">Play Group (PG)</option>
                <option value="Pre-primary 1 (PP1)">Pre-primary 1 (PP1)</option>
                <option value="Pre-primary 2 (PP2)">Pre-primary 2 (PP2)</option>
                <option value="Grade 1">Grade 1</option>
                <option value="Grade 2">Grade 2</option>
                <option value="Grade 3">Grade 3</option>
                <option value="Grade 4">Grade 4</option>
                <option value="Grade 5">Grade 5</option>
                <option value="Grade 6">Grade 6</option>
                <option value="Grade 7">Grade 7</option>
                <option value="Grade 8">Grade 8</option>
                <option value="Grade 9">Grade 9</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg font-medium">Additional Information</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#000080] text-white font-semibold rounded-lg hover:bg-[#4682B4] transition"
            >
              Submit Application
            </button>
          </form>
        </div>

        {/* Admission Requirements */}
        <div className="mt-16 bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-bold mb-4">Admission Requirements</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Copy of birth certificate</li>
            <li>Previous school report card</li>
            <li>Filled admission form</li>
            <li>Interview with the school principal</li>
            <li>Tuition fee payment confirmation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
