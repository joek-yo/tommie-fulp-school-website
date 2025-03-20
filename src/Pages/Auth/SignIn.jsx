// src/pages/Auth/SignIn.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signin", formData);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      console.error(err.response.data.msg);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" name="email" placeholder="Email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} required />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold">Sign In</button>
        </form>
        <p className="text-center text-gray-600 mt-4">Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a></p>
      </div>
    </div>
  );
};

export default SignIn;